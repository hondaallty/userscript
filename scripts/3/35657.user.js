// ==UserScript==
// @name           Ikariam Searchbar oficial de ikariam
// @version       0.1
// @namespace      ikariam.searchbar
// @description    This script adds a tab to the left of the game screen that will slide out when moused over to reveal the Ikariam Search Engine
// @include            http://s*.ikariam.*/*
// ==/UserScript==

//
// This script was customised by perfectBUD
// Originalscript Ikariam Fightbar made by EnigmaBrand. 
// Ikariam and the searchengine are copyrighted by their respective owners.
//

var version="0.1";
var displayedflag = 0;

var imgtab="http://img74.imageshack.us/img74/2413/tabsearchbarom4.png";
var imgbarbgt="http://img165.imageshack.us/img165/34/barbgtopfm1.gif";
var imgbarbgm="http://img74.imageshack.us/img74/6937/barbgmidln9.gif";
var imgbarbgb="http://img145.imageshack.us/img145/7952/barbgbotpj9.gif";

unsafeWindow.displaysearch = function() {
	if(displayedflag == 0) {
		document.getElementById("searchframe").innerHTML = '<iframe width="914" border="0" frameborder="0" height="100%" src="http://ikariam.ogame-world.de" style="margin-left:26px;"></iframe>';
		displayedflag = 1;
	}
}

unsafeWindow.showsearch = function() {
	if(document.getElementById("searchbar").style.left == "-952px")
	{
		document.getElementById("searchbar").style.left = "0px;"
	}
	document.getElementById("searchbar").style.left = "0px;"
}

unsafeWindow.hidesearch = function() {
	document.getElementById("searchbar").style.left = "-952px;"
}

vsearchbar = document.createElement("div");
vsearchbar.setAttribute("id", "searchbar");

var body = document.getElementsByTagName("body");

body[0].appendChild(vsearchbar);


var wkHTML = '<div id="searchtab" onmouseover="showsearch()" onclick="hidesearch()"><a style="height:100%;width:100%;"></a></div>'
	+ '<div style="color:#542C0F;line-height: 35px; font-size: 12px; font-weight: bold;width:950px;position:absolute;top:0px;left:0px;height:30px;background:url('+imgbarbgt+');background-repeat:no-repeat;">'
	+ '<a style="border-bottom:1px #542C0F dotted; color: #542C0F;" href="http://userscripts.org/users/55683/scripts">Ikariam searchbar v'+version+'</a></div>'
	+ '<div id="searchframe" style="position:absolute;top:30px;bottom:3px;left:4px;" onmouseover="displaysearch()">Mouse over this area to load the Search Engine</div>'
	+ '<div style="width:950px;position:absolute;bottom:0px;left:0px;height:3px;background:url('+imgbarbgb+');background-repeat:no-repeat;"></div>';

GM_addStyle("#searchbar { background:url("+imgbarbgm+"); padding-top:33px; width:950px; height: 500px; position:fixed; left:-952px; top:15px; border:1px black solid; z-index:50;");
GM_addStyle("#searchbar:hover { left:0px; }");
GM_addStyle("#searchtab { background:url("+imgtab+"); width:26px; height:100px; position:absolute; right:-26px; top:400px; } ");
GM_addStyle("#searchtab:hover { cursor: pointer; } ");

document.getElementById("searchbar").innerHTML = wkHTML;

///// End of script /////

// ==UserScript==
// @name           ALIANZAS COA`S ALPHA
// @namespace      ikatips
// @description    Herraminetas para la alianza 
// @include        http://*ikariam.*/index.php*
// @author         Original por Verx - Modificado por ALEX para ALIANZAS COA -
// @version        20080619 120713 
// ==/UserScript==

