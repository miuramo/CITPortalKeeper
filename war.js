var sec = 60*25; 
var mx = sec; var tm; 
if (typeof(confirmIfModified) === typeof(Function) )
  tm = setInterval(peri,1000);
function peri(){
  if (sec > 0) sec--;
  var per = (sec*100/mx);
  var elem = document.getElementById('fore');
  if (elem != null) 
    elem.style.width = per+'%';
  var leftsec = document.getElementById('left');
  if (leftsec != null) leftsec.innerHTML = Math.floor(sec/60)+':'+ ('0' + sec % 60).slice(-2) ;
  if (sec==0) if (typeof(confirmIfModified) === typeof(Function) ) {
    clearInterval(tm); confirmIfModified('headerForm:logo');
  } 
}
