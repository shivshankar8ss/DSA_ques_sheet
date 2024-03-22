const clock = document.getElementById('clock');
const dt = document.getElementById('date');
const day = document.getElementById('day');

setInterval(function(){
let date = new Date();
let opt = {weekday: 'long'};
const daywk = date.toLocaleString('en-US',opt);
clock.innerHTML = date.toLocaleTimeString();
dt.innerHTML = date.toLocaleDateString();
day.innerHTML = daywk.toLocaleString();
},1000);