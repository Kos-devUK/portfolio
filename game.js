let checkBtn = document.getElementById("checkBtn");
let score = 0;
let countBugs = document.getElementById("countBugs");
let btn13 =document.getElementById("btn13");



checkBtn.addEventListener('click', () => {
    score ++
    countBugs.innerHTML = score;
    console.log('score')
    if (score == 10){
        console.log('win');
        countBugs.innerHTML = `You eliminate all the buggs!!!`;  
        score = 0;     
    }
})

btn13.addEventListener('click', () =>{
    countBugs.innerHTML = `oups! you hit a ladybug!!`; 
    score --
     
    countBugs.innerHTML = -- score;
    console.log('score')
    
    if (score < -1){
        countBugs.innerHTML = `oups! you eliminate all the ladybugs!!`;
        console.log('oups!')
        score = 0;
    }
})

