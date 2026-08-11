# CasaEmDia — Site de Serviços (React + Tailwind)

Site institucional para divulgação de serviços de elétrica, hidráulica,
manutenção preventiva/corretiva e pintura. Totalmente responsivo
(celular, tablet e desktop).

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente http://localhost:5173).

## Como gerar a versão de produção

```bash
npm run build
```

Os arquivos finais ficam na pasta `dist/`. Você pode hospedar essa pasta
em qualquer serviço (Vercel, Netlify, Hostinger, etc).

## Personalização rápida

Quase tudo que você precisa editar está em um único arquivo:

**`src/siteConfig.js`**

Lá você troca:
- Nome do negócio e cidade
- Número de WhatsApp (`whatsappNumber`) — assim que preencher, os botões
  do site passam a abrir o WhatsApp automaticamente. Enquanto estiver
  vazio, os botões abrem "ligar" para o telefone.
- Telefone e e-mail
- Lista de serviços, textos "por que nos escolher", depoimentos e FAQ

## Estrutura do projeto

```
src/
  siteConfig.js       <- edite aqui para trocar textos/contato
  App.jsx             <- monta a página juntando as seções
  components/
    Header.jsx         Header fixo com menu responsivo
    Hero.jsx            Seção principal com "ordem de serviço" visual
    Services.jsx        Grade de serviços
    WhyUs.jsx            Por que escolher
    About.jsx            Sobre o negócio + números
    Testimonials.jsx     Depoimentos de clientes
    FAQ.jsx               Perguntas frequentes (acordeão)
    Contact.jsx           Seção de contato final
    Footer.jsx            Rodapé
    FloatingContact.jsx   Botão flutuante de WhatsApp/telefone
    ContactCTA.jsx        Botão de contato reutilizável
```

## Design

Paleta azul-marinho + ciano técnico, tipografia Space Grotesk (títulos) +
Inter (texto) + JetBrains Mono (números/códigos), inspirada no formato de
"ordem de serviço" usado por prestadores de serviço técnico.