var tagsAModificar = new Array("A","SPAN");
var diaLimite     = 2;
var cookieIKO    = 'IKAFONT';
var cookie_SEPARA    = '|';
var css_MenuIKO_String = '#menu {'+
'align:right;'+
'margin-left:680px;'+
'margin-top: -16.5px;'+
'color:white;'+
'width: 50px;'+
'cursor: hand;'+
'}'+
'#menu ul {'+
'list-style: none;'+
'margin: 0;'+
'padding: 0;'+
'width: 13em;'+
'}'+
'#menu a, #menu h2 {'+
'font: bold 11px/16px arial, helvetica, sans-serif;'+
'display: block;'+
'margin: 0;'+
'padding: 2px 3px;'+
'cursor: hand;'+
'}'+
'#menu a {'+
'color: RGB(84,44,15);'+
//Colores menu normal.
'background: RGB(246,235,188);'+
'border: double 3px RGB(84,44,15);'+
'border-left: double 3px RGB(84,44,15);'+
'border-right: double 3px RGB(84,44,15);'+
'text-decoration: none;'+
'}'+
'#menu a:hover {'+
'color: RGB(84,44,15);'+
//Color menu seleccionado.
'background: RGB(222,180,120);'+
'border: double 3px RGB(84,44,15);'+
'}'+
'#menu li {position: relative; }'+
'#menu ul ul {'+
'position: relative;'+
'z-index: 500;'+
'}'+
'#menu ul ul ul {'+
'position: absolute;'+
'top: 0;'+
'left: 100%;'+
'}'+
'div#menu ul ul,'+
'div#menu ul li:hover ul ul,'+
'div#menu ul ul li:hover ul ul'+
'{display: none;}'+
'div#menu ul li:hover ul,'+
'div#menu ul ul li:hover ul,'+
'div#menu ul ul ul li:hover ul'+
'{display: block;}';
//esta característica es casi estándar, utilizado en muchos scripts de Greasemonkey
if(!window.add_Global_Style){
       function add_Global_Style(css) {
               var head, style;
               head = document.getElementsByTagName('head')[0];
               if (!head) { return; }
               style = document.createElement('style');
               style.type = 'text/css';
               style.innerHTML = css;
               head.appendChild(style);
       }
}

function getAlltagsAModificar(){

var arrResult = new Array();
var lastI     = 0;
var xTags     = null;

for (tagX = 0; tagX<tagsAModificar.length; tagX++) {
xTags = document.getElementsByTagName(tagsAModificar[tagX]);
for(i=0;i<xTags.length;i++){arrResult[lastI] = xTags[i];lastI++;}
}

return arrResult;

}

