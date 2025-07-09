# Assistente Gamer

Projeto que integra inteligência artificial com interface web para responder perguntas sobre jogos.

## Foco do projeto

O objetivo é criar uma interface simples que permite ao usuário fazer perguntas sobre estratégias, builds e dicas de jogos específicos (Valorant, League of Legends, CS:GO) e receber respostas baseadas em informações atualizadas.

## Estrutura do projeto

```
AIgame forFun/
├── index.html          # Estrutura principal da página
├── style.css           # Estilos e animações
├── script.js           # Lógica JavaScript e API
├── assets/
│   ├── bg.jpg         # Imagem de fundo
│   └── logo.png       # Logo do projeto
└── README.md
```

## Como foi implementado

### HTML (index.html)
- Formulário com campos para API key, seleção de jogo e pergunta
- Estrutura semântica com header, main e section
- Integração com fontes do Google Fonts (Inter)
- Área para exibir respostas da IA

### CSS (style.css)
- Design responsivo com gradientes coloridos
- Animações de entrada e hover effects
- Background com imagem personalizada
- Estilização de formulários e botões
- Estados de loading e disabled

### JavaScript (script.js)
- Integração com Gemini API 2.0 Flash
- Conversão de markdown para HTML
- Validação de formulários
- Tratamento de erros
- Busca em tempo real via Google Search

### API (Gemini)
- Modelo: `gemini-2.0-flash`
- Prompt estruturado com contexto específico do jogo
- Limitação de 500 caracteres por resposta
- Busca atualizada sobre patches atuais
- Resposta em formato markdown

## Fluxo de funcionamento

1. Usuário preenche API key, seleciona jogo e faz pergunta
2. JavaScript valida campos e envia requisição para Gemini
3. API processa pergunta com contexto específico do jogo
4. Resposta é convertida de markdown para HTML
5. Resultado é exibido na interface

## Tecnologias utilizadas

- **Frontend**: HTML5, CSS3, JavaScript
- **API**: Google Gemini 2.0 Flash
- **Bibliotecas**: Showdown.js (conversão markdown)
- **Fontes**: Google Fonts (Inter)