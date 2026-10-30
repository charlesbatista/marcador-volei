# 🏐 Marcador de Vôlei

Placar de vôlei para o celular. É um app web (PWA): abre no Safari, você adiciona
à Tela de Início e ele funciona como um app em tela cheia, até sem internet.

## Como usar

- **Toque** no lado do time para marcar ponto.
- **Tirar ponto:** toque no **−** ou arraste o dedo para baixo no lado do time.
- **↶** desfaz a última ação (pontos, fim de set, zerar partida).
- **⇄** troca os times de lado.
- **⟲** começa uma nova partida: você escolhe o **nome dos times** e se o set
  vai até **12 pontos** (padrão) ou **25 pontos**. Essa tela aparece sozinha
  na primeira vez que abre o app.
- **⚙** ajustes: nome e cor dos times, melhor de 1/3/5 sets, pontos por set
  (12/25), pontos do set decisivo (igual aos outros ou 15), vencer por 2,
  troca de lado automática.
- A **bola** mostra quem está sacando (o time que fez o último ponto).
- As **bolinhas** embaixo mostram os sets ganhos.
- **Vai a 3:** no empate a um ponto do fim (11 × 11 no set de 12, 24 × 24 no
  de 25), a tela fica dourada, o placar zera e quem fizer 3 primeiro ganha o
  set. Dá para desligar em ⚙ Ajustes.
- O placar fica salvo no aparelho: se fechar o app, ele volta de onde parou.
- A tela fica ligada enquanto o app está aberto (iOS 18.4 ou mais recente).

Funciona em pé (times um em cima do outro) ou deitado (lado a lado).

## Instalar no iPhone

1. Publique o site (veja abaixo) e abra o endereço no **Safari**.
2. Toque em **Compartilhar** (quadrado com a seta para cima).
3. Toque em **Adicionar à Tela de Início** → **Adicionar**.

Pronto: o ícone 🏐 aparece na Tela de Início.

## Sem internet

O app funciona 100% offline: não usa nada da internet (nem fontes, nem
imagens de fora). Só é preciso internet **uma vez**:

1. Depois de adicionar à Tela de Início, **abra o app pelo ícone com internet**.
2. Espere aparecer o aviso **“✓ Pronto para usar sem internet”**.

A partir daí ele abre direto do iPhone, instantâneo, mesmo em modo avião ou com
sinal ruim. Quando tiver internet, ele baixa atualizações em segundo plano
(aparecem na próxima vez que abrir).

> O app da Tela de Início guarda os dados separado do Safari, por isso esse
> primeiro acesso precisa ser pelo ícone, não pelo Safari.

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
