# Assistente Gamer

Projeto que integra inteligência artificial com interface web para responder perguntas sobre jogos, com seleção entre diferentes inteligências (Gemini ou NerdolaAI).

## Foco do projeto

O objetivo é criar uma interface simples e responsiva que permite ao usuário fazer perguntas sobre estratégias, builds e dicas de jogos específicos (Valorant, League of Legends, Teamfight Tactics, Death Stranding 1 e 2) e receber respostas baseadas em informações atualizadas.

## ⚠️ Aviso de Segurança

> **Atenção:** Neste projeto, a chave da API Gemini fica visível no código JavaScript quando a opção NerdolaAI é utilizada. Isso significa que qualquer pessoa pode visualizar e utilizar essa chave ao inspecionar o código do site. **Nunca utilize este modelo em produção com uma chave sensível ou de uso pago.**
>
> Para projetos profissionais ou produção, utilize um backend intermediário para proteger a chave da API. Este projeto é recomendado apenas para testes, estudos ou uso pessoal.

## Estrutura do projeto

```
Nerdola/
├── index.html          # Estrutura principal da página
├── style.css           # Estilos e responsividade
├── script.js           # Lógica JavaScript e integração com API
├── assets/
│   ├── bg.jpg         # Imagem de fundo
│   ├── favicon.png    # Favicon
│   └── logo.png       # Logo do projeto
└── README.md
```

## Funcionalidades

- Seleção entre duas inteligências: **Gemini** (Google) ou **NerdolaAI** (usa Gemini com chave fixa)
- Campo de API KEY só aparece se Gemini for selecionado
- Formulário responsivo, adaptado para mobile e desktop
- Suporte a múltiplos jogos populares
- Resposta formatada em markdown convertida para HTML
- Feedback visual de carregamento e erros

## Como usar

1. Escolha a inteligência desejada (Gemini ou NerdolaAI)
2. Se escolher Gemini, insira sua API KEY
3. Selecione o jogo desejado
4. Escreva sua pergunta (ex: "Melhor build para ADC...")
5. Clique em "Perguntar" e aguarde a resposta

## Tecnologias utilizadas

- **Frontend**: HTML5, CSS3, JavaScript
- **API**: Google Gemini 2.0 Flash
- **Bibliotecas**: Showdown.js (conversão markdown)
- **Fontes**: Google Fonts (Inter)

## Responsividade

- Todos os campos do formulário e seleção de inteligência são otimizados para uso em dispositivos móveis e desktop
- Campos ocupam 100% da largura em telas pequenas, com padding confortável para toque

## Exemplo de uso

```
1. Selecione "NerdolaAI" para usar a IA pronta para gamers (não precisa de API KEY)
2. Selecione "Gemini" para usar sua própria chave da Google Gemini
3. Escolha o jogo e faça sua pergunta!
```

## Observações

- A opção NerdolaAI utiliza a mesma API Gemini, mas com uma chave fixa já embutida no sistema.
- O campo de API KEY só é obrigatório para a opção Gemini.
- O projeto pode ser facilmente adaptado para incluir novos jogos ou outras inteligências.