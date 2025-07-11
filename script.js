console.log('JS carregado!')
const gameSelect = document.getElementById('gameSelect')
const questionInput = document.getElementById('questionInput')
const askButton = document.getElementById('askButton')
const aiResponse = document.getElementById('aiResponse')
const form = document.getElementById('form')
const selectGemini = document.getElementById('selectGemini')
const selectNerdolaAI = document.getElementById('selectNerdolaAI')
const apiKeyField = document.getElementById('apiKeyField')
const apiKeyInput = document.getElementById('apiKey')

const markdownToHTML = (text) => {
    const converter = new showdown.Converter()
    return converter.makeHtml(text)
}

const perguntarAI = async (question, game, apiKey) => {
    const model = "gemini-2.0-flash"
    const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`
    const pergunta = `
    ## Especialidade
    Você é um especialista assistente de meta para o jogo ${game}

    ## Tarefa
    Você deve responder as perguntas do usuário com base no seu conhecimento do jogo, estratégias, build e dicas

    ## Regras
    - Se você não sabe a resposta, responda com 'Não sei' e não tente inventar uma resposta.
    - Se a pergunta não está relacionada ao jogo, responda com 'Essa pergunta não está relacionada ao jogo'
    - Considere a data atual ${new Date().toLocaleDateString()}
    - Faça pesquisas atualizadas sobre o patch atual, baseado na data atual, para dar uma resposta coerente.
    - Nunca responsda itens que vc não tenha certeza de que existe no patch atual.

    ## Resposta
    - Economize na resposta, seja direto e responda no máximo 500 caracteres
    - Responda em markdown
    - Não precisa fazer nenhuma saudação ou despedida, apenas responda o que o usuário está querendo.

    ## Exemplo de resposta
    pergunta do usuário: Melhor build rengar jungle
    resposta: A build mais atual é: \n\n **Itens:**\n\n coloque os itens aqui.\n\n**Runas:**\n\nexemplo de runas\n\n

    ---
    Aqui está a pergunta do usuário: ${question}
  `

    const contents = [{
        role: "user",
        parts: [{
            text: pergunta
        }]
    }]

    const tools = [{
        google_search: {}
    }]

    // chamada API
    const response = await fetch(geminiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents,
            tools
        })
    })

    const data = await response.json()
    return data.candidates[0].content.parts[0].text
}

// Mostrar/esconder campo de API KEY conforme seleção
function updateApiKeyVisibility() {
    if (selectGemini.checked) {
        apiKeyField.style.display = 'block'
        setTimeout(() => { apiKeyInput.focus() }, 200)
    } else {
        apiKeyField.style.display = 'none'
        apiKeyInput.value = ''
    }
}
selectGemini.addEventListener('change', updateApiKeyVisibility)
selectNerdolaAI.addEventListener('change', updateApiKeyVisibility)
window.addEventListener('DOMContentLoaded', updateApiKeyVisibility)

const enviarFormulario = async (event) => {
    event.preventDefault()
    const game = gameSelect.value
    const question = questionInput.value
    if (game == '' || question == '') {
        alert('Por favor, preencha todos os campos')
        return
    }
    let apiKey = ''
    if (selectGemini.checked) {
        apiKey = apiKeyInput.value.trim()
        if (!apiKey) {
            alert('Por favor, insira sua API KEY do Gemini')
            apiKeyInput.focus()
            return
        }
    } else {
        apiKey = 'AIzaSyBH4cn8tTndIdN3PcYLt2qiQdQoyvPCT5M'
    }
    askButton.disabled = true
    askButton.textContent = 'Perguntando...'
    askButton.classList.add('loading')
    try {
        let text = await perguntarAI(question, game, apiKey)
        console.log('Resposta:', text)
        if (!text || typeof text !== 'string' || text.trim() === '') {
            text = 'Não foi possível obter uma resposta da IA. Tente novamente.'
        }
        aiResponse.querySelector('.response-content').innerHTML = markdownToHTML(text)
        aiResponse.classList.remove('hidden')
        aiResponse.style.display = 'block'
        console.log('Classes do aiResponse:', aiResponse.classList)
    } catch (error) {
        console.log('Erro: ', error)
        aiResponse.querySelector('.response-content').innerHTML = 'Erro ao tentar obter resposta da IA.'
        aiResponse.classList.remove('hidden')
        aiResponse.style.display = 'block'
    } finally {
        askButton.disabled = false
        askButton.textContent = "Perguntar"
        askButton.classList.remove('loading')
    }
}

form.addEventListener('submit', enviarFormulario)