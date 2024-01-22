function random() {
    let randomNumber1 
    do {
        randomNumber1=Math.floor((Math.random()*6)+1)
        if (randomNumber1<7) {
            break;
        }
    } while (true);
    return randomNumber1;
}



var dice1 = "images/dice"+random()+".png";
document.querySelector("img.img1").setAttribute("src", dice1);

var dice2 = "images/dice"+random()+".png";
document.querySelector("img.img2").setAttribute("src", dice2);


if (dice1>dice2) {
    document.querySelector("h1").innerHTML="🚩Player1 Won";
}else if (dice1<dice2) {
    document.querySelector("h1").innerHTML="Player2 Won🚩";
}else{
    document.querySelector("h1").innerHTML="Draw!";
}
