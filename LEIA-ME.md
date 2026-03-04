# Pedrozo · Finanças — PWA

## Como instalar no celular (sem App Store)

### iPhone / iPad
1. Abra o Safari e acesse o link do app
2. Toque no botão **Compartilhar** (□↑) na barra inferior
3. Role e toque em **"Adicionar à Tela de Início"**
4. Toque em **Adicionar** — o ícone aparecerá na tela inicial
5. Abra como qualquer app — funciona offline!

### Android
1. Abra o Chrome e acesse o link do app
2. Toque nos **3 pontos** (⋮) no canto superior direito
3. Toque em **"Adicionar à tela inicial"** ou **"Instalar app"**
4. Confirme — o ícone aparece na tela inicial

---

## Como hospedar gratuitamente (GitHub Pages)

1. Crie uma conta em https://github.com
2. Clique em **New repository**, nome: `pedrozo-financas`
3. Marque **Public** e clique **Create repository**
4. Arraste todos os arquivos desta pasta para a página do repositório
5. Vá em **Settings → Pages → Source → main / root**
6. Seu app estará em: `https://SEU_USUARIO.github.io/pedrozo-financas`
7. Compartilhe este link com a Priscila — ela instala no celular dela também!

---

## Como importar extratos mensalmente

1. **Itaú**: App Itaú → Extrato → Exportar CSV
2. **Unicred conta**: Internet Banking → Extrato → Baixar XLS
3. **Fatura Unicred**: Internet Banking → Cartão → Fatura → Baixar CSV
4. No app, vá em **Importar** → arraste os arquivos
5. Revise as categorias → **Confirmar Importação**

Leva menos de 2 minutos por mês!

---

## Arquivos do projeto

```
pedrozo-app/
├── index.html      ← App principal
├── manifest.json   ← Configuração PWA
├── sw.js           ← Suporte offline
├── style.css       ← Visual
├── app.js          ← Lógica e regras
└── icons/          ← Ícones do app
```

Os dados ficam salvos **no próprio celular** (localStorage).
Nenhuma informação vai para servidores externos.
