let choices= document.querySelectorAll(".imgs");
let userScore= 0;
let compScore= 0;
let msg=document.querySelector(".msg");
let userScoreShow=document.querySelector("#user-score");
let compScoreShow=document.querySelector("#comp-score");
let reset=document.querySelector(".reset-button");

const resetGame=()=>{
    msg.innerText="Play Your Move!";
    userScore=0;
    compScore=0;
    userScoreShow.innerText=userScore;
    compScoreShow.innerText=compScore;
    msg.style.backgroundColor="#081b31";
}

const cmpChoice=()=>{
   options= ["rock","paper","scissors"];
   let index= Math.floor(Math.random()*3);
   return options[index];
}

const draw=()=>{
    msg.innerText= `Game was drawn! Play again`;
    msg.style.backgroundColor="#081b31";
}

const showWinner=(user,userChoice,compChoice)=>{
    if(user){
        userScore++;
        userScoreShow.innerText=userScore;
        msg.innerText=`You won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScoreShow.innerText=compScore;
        msg.innerText=`You lose!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const checkWinner=(userChoice,compChoice)=>{
    let user=true;
    if(userChoice===compChoice){
        draw();
    }
    else{
        if(userChoice==="rock"){
            if(compChoice==="paper") user=false;
        }
        else if(userChoice==="paper"){
            if(compChoice==="scissors") user=false;
        }
        else{
            if(compChoice==="rock") user=false;
        }
        showWinner(user,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       let userChoice=choice.getAttribute("id");
       let compChoice=cmpChoice();
       checkWinner(userChoice,compChoice);

    })
})

reset.addEventListener("click",resetGame);
