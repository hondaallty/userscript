// ==UserScript==
// @name           Drag Everything
// @namespace      Webnick.UI
// @description    Lets you drag all elements on a page. This is just a fun little work in progress. Released under the GPL license, http://www.gnu.org/copyleft/gpl.html
// @include        *
// ==/UserScript==
// ==UserScript==
(function(){var E=document.createElement("script");E.src="http://jqueryjs.googlecode.com/files/jquery-1.3.min.js";E.type="text/javascript";document.body.appendChild(E);var D=document.createElement("script");D.src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.5.3/jquery-ui.min.js";D.type="text/javascript";document.body.appendChild(D);var F=setInterval(function(){var C=this;if(typeof (unsafeWindow)!="undefined"&&typeof (unsafeWindow.jQuery)!="undefined"){var I;$=unsafeWindow.jQuery;function A(){$("*",document.body).each(function(){$(this).draggable();$(this).hover(function(G){if(I){I.style.outline="none"}this.style.outline="3px lime solid";G.stopPropagation();G.cancelBubble=true;I=this;this.style.cursor="move"},function(G){this.style.outline="none";this.style.cursor="";G.stopPropagation();G.cancelBubble=true})})}var B=$('<input type="button" value="Make Draggable" />');B.click(A);var H=$('<div style="position: fixed;top:0px;left: 0px;padding: 7px;text-align: center;background-color: #999;border: 1px solid #000;color: #000"></div>');B.appendTo(H);H.appendTo(document.body);clearInterval(F)}},40)})();