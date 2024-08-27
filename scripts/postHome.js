function deletar(idRecebido) {
    // 1 - Ir no local e buscar o array de posts
    const petsAtuaisNaMemoria = JSON.parse(localStorage.getItem('posts'))
    const petsFiltrados = petsAtuaisNaMemoria.filter((item) => item.id !== idRecebido)

    localStorage.setItem('posts', JSON.stringify(petsFiltrados))

    document.getElementById('card-main').innerText = ''
    carregarDados()
}

// Função para calcular o tempo de leitura
function calcularTempoDeLeitura(texto) {
    // Supondo uma velocidade de leitura de 200 palavras por minuto
    const palavrasPorMinuto = 200;

    // Contar o número de palavras no texto
    const numeroDePalavras = texto.split(/\s+/).length;

    // Calcular o tempo de leitura em minutos
    const tempoDeLeitura = Math.ceil(numeroDePalavras / palavrasPorMinuto);

    return tempoDeLeitura;
}

// Função para calcular e armazenar o tempo de leitura no localStorage
function armazenarTempoDeLeitura(idArtigo, descricao) {
    // Calcular o tempo de leitura
    const tempoDeLeitura = calcularTempoDeLeitura(descricao);

    // Armazenar no localStorage
    localStorage.setItem(`tempoLeitura_${idArtigo}`, `${tempoDeLeitura} minutos`);

    return tempoDeLeitura;
}

function carregarDados() {
    const petsNaMemoria = JSON.parse(localStorage.getItem('posts'))
    const lista = document.getElementById('card-main')

    petsNaMemoria.forEach((post) => {
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('cards-container');

        const div = document.createElement('div')
        div.classList.add('card')
        mainDiv.appendChild(div)

        const img = document.createElement('img')
        img.setAttribute('src', post.foto)
        div.append(img)

        const span = document.createElement('span');
        span.classList.add('tipo');
        span.innerText = post.categoria;
        div.append(span)

        const h2 = document.createElement('h2')
        h2.classList.add('nome');
        h2.innerText = post.titulo;
        div.append(h2)

        const div2 = document.createElement('div')
        div2.classList.add("conteudo")
        div.append(div2)

        const spanData = document.createElement('span')
        spanData.classList.add('data');
        spanData.innerText = post.dataCriacao;
        div2.appendChild(spanData)

        const spanTraco = document.createElement('span');
        spanTraco.innerText = ('-');
        div2.appendChild(spanTraco);

        // Aqui, calculamos o tempo de leitura com base no conteúdo do post
        const tempoDeLeitura = armazenarTempoDeLeitura(post.id, post.descricao);

        const spanTempo = document.createElement('span');
        spanTempo.classList.add('tempo');
        spanTempo.innerText = (`${tempoDeLeitura} minutos de leitura.`);
        div2.appendChild(spanTempo);

        lista.append(div)
    })
}

document.addEventListener('DOMContentLoaded', carregarDados) // quando for renderizar, vai disparar a função

document.addEventListener('DOMContentLoaded', () => {
    console.log('todos', document.querySelectorAll('.container-pets .item-pet'))
}) // quando for renderizar, vai disparar a função

