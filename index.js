
const handOption={
    "rock":"/assets/Rock.png",
    "paper": "/assets/Paper.png",
    "scissors":"/assets/Scissors.png"
}

let Score=0;  


const pickUserHand=(hand)=>{
   
//show the next page and hide this page
let hands=document.querySelector(".hands");
    hands.style.display="none";
let contest=document.querySelector(".contest");
contest.style.display="flex";
//set the userpick

document.getElementById("userPickImage").src=handOption[hand];

let cphand=pickComputerHand();
referee(hand,cphand);
}
const pickComputerHand=()=>{
    let hands=["rock","paper","scissors"];
    let cphand=hands[Math.floor(Math.random()*3)];
    document.getElementById("computerpickimage").src=handOption[cphand];
return cphand;
}
const referee=(userhand, cphand)=>{
    if(userhand=="rock" && cphand=="scissors"){
        setDecision("You Win");
        setScore(Score+1);
    }
     if(userhand=="rock"&&cphand=="rock"){
        setDecision("It's Tie");
    }
     if(userhand=="rock"&&cphand=="paper"){
        setDecision("You Lose");
    }
     if(userhand=="paper" &&cphand=="scissors"){
        setDecision("You Lose");
    }
     if(userhand=="paper"&&cphand=="paper"){
        setDecision("It's Tie");
    }
     if(userhand=="paper"&&cphand=="rock"){
        setDecision("You Win");
        setScore(Score+1);
    }
     if(userhand=="scissors"&&cphand=="rock"){
        setDecision("You Lose");
    }
     if(userhand=="scissors"&&cphand=="scissors"){
        setDecision("It's Tie");
    }
     if(userhand=="scissors"&&cphand=="paper"){
        setDecision("You Win");
        setScore(Score+1);
    }
    

}
const restartgame=()=>{
    let hands=document.querySelector(".hands");
    hands.style.display="flex";
let contest=document.querySelector(".contest");
contest.style.display="none";
}
const setDecision=(decision)=>{
    document.querySelector(".decision h1").innerText=decision;
}

const setScore=(score)=>{
    Score=score;
    document.querySelector(".score h1").innerText=score;
}
