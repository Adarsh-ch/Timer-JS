let displayTime=document.getElementById("displayTime");
let start=document.getElementById("start");
let end=document.getElementById("stop");
let reset=document.getElementById("reset");

let[seconds,minutes,hours]=[0,0,0];
let timer=null;

function stopWatch(){
    seconds++;
    if(seconds===60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes =0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m =minutes <10 ? "0" + minutes : minutes;
    let s =seconds < 10 ? "0" + seconds : seconds;
    displayTime.innerHTML= h + ":" + m + ":" + s;
}

function startTimer(){
    if(timer !=null){
        clearInterval(timer);
    }
  timer = setInterval(stopWatch,1000);
}

function stopTimer(){
    clearInterval(timer);
}
function resetTimer(){
    clearInterval(timer);
    [seconds,minutes,hours]=[0,0,0];
    displayTime.innerHTML="00:00:00";
}

start.addEventListener("click",()=>{
    startTimer();
});

end.addEventListener("click",()=>{
    stopTimer();
})
reset.addEventListener("click",()=>{
    resetTimer();
})
