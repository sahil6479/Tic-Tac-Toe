let boxes = document.getElementsByClassName("boxes");
let messageEl = document.getElementById("message-el");
let hr = document.getElementsByClassName("hr")[0];
let player = 1;
let word = "";
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;
let num7 = 0;
let num8 = 0;
let num9 = 0;
function numGen(){
    num1 = 0;
    num2 = 0;
    num3 = 0;
    num4 = 0;
    num5 = 0;
    num6 = 0;
    num7 = 0;
    num8 = 0;
    num9 = 0;
}
numGen();
var r = document.querySelector(':root');

function pressed(x){
    if(player == 1){
        word = "X";
        player = 2;
        numCheckFor1(x);
        document.querySelector(".ph-1").removeAttribute("id");
        document.querySelector(".ph-2").id = "ph-2";
        r.style.setProperty("--content", '"O"');
        boxes[x].classList.remove("x");
    } else if(player == 2){
        word = "O";
        player = 1;
        numCheckFor2(x);
        document.querySelector(".ph-1").id = "ph-1";
        document.querySelector(".ph-2").removeAttribute("id");
        r.style.setProperty("--content",'"X"');
        boxes[x].classList.remove("x");
    }
    boxes[x].removeAttribute("onClick");
    boxes[x].textContent = word;
    answerCheck();
}


function numCheckFor1(y){
    if(y == 0){
        num1 = 1;
    } else if(y == 1){
        num2 = 1;
    } else if(y == 2){
        num3 = 1;
    } else if(y == 3){
        num4 = 1;
    } else if(y == 4){
        num5 = 1;
    } else if(y == 5){
        num6 = 1;
    } else if(y == 6){
        num7 = 1;
    } else if(y == 7){
        num8 = 1;
    } else if(y == 8){
        num9 = 1;
    }
}
function numCheckFor2(y){
    if(y == 0){
        num1 = 2;
    } else if(y == 1){
        num2 = 2;
    } else if(y == 2){
        num3 = 2;
    } else if(y == 3){
        num4 = 2;
    } else if(y == 4){
        num5 = 2;
    } else if(y == 5){
        num6 = 2;
    } else if(y == 6){
        num7 = 2;
    } else if(y == 7){
        num8 = 2;
    } else if(y == 8){
        num9 = 2;
    }
}
function answerCheck(){
    if(num1 == 1 & num2 == 1 & num3 == 1){
        messageEl.innerText = "Player-1 wins";
        hr.id = "hr-1-3";
        allClosed();
    } else if(num4 == 1 & num5 == 1 & num6 == 1){
        messageEl.innerText = "Player-1 wins";
        hr.id = "hr-4-6";
        allClosed();
    } else if(num7 == 1 & num8 == 1 & num9 == 1){
        messageEl.innerText = "Player-1 wins";
        hr.id = "hr-7-9";
        allClosed();
    } else if(num1 == 1 & num4 == 1 & num7 == 1){
        messageEl.innerText = "Player-1 wins";
        hr.id = "hr-1-7";
        allClosed();
    } else if(num2 == 1 & num5 == 1 & num8 == 1){
        messageEl.innerText = "Player-1 wins";
        hr.id = "hr-2-8";
        allClosed();
    } else if(num3 == 1 & num6 == 1 & num9 == 1){
        messageEl.innerText = "Player-1 wins";
        hr.id = "hr-3-9";
        allClosed();
    } else if(num1 == 1 & num5 == 1 & num9 == 1){
        messageEl.innerText = "Player-1 wins";
        hr.id = "hr-1-9";
        allClosed();
    } else if(num3 == 1 & num5 == 1 & num7 == 1){
        messageEl.innerText = "Player-1 wins";
        hr.id = "hr-3-7";
        allClosed();
    } else 
            if(num1 == 2 & num2 == 2 & num3 == 2){
        messageEl.innerText = "Player-2 wins";
        hr.id = "hr-1-3";
        allClosed();
    } else if(num4 == 2 & num5 == 2 & num6 == 2){
        messageEl.innerText = "Player-2 wins";
        hr.id = "hr-4-6";
        allClosed();
    } else if(num7 == 2 & num8 == 2 & num9 == 2){
        messageEl.innerText = "Player-2 wins";
        hr.id = "hr-7-9";
        allClosed();
    } else if(num1 == 2 & num4 == 2 & num7 == 2){
        messageEl.innerText = "Player-2 wins";
        hr.id = "hr-1-7";
        allClosed();
    } else if(num2 == 2 & num5 == 2 & num8 == 2){
        messageEl.innerText = "Player-2 wins";
        hr.id = "hr-2-8";
        allClosed();
    } else if(num3 == 2 & num6 == 2 & num9 == 2){
        messageEl.innerText = "Player-2 wins";
        hr.id = "hr-3-9";
        allClosed();
    } else if(num1 == 2 & num5 == 2 & num9 == 2){
        messageEl.innerText = "Player-2 wins";
        hr.id = "hr-1-9";
        allClosed();
    } else if(num3 == 2 & num5 == 2 & num7 == 2){
        messageEl.innerText = "Player-2 wins";
        hr.id = "hr-3-7";
        allClosed();
    } else if(num1 > 0 && num2 > 0 && num3 > 0 && num4 > 0 && num5 > 0 && num6 > 0 && num7 > 0 && num8 > 0 && num9 > 0){
        messageEl.innerText = "- Draw -";
        allClosed();
    }
}




function allClosed(){
    for(let i = 0; i < 9; i++){
    document.getElementsByClassName("boxes")[i].removeAttribute("onclick");
    }
    r.style.setProperty("--content", '""');
    document.getElementById("start-btn").removeAttribute("id");
}
function startNew(){
    for(let i = 0; i < 9; i++){
    document.getElementsByClassName("boxes")[i].innerText = "";
    document.getElementsByClassName("boxes")[i].classList.add("x")
    document.getElementsByClassName("boxes")[i].setAttribute("onClick","pressed("+i+")");
    }
    player = 1;
    hr.removeAttribute("id")
    r.style.setProperty("--content", '"X"');
    document.getElementsByTagName("button")[0].setAttribute("id","start-btn");
    document.querySelector(".ph-1").id = "ph-1";
    document.querySelector(".ph-2").removeAttribute("id");
    numGen();
    messageEl.innerText = "";
}
