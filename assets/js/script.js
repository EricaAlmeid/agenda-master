// Guarda botoes do html
const dailyButton = document.getElementById('daily-bt');
const weeklyButton = document.getElementById('weekly-bt');
const monthlyButton = document.getElementById('monthly-bt');

// Guarda elementos de texto ficheiro trabalho 
let horaTrabalho = document.getElementById('hora-trabalho');
let dataAnteriorTrabalho = document.getElementById('data-anterior-trabalho');
let horaAnteriorTrabalho = document.getElementById('hora-anterior-trabalho');

// Guarda elementos de texto ficheiro jogo
let horaJogo = document.getElementById('hora-jogo');
let dataAnteriorJogo = document.getElementById('data-anterior-jogo');
let horaAnteriorJogo = document.getElementById('hora-anterior-jogo');

// Guarda elementos de texto ficheiro estudo
let horaEstudo = document.getElementById('hora-estudo');
let dataAnteriorEstudo = document.getElementById('data-anterior-estudo');
let horaAnteriorEstudo = document.getElementById('hora-anterior-estudo');

// Guarda elementos de texto ficheiro exercicio
let horaExercicio = document.getElementById('hora-exercicio');
let dataAnteriorExercicio = document.getElementById('data-anterior-exercicio');
let horaAnteriorExercicio = document.getElementById('hora-anterior-exercicio');

// Guarda elementos de texto ficheiro social
let horaSocial = document.getElementById('hora-social');
let dataAnteriorSocial = document.getElementById('data-anterior-social');
let horaAnteriorSocial = document.getElementById('hora-anterior-social');

// Guarda elementos de texto ficheiro cuidado
let horaCuidado = document.getElementById('hora-cuidado');
let dataAnteriorCuidado = document.getElementById('data-anterior-cuidado');
let horaAnteriorCuidado = document.getElementById('hora-anterior-cuidado');


//adiciona evento click para Daily - reload page
dailyButton.addEventListener('click', () => {
    location. reload();
});


// Adiciona evento click para botao Weekly

weeklyButton.addEventListener('click', () => {

    // Muda valor de texto no ficheiro trabalho
    horaTrabalho.innerHTML = '32hrs';
    dataAnteriorTrabalho.innerHTML = 'Last week';
    horaAnteriorTrabalho.innerHTML = '36hrs';

    // Muda valor de texto no ficheiro jogo
    horaJogo.innerHTML = '10hrs';
    dataAnteriorJogo.innerHTML = 'Last week';
    horaAnteriorJogo.innerHTML = '8hrs';

    // Muda valor de texto no ficheiro estudo
    horaEstudo.innerHTML = '4hrs';
    dataAnteriorEstudo.innerHTML = 'Last week';
    horaAnteriorEstudo.innerHTML = '7hrs';

    // Muda valor de texto no ficheiro exercicio
    horaExercicio.innerHTML = '4hrs';
    dataAnteriorExercicio.innerHTML = 'Last week';
    horaAnteriorExercicio.innerHTML = '5hrs';

    // Muda valor de texto no ficheiro social
    horaSocial.innerHTML = '5hrs';
    dataAnteriorSocial.innerHTML = 'Last week';
    horaAnteriorSocial.innerHTML = '10hrs';

    horaCuidado.innerHTML = '2hrs';
    dataAnteriorCuidado.innerHTML = 'Last week';
    horaAnteriorCuidado.innerHTML = '2hrs';
    
});


// Evento click botao Monthly
monthlyButton.addEventListener('click', () => {

    // Muda valor de texto no ficheiro trabalho
    horaTrabalho.innerHTML = '103hrs';
    dataAnteriorTrabalho.innerHTML = 'Last month';
    horaAnteriorTrabalho.innerHTML = '128hrs';

    // Muda valor de texto no ficheiro jogo
    horaJogo.innerHTML = '23hrs';
    dataAnteriorJogo.innerHTML = 'Last month';
    horaAnteriorJogo.innerHTML = '29hrs';

    // Muda valor de texto no ficheiro estudo
    horaEstudo.innerHTML = '13hrs';
    dataAnteriorEstudo.innerHTML = 'Last month';
    horaAnteriorEstudo.innerHTML = '19hrs';

    // Muda valor de texto no ficheiro exercicio
    horaExercicio.innerHTML = '11hrs';
    dataAnteriorExercicio.innerHTML = 'Last month';
    horaAnteriorExercicio.innerHTML = '18hrs';

    // Muda valor de texto no ficheiro social
    horaSocial.innerHTML = '21hrs';
    dataAnteriorSocial.innerHTML = 'Last month';
    horaAnteriorSocial.innerHTML = '23hrs';

    horaCuidado.innerHTML = '7hrs';
    dataAnteriorCuidado.innerHTML = 'Last month';
    horaAnteriorCuidado.innerHTML = '11hrs';
});