console.log("Welcome to Tic Tac Toe")
let start = new Audio("start.mp3.wav");
let turn = new Audio("turn.mp3.wav");
let end = new Audio("end.mp3.wav");
let Turn = "X"
let gameover = false;

// Function to change the Turn
const changeTurn = ()=>{
    return Turn === "X"? "0": "X"
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameover = true
            document.querySelector('.imgInfo').getElementsByTagName('img')[0].style.width = "200px";
           
        }
    })
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = Turn;
            Turn = changeTurn();
            turn.play();
            checkWin();
            if (!gameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + Turn;
            } 
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    Turn = "X"; 
    gameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + Turn;
    document.querySelector('.imgInfo').getElementsByTagName('img')[0].style.width = "0px"
})