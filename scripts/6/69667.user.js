// ==UserScript==
// @name           Czarne forum HDTV.com.pl
// @namespace      Um
// @include        http://*.hdtv.com.pl/forum/*
// @include        http://hdtv.com.pl/forum/*
// ==/UserScript==

function ReplaceGlobalStyle(newstyle) {
  var sel = document.getElementById('vbulletin_css');
  var doc = sel.parentNode;
  doc.removeChild(sel)
  
  var sel=document.createElement('link');
  sel.setAttribute('type','text/css');
  sel.setAttribute('rel','stylesheet');
  sel.setAttribute('href',newstyle);

  var hel=document.documentElement.firstChild;
  if(hel && hel.nodeName=='HEAD') { hel.appendChild(sel); }
  else { document.body.insertBefore(sel,document.body.firstChild); }
}

function setStyle() {
  ReplaceGlobalStyle("http://feanor.uuuq.com/hdtv_dark.css");
}

setStyle();