document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');
    const resultElement = document.getElementById('result');

    options.forEach(option => {
        option.addEventListener('click', (event) => {
            const choice = event.target.getAttribute('data-choice');
            let message = '';

            if (choice === 'miles') {
                message = 'Aventura com Miles Morales! Sua escolha: romper com a tradição para redefinir o que é certo e salvar aqueles que importam. Você está pronto para um novo caminho.';
                resultElement.style.color = '#e50914'; // Vermelho do Miles
            } else if (choice === 'miguel') {
                message = 'Aventura com Miguel O\'Hara! Sua escolha: manter a ordem do multiverso para proteger o máximo de pessoas possível. Um fardo pesado para um futuro melhor.';
                resultElement.style.color = '#006400'; // Verde escuro do Miguel
            }

            resultElement.textContent = message;
            resultElement.classList.remove('hidden');
        });
    });
});
