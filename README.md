# 🏐 Marcador de Vôlei

Placar de vôlei para o celular. É um app web (PWA): abre no Safari, você adiciona
à Tela de Início e ele funciona como um app em tela cheia, até sem internet.

## Como usar

- **Toque** no lado do time para marcar ponto.
- **Tirar ponto:** toque no **−** ou arraste o dedo para baixo no lado do time.
- **↶** desfaz a última ação (pontos, fim de set, zerar partida).
- **⇄** troca os times de lado.
- **⟲** começa uma nova partida.
- **⚙** ajustes: nome e cor dos times, melhor de 1/3/5 sets, pontos por set
  (15/21/25), pontos do tie-break, vencer por 2, troca de lado automática.
- A **bola** mostra quem está sacando (o time que fez o último ponto).
- As **bolinhas** embaixo mostram os sets ganhos.
- O placar fica salvo no aparelho: se fechar o app, ele volta de onde parou.
- A tela fica ligada enquanto o app está aberto (iOS 18.4 ou mais recente).

Funciona em pé (times um em cima do outro) ou deitado (lado a lado).

## Instalar no iPhone

1. Publique o site (veja abaixo) e abra o endereço no **Safari**.
2. Toque em **Compartilhar** (quadrado com a seta para cima).
3. Toque em **Adicionar à Tela de Início** → **Adicionar**.

Pronto: o ícone 🏐 aparece na Tela de Início.

## Publicar grátis com GitHub Pages

1. No GitHub, abra o repositório → **Settings** → **Pages**.
2. Em **Build and deployment**, escolha **Deploy from a branch**.
3. Selecione a branch (por exemplo `main`) e a pasta `/ (root)` → **Save**.
4. Depois de 1–2 minutos o endereço aparece no topo da página, algo como
   `https://charlesbatista.github.io/marcador-volei/`.

## Arquivos

- `index.html`: o app inteiro (tela, estilo e lógica)
- `manifest.webmanifest`: nome, ícone e modo tela cheia
- `sw.js`: guarda os arquivos para funcionar offline
- `icons/`: ícones do app
