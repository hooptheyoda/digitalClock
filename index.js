var clock = document.querySelector('.clock');

function getClock(){
  var time = new Date();
  var hrs = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();

  hrs = zero(getHr(hrs));
  min = zero(min);
  sec = zero(sec);

 return clock.innerHTML = hrs + ':' + min + ':' + sec;
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

setInterval(getClock, 1000);
