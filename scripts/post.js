function loadPost() {

    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    let post = posts[0];
    console.log("entrei na funcao");
    console.log(post);

    const card = document.getElementById("card");

    const postTitle = document.createElement("h5");
    postTitle.classList.add("card-title");
    postTitle.innerText = post.titulo;
    card.appendChild(postTitle);

    const postPhoto = document.createElement("img");
    postPhoto.classList.add("card-img-top");
    postPhoto.setAttribute("src", post.foto);
    card.appendChild(postPhoto);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = post.descricao;

    cardBody.appendChild(cardText);
    card.appendChild(cardBody);

    const uList = document.createElement("ul");
    uList.classList.add("list-group");
    uList.classList.add("list-group-flush");

    const liText = document.createElement("li");
    liText.classList.add("list-group-item");
    liText.innerText = "Criado em "+post.dataCriacao+" #"+post.categoria;

    uList.appendChild(liText);

    card.appendChild(uList);
   

}


document.addEventListener('DOMContentLoaded', loadPost);