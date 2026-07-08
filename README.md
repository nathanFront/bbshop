# bbshop - Landing Page

Landing page moderna para a barbearia bbshop em Diadema - SP, com design dark theme e integração para agendamento via Calendly e WhatsApp.

## 🎨 Identidade Visual

A página segue um design dark theme premium:
- Logo "bbshop" em fonte gótica (UnifrakturMaguntia)
- Cores preto (#0a0a0a) e dourado (#c9a227)
- Layout moderno inspirado em salões de barbearia premium
- Imagens de alta qualidade de barbearia

## 📱 Funcionalidades

- **Header fixo com navegação**: Menu responsivo com links para Home, Location, Gallery, Blog, Shop, Contact e Reservations
- **Hero Section**: Imagem de fundo com texto "Make Unique Style Everytime"
- **About Section**: Seção sobre a barbearia com texto e imagens
- **Agendamento via WhatsApp**: Botão que abre diretamente o WhatsApp com mensagem pré-configurada para o número (11) 94945-9146
- **Agendamento via Calendly**: Botão que abre um modal com o widget do Calendly para agendamento
- **Design responsivo**: Funciona perfeitamente em desktop, tablet e mobile

## ⚙️ Configuração

### Configurar o Calendly

1. Crie uma conta no [Calendly](https://calendly.com/)
2. Crie um tipo de evento (ex: "Corte de Cabelo - 30min")
3. Copie a URL do seu evento (ex: `https://calendly.com/seu-usuario/30min`)
4. No arquivo `index.html`, linha 87, substitua `SEU-USUARIO-AQUI` pelo seu usuário do Calendly:

```html
<div class="calendly-inline-widget" data-url="https://calendly.com/SEU-USUARIO-AQUI/30min" style="min-width:320px;height:700px;"></div>
```

### Número do WhatsApp

O número já está configurado para (11) 94945-9146. Se precisar alterar, edite o link no arquivo `index.html`, linha 43:

```html
<a href="https://wa.me/5511949459146?text=..." ...>
```

### Imagens

As imagens usadas são do Unsplash. Para usar suas próprias imagens:
1. Substitua as URLs no arquivo `styles.css` nas linhas 95, 216, 220 e 225
2. Ou adicione suas imagens na pasta do projeto e atualize os caminhos

## 🚀 Como usar

1. Abra o arquivo `index.html` no navegador
2. Configure o link do Calendly conforme instruções acima
3. Teste os botões de agendamento
4. Personalize as imagens conforme necessário

## 📁 Estrutura do projeto

```
bbshp-landing/
├── index.html    # Estrutura HTML da página
├── styles.css    # Estilos CSS (dark theme premium)
├── script.js     # Funcionalidades JavaScript (menu mobile e modal Calendly)
└── README.md     # Este arquivo
```

## 🌐 Deploy

Para publicar a página, você pode usar:
- **GitHub Pages**: Faça upload do repositório e ative o GitHub Pages
- **Netlify**: Arraste a pasta para o Netlify Drop
- **Vercel**: Conecte o repositório ou use o Vercel CLI
- **Qualquer hospedagem estática**: Apenas faça upload dos arquivos

## 📱 Responsividade

A página é totalmente responsiva e funciona em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

O menu se transforma em hamburger menu em dispositivos móveis.
