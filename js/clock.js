let hand_sec = document.querySelector(".second-hand")
let hand_min = document.querySelector(".min-hand")
let hand_hr = document.querySelector(".hour-hand")
function getDate() {
    let now = new Date();
    let secs = now.getSeconds();
    let secsDegree = ((secs / 60) * 360) + 90;
    hand_sec.style.transform = `rotate(${secsDegree}deg)`;
  
    let mins = now.getMinutes();
    let minsDegree = ((mins / 60) * 360) + ((secs / 60) * 6) + 90;
    hand_min.style.transform = `rotate(${minsDegree}deg)`;
  
    let hrs = now.getHours();
    let hrsDegree = ((hrs / 12) * 360) + ((mins / 60) * 30) + 90;
    hand_hr.style.transform = `rotate(${hrsDegree}deg)`;
  }
  
setInterval(getDate,1000)

console.log(1+2*3);