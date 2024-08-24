function loadPost() {

    //pega o que temos no local storage, transformando em JSON e jogando para a variavel
    let petsOnLocalStorage = JSON.parse(localStorage.getItem('posts'));
    //pega a url
    const url = new URL (window.location.href);
    //pega os parâmetros da URL
    const params = new URLSearchParams(url.search);
    //pega o parâmetro específico ID
    const idUrl = params.get("id");
    
    //define que post recebe o objeto do local storage que bate com a ID que veio na URL
    const post = petsOnLocalStorage.find((item) => item.id == idUrl);

    // codigo para definir um id para fins de teste no meu local storage
    // const myID = "1724457755144";
    // const post = petsOnLocalStorage.find((item) => item.id == myID);

    // se o post não for encontrado direciona o usuário para pagina de not found
    if(!post){
        window.location.replace("/page-not-found.html");    
    }

    //pega o card pelo id, nele que será adicionado os outros elementos html que serão criados
    const card = document.getElementById("card");

    //criar o elemento h5 para ser o titulo e vincular ao card   
    const postTitle = document.createElement("h4");
    postTitle.classList.add("card-title", "text-center", "py-2");
    postTitle.innerText = post.titulo;
    card.appendChild(postTitle);

    //criar o elemento de imagem e vincular ele ao card
    const postPhoto = document.createElement("img");
    postPhoto.classList.add("card-img-top");
    postPhoto.setAttribute("src", post.foto);
    card.appendChild(postPhoto);

    //criar o elemento corpo do card 
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    //criar o elemento p para ser o texto do card
    const cardText = document.createElement("p");
    cardText.classList.add("card-text", "px-3");
    cardText.innerText = post.descricao;

    //colocar o texto dentro do corpo do card
    cardBody.appendChild(cardText);
    //colocard o corpo do card dentro do card
    card.appendChild(cardBody);

    //criar o elemento de quebra semântica e adicionar ao card
    const line = document.createElement("hr");
    card.appendChild(line);

    //criar a div para receber a data, categoria e o botão
    const btnDiv = document.createElement("div");
    btnDiv.classList.add("card-body", "d-flex", "justify-content-between", "align-content-center", "mx-3");

    //criar o elemento p para colocar o texto de data criação e categoria e adicionar a div 
    const createAt = document.createElement("p");
    createAt.innerText = "Criado em: "+post.dataCriacao+" #"+post.textoCategoria;

    btnDiv.appendChild(createAt);

    //criar a tag a para servir de botão e adicionar a div
    const backToHome = document.createElement("a");
    backToHome.setAttribute("href", "../index.html");
    backToHome.innerText = "Voltar";
    backToHome.classList.add("btn", "btn-secondary");
  
    btnDiv.appendChild(backToHome);
    
    //adicionar a div ao card
    card.appendChild(btnDiv);
}

//adiciona evento para executar a função loadPost assim que o documento for carregado
document.addEventListener('DOMContentLoaded', loadPost);