 // Preview da foto
 const photoUrlInput = document.getElementById('photoUrl'); // procura o id da foto
 const photoPreview = document.getElementById('photoPreview'); // procura o id da foto preview

 photoUrlInput.addEventListener('input', () => {
     const url = photoUrlInput.value;
     if (url) {
         photoPreview.src = url;
     } else {
         photoPreview.src = 'https://via.placeholder.com/100';
     }
 });

 // Validação e submissão do formulário
 const signupForm = document.getElementById('signupForm');

 signupForm.addEventListener('submit', (e) => {
     e.preventDefault();

     const nome = document.getElementById('nome').value;
     const photoUrl = document.getElementById('photoUrl').value;
     const email = document.getElementById('email').value;
     const senha = document.getElementById('senha').value;
     const confirmaSenha = document.getElementById('confirmaSenha').value;
     const biografia = document.getElementById('biografia').value;

     if (senha !== confirmaSenha) {
         alert("As senhas não coincidem!");
         return;
     }

     const user = {
         id: Date.now(),
         nome: nome,
         foto: photoUrl,
         email: email,
         senha: senha,
         biografia: biografia
     };

     localStorage.setItem('user', JSON.stringify(user));
     alert("Conta criada com sucesso!");
 });