let keyPress=false;
let level=0;

let gameSeq = [];
let userSeq = [];

let idx=["yellow","green","blue","pink"];

let h2 = document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(level==false){
        keyPress=true;
        
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("game");
    setTimeout(function(){
        btn.classList.remove("game");
    },200);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level: ${level}`;

    let randomIdx = Math.floor(Math.random()*3);
    let randomClr = idx[randomIdx];
    let randomBtn = document.querySelector(`.${randomClr}`);
    gameSeq.push(randomClr);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function userFlash(btn){
    btn.classList.add("user");
    setTimeout(function(){
        btn.classList.remove("user")
    },200);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML=`game over! Your score was <b>${level-1}<b/>  <br>Press any key to start.`;
        
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        
        reset();
    }
}

function btnPress(){
    userFlash(this);

    let userClr=this.getAttribute("id");
    userSeq.push(userClr);
    console.log(userSeq);
   
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(allBtn of allBtns){
    allBtn.addEventListener("click", btnPress);
}

function reset(){
    keyPress=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

