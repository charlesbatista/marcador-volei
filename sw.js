// Guarda o app no aparelho para funcionar sem internet.
// Ao mudar algum arquivo, aumente a versão para os celulares baixarem a nova.
const CACHE = 'marcador-volei-v9';
const FILES = [
  './',
  'index.html',
  'manifest.webmanifest',
  'icons/icon.svg',
  'icons/apple-touch-icon.png',
  'icons/icon-192.png',
  'icons/icon-512.png',
];
// Quanto esperar a internet antes de abrir a cópia guardada.
const PAGE_TIMEOUT_MS = 2000;

self.addEventListener('install', (e) => {
  // cache: 'reload' ignora o cache HTTP do navegador para guardar a versão mais nova
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(req, { ignoreSearch: true })
      || (req.mode === 'navigate' && await cache.match(new URL('index.html', self.registration.scope)));

    const update = fetch(req, { cache: 'no-cache' })
      .then((res) => {
        if (res.ok) cache.put(req, res.clone());
        return res;
      })
      .catch(() => null);

    if (!cached) return (await update) || new Response('Sem conexão', { status: 503 });

    if (req.mode === 'navigate') {
      // Página: tenta a versão nova (o iPhone lê as configurações dela ao adicionar à
      // Tela de Início), mas com sinal ruim abre a cópia guardada depois de 2 s.
      const timeout = new Promise((r) => setTimeout(() => r(null), PAGE_TIMEOUT_MS));
      const fresh = await Promise.race([update, timeout]);
      if (!fresh || !fresh.ok) e.waitUntil(update);
      return (fresh && fresh.ok) ? fresh : cached;
    }

    // Ícones e outros arquivos: abre do aparelho na hora e atualiza em segundo plano.
    e.waitUntil(update);
    return cached;
  })());
});
