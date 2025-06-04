function toggleMenu() {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('active');
}

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

document.getElementById('form-sorteio').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const compartilhar = document.getElementById('compartilhar').value;

    let statusMessage = `Obrigado, ${nome}! Você foi inscrito no sorteio do iPhone 16!`;
    if (compartilhar === "sim") {
        statusMessage += ' E você ganhou uma entrada extra por compartilhar nas redes sociais! 🎉';
    }

    document.getElementById('status-inscricao').innerText = statusMessage;
});
