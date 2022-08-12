const newGameBtn=document.getElementById("new-game-btn");
const homeEl=document.getElementById("home-el");
const guestEl=document.getElementById("guest-el");
const plus1HomeBtn= document.getElementById("plus-1-home-btn");
const plus2HomeBtn= document.getElementById("plus-2-home-btn");
const plus3HomeBtn= document.getElementById("plus-3-home-btn");
const plus1PointGuestBtn= document.getElementById("plus-1-guest-btn");
const plus2PointsGuestBtn= document.getElementById("plus-2-guest-btn");
const plus3PointsGuestBtn= document.getElementById("plus-3-guest-btn");

let home=0;
let guest=0;

function newGame(){
 home=0 
 guest=0  
};


function homePlus1(){
    home+=1;
    homeEl.innerHTML=home;  
}

function homePlus2(){
    home+=2;
    homeEl.innerHTML=home;  
}

function homePlus3(){
    home+=3;
    homeEl.innerHTML=home;  
}

function guestPlus1(){
    guest+=1;
    guestEl.innerHTML=guest;  
}

function guestPlus2(){
    guest+=2;
    guestEl.innerHTML=guest;  
}

function guestPlus3(){
    guest+=3;
    guestEl.innerHTML=guest;  
}

function newGame() {
    home=0;
    guest=0;
    homeEl.innerHTML=home;
    guestEl.innerHTML=guest;  
    
}