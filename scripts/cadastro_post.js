function cadastrarPost(event) {
    event.preventDefault();

    const category = document.getElementById("categoria");

    const post = {
        id: Date.now(),
        titulo: document.getElementById('titulo').value,
        descricao: document.getElementById('descricao').value,
        dataCriacao: new Date().toLocaleDateString("pt-br"),  
        categoria: document.getElementById('categoria').value,
        textoCategoria: category.options[category.selectedIndex].text,
        foto: document.getElementById('foto').value
    };

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    alert('Post salvo com sucesso!');
    document.getElementById('postForm').reset();
}

document.getElementById('postForm').addEventListener('submit', cadastrarPost);
