
function rolldice(){
var p1=Math.floor(Math.random()*6)+1
var p2=Math.floor(Math.random()*6)+1

function img_chg(p1){
    if(p1==1){
        document.querySelector('.img1').setAttribute('src','images/dice1.png')
    }
    else if(p1==2){
        document.querySelector('.img1').setAttribute('src','images/dice2.png')
    }
    else if(p1==3){
        document.querySelector('.img1').setAttribute('src','images/dice3.png')
    }
    else if(p1==4){
        document.querySelector('.img1').setAttribute('src','images/dice4.png')
    }
    else if(p1==5){
        document.querySelector('.img1').setAttribute('src','images/dice5.png')
    }
    else{
        document.querySelector('.img1').setAttribute('src','images/dice6.png')
    }

}
function img_chg2(p2){
    if(p2==1){
        document.querySelector('.img2').setAttribute('src','images/dice1.png')
    }
    else if(p2==2){
        document.querySelector('.img2').setAttribute('src','images/dice2.png')
    }
    else if(p2==3){
        document.querySelector('.img2').setAttribute('src','images/dice3.png')
    }
    else if(p2==4){
        document.querySelector('.img2').setAttribute('src','images/dice4.png')
    }
    else if(p2==5){
        document.querySelector('.img2').setAttribute('src','images/dice5.png')
    }
    else{
        document.querySelector('.img2').setAttribute('src','images/dice6.png')
    }

}


if (p1>p2){
    document.querySelector('h1').textContent ='Player1 Wins'
}
else if (p1<p2){
    document.querySelector('h1').textContent ='Player2 Wins'
}
else{
    document.querySelector('h1').textContent ='Draw'
}

img_chg(p1)
img_chg2(p2)

}
window.onload=rolldice;

