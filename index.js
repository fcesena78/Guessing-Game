let board = document.querySelector('#board');
let cards = [...document.querySelectorAll('#board > div')];
let button = document.querySelector('button');
let randomNumber = Math.floor(Math.random() * 3);
let gameOver = document.getElementById('gameOverText')

button.addEventListener('click', function(){
    for(let i = 0; i < cards.length; i++){
        cards[i].className = '';

    }
    randomNumber = Math.floor(Math.random() * 3);
    gameOver.innerText= 'Guess Wisely...'
});

console.log(button);
board.addEventListener('click', function(ev){
    let target = ev.target;
    if(target.id === ''){
        for(let i = 0; i < cards.length; i ++){
            if(cards[i].className !== ''){
                alert('you need to reset!')
                return;
            }
            console.log(cards[i].className);
        }
        let idx = cards.indexOf(target);
        if(idx === randomNumber){
            target.className = 'green';
            gameOver.innerText= 'You Win!'
        }
        else {
            target.className = 'red'
            gameOver.innerText = 'You lose, try again!'
        }
    }
    
});
