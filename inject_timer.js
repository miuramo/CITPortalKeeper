// Check top page
if (location.href=="https://portal.it-chiba.ac.jp/uprx/"){
    // トップページだったら、なにもしない
} else {

    // Inject progress bars
    var back = document.createElement("div");
    back.id = "back"; back.className = "top_progress_bg";
    document.body.appendChild(back);

    var fore = document.createElement("div");
    fore.id = "fore"; fore.className = "top_progress_fg";
    document.body.appendChild(fore);

    var left = document.createElement("div");
    left.id = "left"; left.className = "top_progress_sec";
    document.body.appendChild(left);

    // Inject timer

    var injectTimer = document.createElement("script");
    const js = `
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
}`;
    injectTimer.textContent = js;
    document.body.appendChild(injectTimer);
}
