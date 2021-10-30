$(window).on('load', function(){
    // まだタブを開いていないときのみ、拡張機能のボタンで開く
    var regex = new RegExp("portal.it-chiba.ac.jp");
    chrome.tabs.query({}, tabs => {
	const results = document.getElementById('results');
	var isOpen = false;
	for(let i=0; i<tabs.length; i++){
	    if (tabs[i].url.match(regex) ){
		isOpen = true;
	    }
	}
	if (!isOpen){
	    var h = "https://portal.it-chiba.ac.jp/";
	    chrome.tabs.create({url: h });
	}
    });
});


function process_link(){
    // open in new window
    var aurl = $(this).attr('href');
    chrome.tabs.create({url: aurl});
    return false;
}

$(document).ready(function(){
    // open in new window
    $('body').on('click', 'a', process_link );
});


