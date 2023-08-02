// ------------------- **** Game  Score **** ----------------

let score = 1 ;
let checkBtn = document.getElementById("checkBtn");
let countBugs = document.getElementById("countBugs");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");
let btn11 = document.getElementById("btn11");
let btn12 = document.getElementById("btn12");
let btn13 = document.getElementById("btn13");



checkBtn.addEventListener('click', () => {
    countBugs.innerHTML = score;
    console.log('score')
    while(score < 11){
        countBugs.innerHTML = score;
        score++
        console.log('score')
        if (score == 11 ){
            console.log('win');
            countBugs.innerHTML = `You eliminated 10 bugs! Press the logo to play again!`;  
            score = 0;    
            }break;
    }     
});

btn1.addEventListener('click', () => {
    btn1.style.display = "none";        
})
btn2.addEventListener('click', () => {
    btn2.style.display = "none";        
})
btn3.addEventListener('click', () => {
    btn3.style.display = "none";     
})
btn4.addEventListener('click', () => {
    btn4.style.display = "none";
        
})
btn5.addEventListener('click', () => {
    btn5.style.display = "none";
        
})
btn6.addEventListener('click', () => {
    btn6.style.display = "none";        
})
btn7.addEventListener('click', () => {
    btn7.style.display = "none";        
})
btn8.addEventListener('click', () => {
    btn8.style.display = "none";     
})
btn9.addEventListener('click', () => {
    btn9.style.display = "none";        
})
btn10.addEventListener('click', () => {
    btn10.style.display = "none";
        
})
btn11.addEventListener('click', () => {
    btn11.style.display = "none";
        
})
btn12.addEventListener('click', () => {
    btn12.style.display = "none";
        
})

btn13.addEventListener('click', () => {
    score--
    countBugs.innerHTML = [`oups! that was a ladybug -1 `];
    btn13.style.display = "none";
        
})

// --------------------  Reload ----------------

let logo = document.getElementById("logo");
logo.addEventListener('click', () => {
    location.reload();
})
