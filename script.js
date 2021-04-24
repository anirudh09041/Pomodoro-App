function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        --timer;
        
        if(timer< 10) {
            document.getElementById("time").style.color = "red";
        }

        if (timer < 0) {
            timer = duration;
            ringing();                       
            location.reload();
        }
    }, 1000);
}
function initialize() {
    var time = 20 * 1;
    var display = document.querySelector('#time');
    startTimer(time,display);    
}  
  
 function ringing() {
    var audio = new Audio('ring.mp3');   
    audio.play();
    alert('Time to take a break!'); 
 }
