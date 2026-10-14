let gameseq = [];
let userseq = [];

let butns = ["red","yellow","green","purple"];
let level = 0;
let start = false;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function(){
    if(!start){
        console.log("game started");
        start = true;
        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function()  {
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function()  {
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText = `level${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randcolor = butns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    gameflash(randbtn);

}

function checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            levelup();
        }
    }
    else{
        h2.innerHTML = `Game over, Your Score was <b>${level}</b> <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnpress(){
    let btn = this;
    userflash(btn);

    userseq.push(btn.getAttribute("id"));
    checkAns(userseq.length-1);
}

let btns = document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click" ,btnpress);
}

function reset(){
    start = false;
    level = 0;
    userseq = {};
    gameseq = {};
}