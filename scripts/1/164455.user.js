// ==UserScript==
// @name Balalajka
// @grant none
// @description Replace all the likebuttons with "Balalajka"
// @include         http://www.facebook.com/*
// @include         https://www.facebook.com/*
// @match           https://www.facebook.com/*
// @match         http://www.facebook.com/*
// @exclude			htt*://*static*.facebook.com*
// @exclude			htt*://*channel*.facebook.com*
// @exclude			htt*://developers.facebook.com/*
// @exclude			htt*://upload.facebook.com/*
// @exclude			htt*://www.facebook.com/common/blank.html
// @exclude			htt*://*connect.facebook.com/*
// @exclude			htt*://*facebook.com/connect*
// @exclude			htt*://www.facebook.com/places/*
// @exclude			htt*://www.facebook.com/about/*
// @exclude			htt*://www.facebook.com/plugins/*
// @exclude			htt*://www.facebook.com/l.php*
// @exclude			htt*://www.facebook.com/ai.php*
// @exclude			htt*://www.facebook.com/extern/*
// @exclude			htt*://www.facebook.com/pagelet/*
// @exclude			htt*://api.facebook.com/static/*
// @exclude			htt*://www.facebook.com/contact_importer/*
// @exclude			htt*://www.facebook.com/ajax/*
// @exclude 		        htt*://apps.facebook.com/ajax/*
// @exclude			htt*://www.facebook.com/advertising/*
// @exclude			htt*://www.facebook.com/ads/*
// @exclude			htt*://www.facebook.com/sharer/*
// @exclude			htt*://www.facebook.com/ci_partner/*
// @exclude			htt*://www.facebook.com/send/*
// @exclude			htt*://www.facebook.com/mobile/*
// @exclude			htt*://www.facebook.com/settings/*
// @exclude			htt*://www.facebook.com/dialog/*
// @exclude			htt*://www.facebook.com/plugins/*
// @exclude			htt*://www.facebook.com/bookmarks/*
// @exclude         htt*://developers.facebook.com/*
// @exclude         http://www.facebook.com/plugins/*
// @exclude         http://www.facebook.com/dialog/feed*
// @exclude         https://www.facebook.com/plugins/*
// @exclude         https://www.facebook.com/dialog/feed*
// @exclude         http://www.facebook.com/dialog/oauth?*
// @exclude         https://www.facebook.com/dialog/oauth?*
// @exclude         http://www.facebook.com/dialog/apprequests/*
// @exclude         https://www.facebook.com/dialog/apprequests/*
// @exclude         http://www.facebook.com/l.php?u=*
// @exclude         https://www.facebook.com/l.php?*
// @exclude         https://www.facebook.com/places/map_iframe.php?*
// @include         http://www.facebook.com/pokes
// @include         https://www.facebook.com/pokes
// @include         http://www.facebook.com/pokes?*
// @include         https://www.facebook.com/pokes?*
// ==/UserScript==

window.setInterval(function(){crazy()},500);

function crazy() {
    var likelink = document.getElementsByClassName('UFILikeLink');
    var likelinkhtml;
    var checkliketext;
   // alert("Antal knappar: " + likelink.length)
    
    for (var i=0;i<=likelink.length;i++) {
        
       // alert("arrayplats: " + likelink[i])
    	
    	likelinkhtml = likelink[i].innerHTML;
    	
    	//alert("innerHTML: " + likelinkhtml)
    	
    	if ( likelinkhtml === "Gilla" || likelinkhtml === "Like" || likelinkhtml === "좋아요" ) {
    		likelink[i].innerHTML = "Balalajka";
    	}
    	
    	if ( likelinkhtml == "Sluta gilla" || likelinkhtml === "Unlike" || likelinkhtml === "좋아요 취소" ) {
    		likelink[i].innerHTML = "Obalalajka";
    	}
    }
}