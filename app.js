let userScore=0;
let compScore=0;
let resetVar=0;
let resetvarinc=0;
let reset=false;

let users_score_span= document.getElementById("user-score");
let comp_score_span= document.getElementById("comp-score");


const score_board_div= document.querySelector(".score_board")
const result_p= document.querySelector(".result>p")

const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const scissors_div= document.getElementById("s");
const but_div= document.getElementById("button");

function getCompChoice(){

const choices= ['r','p','s'];

const randomNumber= Math.floor(Math.random()*3);

return choices[randomNumber];

}

function ConvertTo(user){
    if(user=="r") return "Rock";
    if(user=="p") return "Paper";
    return "Scissors";
    

}




function wins(user,comp){

     
    console.log(userScore);

  
    userScore++; 
  
  
    users_score_span.innerHTML = userScore;
    const smalluser= "user".fontsize(3).sub();
    const smallcomp="comp".fontsize(3).sub();
    const userChoice_div=document.getElementById(user);
   // result_p.innerHTML= `${ConvertTo(user)}${smalluser}    beats   ${ConvertTo(comp)}${smallcomp}  You win!`;
   result_p.innerHTML= "You Win!";
document.getElementById(user).classList.add('greenglow')

setTimeout(()=>  userChoice_div.classList.remove('greenglow') ,300);

}


function loses(user,comp){
    
    console.log("lose")
  
      
        compScore++; 
      
    
    comp_score_span.innerHTML=compScore;
    const userChoice_div=document.getElementById(user);
    result_p.innerHTML="You Lost!";
    document.getElementById(user).classList.add('redglow')
    
setTimeout(()=>  userChoice_div.classList.remove('redglow')  ,300);

}


function draw(user,comp){
    console.log("draw")
    result_p.innerHTML="Draw!";
    const userChoice_div=document.getElementById(user);
    document.getElementById(user).classList.add('greyglow')
    
setTimeout(()=>  userChoice_div.classList.remove('greyglow')  ,300);

}


function game(user_choice){

const compChoice= getCompChoice();
    console.log("User choice: " +user_choice );
    console.log("computer choice: " +compChoice);
    
    switch(user_choice + compChoice){

case "rs":
    case "pr":
        case "sp":
            wins(user_choice,compChoice )
            break;

            case "rp":
                case "ps":
                    case "sr":
                        loses(user_choice,compChoice );
                        break;
                        case "pp":
                            case "ss":
                                case "rr":
                                    draw(user_choice,compChoice );
                                    break;

    }

    }


main();


function main(){

    userScore=0;
    compScore=0;

rock_div.addEventListener('click', function(){
   game("r")
});


paper_div.addEventListener('click', function(){
    game("p")
});


scissors_div.addEventListener('click', function(){
    game("s")  
});

}

but_div.addEventListener('click', function(){

    users_score_span.innerHTML=0;
    comp_score_span.innerHTML=0;
    result_p.innerHTML="Let's play again";
   
    userScore=0;
    compScore=0;

    reset=true;

})














































