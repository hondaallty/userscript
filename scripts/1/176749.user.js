// ==UserScript==
// @name        cnBeta filter
// @namespace   http://www.cnbeta.com/
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js
// @include     http://www.cnbeta.com/
// @version     1.1
// ==/UserScript==

function cnBeta_filter() {
	$("section.main_content_left section:lt(4)").remove(); //移除顶部两大块
	$("div.time").remove(); //移除文字广告
}
cnBeta_filter();
