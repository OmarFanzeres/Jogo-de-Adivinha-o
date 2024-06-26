/*
    Jogo de Adivinhação em JavaScript
Este é um simples jogo de adivinhação implementado em JavaScript, onde o usuário tenta adivinhar um número aleatório entre 1 e 100. O jogo oferece 10 tentativas para acertar o número correto.

Funcionalidades:
Geração de Número Aleatório:

O número aleatório é gerado usando Math.random() e Math.floor() para garantir um valor inteiro entre 1 e 100.
Verificação da Adivinhação:

A função checkGuess() é chamada quando o usuário tenta adivinhar.
Ela compara a adivinhação do usuário com o número aleatório e fornece feedback se o palpite foi correto, muito alto ou muito baixo.
Atualiza o número de tentativas restantes e termina o jogo se o usuário acertar ou esgotar todas as tentativas.
Reset do Jogo:

A função resetGame() reinicia o jogo, gerando um novo número aleatório e restaurando o número máximo de tentativas.
Limpa os campos de entrada e reseta a cor de fundo da página.


*/
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);
    attempts--;

    const resultElement = document.getElementById('result');
    
    const attemptsElement = document.getElementById('attempts');
    

    if (userGuess === randomNumber) {
        resultElement.innerText = `Parabéns! Você acertou em ${10 - attempts} tentativas.`;
        resultElement.classList.add('win');
        document.body.style.backgroundColor = "#d4edda";
        disableInputs();
    } else if (attempts === 0) {
        resultElement.innerText = `Game over! O número era ${randomNumber}.`;
        resultElement.classList.add('lose');
        document.body.style.backgroundColor = "#f8d7da";
        disableInputs();
    } else {
        resultElement.innerText = userGuess > randomNumber ? 'Tente um número menor.' : 'Tente um número maior.';
        resultElement.classList.remove('win', 'lose');
        document.body.style.backgroundColor = "#fff3cd";
        attemptsElement.innerText = `Tentativas restantes: ${attempts}`;
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 10;
    document.getElementById('guess').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('attempts').innerText = 'Tentativas restantes: 10';
    document.body.style.backgroundColor = "#f0f0f0";
    enableInputs();
}

function disableInputs() {
    document.getElementById('guess').disabled = true;
    document.querySelectorAll('button')[0].disabled = true;
}

function enableInputs() {
    document.getElementById('guess').disabled = false;
    document.querySelectorAll('button')[0].disabled = false;
}
