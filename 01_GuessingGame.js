const max = prompt("koi bhi maximum number guess karo");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("mai jo number guess kar raha hoon");

while(true){
    if(guess == "quit"){
        console.log("jao maaf kiya");
        break;
    }

    if(guess == random){
        console.log("congrats aapne sahi number guess kiya", random);
        break;
    }else if (guess<random){
        guess = prompt("bhai thoda sa pichhe hai");
    }else{
        guess = prompt("bhai thoda sa jyada badh gaya");
    }
}