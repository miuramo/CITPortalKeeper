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

    // content-script.js
    const injectScript = (filePath, tag) => {
	var node = document.getElementsByTagName(tag)[0];
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', filePath);
	node.appendChild(script);
    }
    injectScript(chrome.runtime.getURL('war.js'), 'body');
    
}
