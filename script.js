// Formulário de saudação
document.querySelector(".loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.querySelector('#nome').value.trim();
    let email = document.querySelector('#email').value.trim();
    let genero = document.querySelector('#genero').value;
    let saudacao = document.querySelector('#saudacao');

    if(nome === "" || email === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Cria saudação dinâmica com gênero
    let mensagem;
    if (genero === 'feminino') {
        mensagem = `Olá, ${nome}! Bem-vinda ao meu portfólio.`;
    } else if (genero === 'masculino') {
        mensagem = `Olá, ${nome}! Bem-vindo ao meu portfólio.`;
    } else {
        mensagem = `Olá, ${nome}! Bem-vindo(a) ao meu portfólio.`;
    }

    // Animação suave
    saudacao.classList.add('atualizando');
    setTimeout(() => {
        saudacao.textContent = mensagem;
        saudacao.classList.remove('atualizando');
    }, 300);

    // Redireciona após 1s para dar tempo da animação
    setTimeout(() => {
        window.location.href = 'site.html';
    }, 2000);
});


