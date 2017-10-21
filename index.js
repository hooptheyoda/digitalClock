var clock = document.querySelector('.clock');
// var greet1 = document.querySelector('.greet1');
// var greet2 = document.querySelector('.greet2');
// var greet3 = document.querySelector('.greet3');

var greet1 = document.getElementById('greet1');
var greet2 = document.getElementById('greet2');
var greet3 = document.getElementById('greet3');



function getClock(){
  var time = new Date();
  var hrs = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var ampm = ' PM ';

  if (hrs < 12) {
     ampm = ' AM ';
  }

  hrs = zero(getHr(hrs));
  min = zero(min);
  sec = zero(sec);

  greeting(ampm,hrs);
 return clock.innerHTML = hrs + ':' + min + ':' + sec + ampm;
}

function getHr(hr){
  if(hr > 12) {
    hr = hr - 12;
  }
  return hr;
}

function zero(e) {
   if ( e < 10) {
     e = '0' + e;
   }
   return e;
 }

 function greeting(a, h) {
   if (a === ' AM '){
     greet1.classList.remove('hidden');
     greet2.classList.add('hidden');
     greet3.classList.add('hidden');
   } else if ((a === ' PM ') && (h === 12)){
     greet1.classList.add('hidden');
     greet2.classList.remove('hidden');
     greet3.classList.add('hidden');
   } else if ((a === ' PM ') && (h < 6)){
     greet1.classList.add('hidden');
     greet2.classList.remove('hidden');
     greet3.classList.add('hidden');
   } else if ((a === ' PM ') && (h > 6)){
     greet1.classList.add('hidden');
     greet2.classList.add('hidden');
     greet3.classList.remove('hidden');
   } else {
     console.log('uh idk');
   }
 } //(h < 6) || (h = 12))

setInterval(getClock, 1000);
