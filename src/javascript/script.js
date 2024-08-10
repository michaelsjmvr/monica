document.querySelector('.menu-toggle-btn').addEventListener('click', function() {
    const menu = document.querySelector('.menu-vertical');
    menu.classList.toggle('open');
});

function confirmarAgendamento() {
    const nome = document.getElementById('nomeInput').value;
    const email = document.getElementById('emailInput').value;
    const dia = document.getElementById('diaSelect').selectedOptions[0].text;
    const hora = document.getElementById('horaSelect').selectedOptions[0].text;

    const mensagem = `Olá! Meu nome é ${nome}. Eu gostaria de saber se há disponibilidade para o dia ${dia} às ${hora} horas. Meu e-mail é ${email}.`;
    const telefone = '5521970746627'; // Substitua pelo número de telefone desejado
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');
}