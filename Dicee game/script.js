
function rolldice(){
var p1=Math.floor(Math.random()*6)+1
var p2=Math.floor(Math.random()*6)+1

var p1_img= `images/dice${p1}.png`;
var p2_img=`images/dice${p2}.png`;

document.querySelector('.img1').setAttribute('src',p1_img)
document.querySelector('.img1').setAttribute('src',p2_img)

if (p1>p2){
    document.querySelector('h1').textContent ='Player1 Wins'
}
else if (p1<p2){
    document.querySelector('h1').textContent ='Player2 Wins'
}
else{
    document.querySelector('h1').textContent ='Draw'
}

}
window.onload=rolldice;

