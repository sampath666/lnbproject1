const element = document.getElementById('color');
const buttonElement = document.getElementById('button');

let isStart = false;
localStorage.setItem("isStart",isStart);
let IntervalId ;

function startDisplay(){
const m1 = localStorage.getItem("isStart");
    isStart= m1
    if(isStart==='false'){
        isStart = true;
        localStorage.setItem("isStart",isStart);
        IntervalId=  setInterval(period,1000);
        button.textContent = 'Stop';
    }else{
        isStart=false;
        localStorage.setItem("isStart",isStart);
        clearInterval(IntervalId);

          button.textContent = 'Start';
    }
}


function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`;
}

function period(){
     const color = generateRandomColor();
    const styleText = `background-color:${color};`;
    console.log(styleText)
    console.log(element)
    return styleText
    
}

