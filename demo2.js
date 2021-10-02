let cardsEl = document.getElementById("cards-el")
let cards=[];
let card1;
let isAlive =true;
let card2;
let sumEl=document.getElementById("sum-el");
let sum=0;
let message;
let messageEl=document.getElementById("message-el");
function randomfun(){
   let rvar=Math.floor(Math.random()*11)+1;
   return rvar;

}

function sumfun(){

    if(sum>21){
        message="You are out of the game";
        isAlive=false;

    }
    else if(sum==21){
        message="you are Blackjack";
        isAlive=false;
        
    }
    else{
        message="Do you wanna choose another card"
    }

    messageEl.innerText=message;

}

function startGame(){

    
     sum=0;  
     isAlive=true; 
     card1=randomfun();
     card2=randomfun();
     cards=[card1,card2];

     cardsEl.innerText="Cards :";
    

      for(let i=0;i<cards.length;i++){

        cardsEl.innerText=cardsEl.innerText+" "+cards[i];
        sum=sum+cards[i];
      }
      sumEl.innerText="Sum :"
      sumEl.innerText=sumEl.innerText+" "+sum;

      sumfun();
    
    
     

}

function newCard(){
    if(isAlive){
    let card3= randomfun();
    sum=sum+card3;
    cardsEl.innerText=cardsEl.innerText+" "+card3;
    sumfun();
    sumEl.innerText= "Sum: "+sum;
    }

}