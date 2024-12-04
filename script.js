const textarea = document.querySelector('textarea');
const warning = document.getElementById('warning');

let timeout;
let inactivityTime = 5000; // 5 segundos
let timeRemaining = inactivityTime;
let textCleared = false;

//reseta o contador de tempo
function resetTimer() {
  if (textCleared) {
    textCleared = false;
  }

  clearTimeout(timeout);
  timeRemaining = inactivityTime;

  warning.style.display = 'none'; // Esconde o aviso

  timeout = setTimeout(handleInactivity, 1000);
}

// Função chamada quando o tempo de inatividade é alcançado
function handleInactivity() {
  timeRemaining -= 1000;

  if (timeRemaining <= 0) {
    textarea.value = ''; // Apaga o texto
    warning.style.display = 'none'; // Esconde o aviso
    textCleared = true; // marca que o texto foi apagado
    clearTimeout(timeout); // Para o temporizador
  } else {
    warning.style.display = 'block'; // Mostra o aviso
    timeout = setTimeout(handleInactivity, 1000); // Continua o temporizador
  }
}

// detectar atividade do usuário
textarea.addEventListener('input', resetTimer);

// Inicia o temporizador
resetTimer();
