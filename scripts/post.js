function loadPost() {


    // const url = new URL (window.location.href);

    // const params = new URLSearchParams(url.search);

    // const idUrl = params.get("id");

    // const post = petsNoLocalStorage.find((item) => item.id == idUrl);

    let petsNoLocalStorage = JSON.parse(localStorage.getItem('posts'));

    const meuID = "1724371193914";

    const post = petsNoLocalStorage.find((item) => item.id == meuID);

    if(!post){
        window.location.replace("/page-not-found.html");    
    }

    // let posts = JSON.parse(localStorage.getItem('posts')) || [];

    // let post = posts[0];

    const card = document.getElementById("card");

    const postTitle = document.createElement("h5");
    postTitle.classList.add("card-title", "text-center", "py-2");
    postTitle.innerText = post.titulo;
    card.appendChild(postTitle);

    const postPhoto = document.createElement("img");
    postPhoto.classList.add("card-img-top");
    postPhoto.setAttribute("src", post.foto);
    card.appendChild(postPhoto);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardText = document.createElement("p");
    cardText.classList.add("card-text", "px-3");
    cardText.innerText = post.descricao;

    cardBody.appendChild(cardText);
    card.appendChild(cardBody);

    const line = document.createElement("hr");
    card.appendChild(line);

    const btnDiv = document.createElement("div");
    btnDiv.classList.add("card-body", "d-flex", "justify-content-between", "align-content-center", "mx-3");

    const createAt = document.createElement("p");
    createAt.innerText = "Criado em: "+post.dataCriacao+" #"+post.textoCategoria;

    btnDiv.appendChild(createAt);

    const backToHome = document.createElement("a");
    backToHome.setAttribute("href", "../index.html");
    backToHome.innerText = "Voltar";
    backToHome.classList.add("btn", "btn-secondary");
  
    btnDiv.appendChild(backToHome);
    
    card.appendChild(btnDiv);
}


document.addEventListener('DOMContentLoaded', loadPost);