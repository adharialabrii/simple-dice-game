let randomnum1=Math.floor(Math.random()*6)+1;
let randomnum2=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomnum1+".png")
document.querySelector(".img2").setAttribute("src","images/dice"+randomnum2+".png")

let winner=null;
if (randomnum1>randomnum2){
    winner="Player 1 wins";
}
else if (randomnum2>randomnum1){
    winner="Player 2 wins";
}
else{
    winner="Draw";
}
document.querySelector("h1").innerHTML=winner