var randomNumber1=Math.floor(Math.random() *6)+1;
var randomImageSource="images/dice"+ randomNumber1+".png";
 document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);


//for second dice
var randomNumber2= Math.floor(Math.random() *6)+1;
var randomImageSource2="images/dice" + randomNumber2+ ".png";
 document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

 //conditions
 if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚀-Player-1Won!!";

 }
 else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player-2 Won!!🚀";
 }
 else {
     document.querySelector("h1").innerHTML="DRAW 🚀";
 }