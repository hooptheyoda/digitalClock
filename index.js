var time = document.querySelector('.time');
var time = new Date();
var hrs = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();

hrs = getHr(hrs);
min = zero(min);
sec = zero(sec);

function logTime () {
   time = new Date();
   hrs = time.getHours();
   min = time.getMinutes();
   sec = time.getSeconds();
 console.log(hrs + ':' + min + ':' + sec)
}

function getHr(){
  if(hrs > 12) {
    x = hrs - 12;
    return x ;
  }
  else {
    return hrs;
  }
}

function zero(e) {
   if (e < 10) {
     return e = '0' + e;
   } else {
     return e;
   }
 }

 function getClock(){
  return time.innerHTML = hr + ':' + min + ':' + sec;
 }

setInterval(getClock, 1000);