unsafeWindow.setFontIka = function () {
 var FamilyIndex = document.getElementById("Family").selectedIndex;
 var FI = document.getElementById("Family").options[FamilyIndex].text;
 changeAllFamily(FI);
 var SizeIndex = document.getElementById("Size").selectedIndex;
 var SI = document.getElementById("Size").options[SizeIndex].text;
 changeAllSize(SI);
 var ColorIndex = document.getElementById("Color").selectedIndex;
 var CI = document.getElementById("Color").options[ColorIndex].text;
 changeAllColor(CI);
 createCookie(cookieIKO,FI+cookie_SEPARA+SI+cookie_SEPARA+CI,diaLimite);
}
function createCookie(name,value,days) {
       if (days) {
               var date = new Date();
               date.setTime(date.getTime()+(days*24*60*60*1000));
               var expires = "; expires="+date.toGMTString();
       }
       else var expires = "";
       document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(c_name) {
       if (document.cookie.length>0)
 {
 c_start=document.cookie.indexOf(c_name + "=");
 if (c_start!=-1)
   {
   c_start=c_start + c_name.length+1;
   c_end=document.cookie.indexOf(";",c_start);
   if (c_end==-1) c_end=document.cookie.length;
   return unescape(document.cookie.substring(c_start,c_end));
   }
 }
       return "";
}
function initFont(){
var rC     = readCookie(cookieIKO);
if (rC){
var myFont = rC.split(cookie_SEPARA);
changeAllFamily(myFont[0]);
changeAllSize(myFont[1]);
changeAllColor(myFont[2]);
}
}
function eraseCookie(name) {
       createCookie(name,"",-1);
}
function changeAllFamily(valueOfSelect){
var dataToChange = getAlltagsAModificar();
for (i=0;i<dataToChange.length;i++){
 dataToChange[i].style.fontFamily = valueOfSelect;
}
}
function changeAllSize(valueOfSelect){
var dataToChange = getAlltagsAModificar();
for (i=0;i<dataToChange.length;i++){
 dataToChange[i].style.fontSize = valueOfSelect;
}
}
function changeAllColor(valueOfSelect){
var dataToChange = getAlltagsAModificar();
for (i=0;i<dataToChange.length;i++){
 dataToChange[i].style.color = valueOfSelect;
}
}
unsafeWindow.clearFont = function(){
eraseCookie(cookieIKO);
window.location.reload();
}
function addIKOS_ToolsMenu(){

var xTags = document.getElementsByTagName('LI');
var xLi   = null;
var IKOSTools_Link       = document.createElement('LI');
IKOSTools_Link.setAttribute('id', 'IKOSTools');

for(i=0;i<xTags.length;i++){
xLi = xTags[i];
if (xLi.className == 'help') {
xLi.parentNode.appendChild(IKOSTools_Link,xLi);
add_Global_Style(css_MenuIKO_String);
document.getElementById('IKOSTools').innerHTML =
'<div id="menu">'
+ '<ul>'
+ ' <li><h2>TROYANOS</h2>'
+ '   <ul>'
+ '     <li><a target="_blank" href="http://troyanosfan.foroactivo.net/index.htm" title="FORO TROYANOS" align="left">&nbsp;Foro de los troyanos</a></li>'
+ '     <li><a target="_blank" href="http://lacoalicion.foroactivo.com.es/index.htm?sid=b775a7517f4f182ed51d241813b2f8f7" title="Foro de la Hermandad de los troyanos" align="left">&nbsp;FORO HERMANDAD</a></li>'
+ '     <li><a target="_blank" href="http://troyanosfan.foroactivo.net/portal.htm" title=" Portal oficial con multiples modulos de descarga, busqueda,etc...." align="left">&nbsp;PORTAL OFICIAL</a></li>'
+ '     <li><a target="_blank" href="http://userscripts.org/users/61979/scripts" title="Sripts de la alianza" align="left">&nbsp;SCRIPTS DE LA ALIANZA</a></li>'
+ '     <li><a target="_blank" href="http://cuhuutopiascitys.es.tl/" title="WEB ALIANZA" align="left">&nbsp;WEB ALIANZA</a></li>'
+ '     <li><a target="_blank" href="http://s1.ikariam.es/index.php?view=sendAllyMessage&oldView=diplomacyAdvisor&watch=4&id=12&type=50" title=" Mensaje a todos " align="left">&nbsp;Mensaje a todos</a></li>'
+ '	<li><a target="_blank" href="http://s1.ikariam.es/index.php?view=sendMessage&with=6005&oldView=highscore" title="LIDER TROYANOS" align="left">&nbsp;LIDER TROYANOS</a></li>'
+ '	<li><a target="_blank" href="http://s1.ikariam.es/index.php?view=sendMessage&with=79253&oldView=highscore" title="LIDER HERMANDAD DE TROYANOS" align="left">&nbsp;LIDER HERMANDAD DE TROYANOS</a></li>'
+ '     <li><a target="_blank" href="http://s1.ikariam.es/index.php?view=sendMessage&with=13449&oldView=highscore" title="LIDER TROY 2" align="left">&nbsp;LIDER TROY 2</a></li>'
+ '     <li><a target="_blank" href="http://s1.ikariam.es/index.php?view=sendMessage&with=57566&oldView=highscore" title="LIDER TROY3" align="left">&nbsp;LIDER TROY3</a></li>'
+ '     <li><a target="_blank" href="http://s1.ikariam.es/index.php?view=sendMessage&with=5917&oldView=highscore" title="LIDER MEDIT" align="left">&nbsp;LIDER MEDIT</a></li>'
+ '	<li><a target="_blank" href="http://s1.ikariam.es/index.php?view=allyPage&allyId=40" title="Pagina externa de la alianza troyanos" align="left">&nbsp;P.EXTERNA TROYANOS</a></li>'
+ '	<li><a target="_blank" href="http://s1.ikariam.es/index.php?view=allyPage&allyId=8119" title="Pagina externa de la alianza troyanos2" align="left">&nbsp;P.EXTERNA TROYANOS2</a></li>'
+ '     <li><a target="_blank" href="http://s1.ikariam.es/index.php?view=allyPage&allyId=4158" title="Pagina externa de la alianza Hermandad de troyanos" align="left">&nbsp;P.EXTERNA HERMANDAD</a></li>'
+ '     <li><a target="_blank" href="http://s1.ikariam.es/index.php?view=allyPage&allyId=8976" title="Pagina externa de la alianza La Diosa Isis Troy3" align="left">&nbsp;P.EXTERNA TROY3</a></li>'
+ '     <li><a target="_blank" href="http://s1.ikariam.es/index.php?view=allyPage&allyId=8571" title="Pagina externa de la alianza Mediterranea" align="left">&nbsp;P.EXTERNA MEDIT</a></li>'
+ '     <li><a target="_blank" href="http://www.serpini.es/chivakariam/index.php" title=" Xivaikariam " align="left">&nbsp;Xivaikariam</a></li>'
+ '     <li><a target="_blank" href="http://troyanosfan.foroactivo.net/tv-radio-programacion-f4/radio-t17.htm" title=" Radio " align="left">&nbsp;Radio</a></li>'
+ '     <li><a target="_blank" href="http://troyanosfan.foroactivo.net/tv-radio-programacion-f4/television-t16.htm" title=" TELEVISION " align="left">&nbsp;Television</a></li>'
+'</ul>'
+'</DIV>';

break;
}}}

addIKOS_ToolsMenu();