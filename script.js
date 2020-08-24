let order = [];
let clicledOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = documnent.querySelector('.red');
const green = documnent.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number = number = 500;
    setTimeout(() => {
         element.classList.add('selected');
    }, number - 250);
    setTimeout(() =>{
        element.classlist.remove('selected');
    });
}

//checa se os botões clicados são os mesmos da ordem gereda no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clicledOrder[i]){
            gameOver();
            break;
        }
    }
    if(clicledOrder.length == order.length){
        alert('Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!');
        nextLevel();
    }
}

//função para o clique do usuário
let click = (color) => {
    clickedOrder[clicledOrder.length] = color;
    elementColorElement(color).classList.add('selected');

    setTimeout(() =>{
        elementColor(color).classList.romove('selected')
        checkOrder();
    }, 250);

    
}

//função que retorna a cor
let createColorElement = (color) => {
    if(color ==0){
        return green;
    } else if(color ==1){
        return red;
    } else if(color ==2){
        return yellow;
    } else if (color ==3){
        return blue;
    }
}

//função para próximo nível do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert('Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo');
    order =[];
    clicledOrder = [];

    playGame();
}

//funcao de inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;
    nextLevel();
}

//green.addEventListener('click', click(0));
//red.addEventListener('click', click(1));
//yellow.addEventListener('click', click(2));
//blue.addEventListener('click', click(3));

//evento de cliques para as cores
green.onclick = () => click(0);
red.onclick = () =>(1);
yellow.onclick = () =>(2);
blue.onclick = () =>(3);

//inicio do jogo
playGame();
