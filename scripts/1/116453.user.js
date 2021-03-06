// ==UserScript==
// @name           Deus lo Vult TinyEd
// @namespace      http://userscripts.org/users/69817
// @description    Comments editor for the "Deus lo Vult!" blog
// @include        http://www.deuslovult.org/*
// @source         http://userscripts.org/scripts/review/116453
// @author         Alexandre Magno
// @version        0.3.1 (beta)
// @date           2011-10-27
// @icon           data:image/png;base64,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
// ==/UserScript==
//
// --------------------------------------------------------------------
//
// Feel free to address comments or improvement suggestions to alexandre.mbm@gmail.com
//
// Changelog:
//
//   2011-10-27, version 0.3.1 (beta)
//     Fix: author = 'anônimo'
//     Fix: #rte blockquote p
//     Fix: .commentbody { padding-top: 7px; } -> autor mark visible at clic #
//     Fix: okAction function -> tag br to "\n"
//     Fix: rte editor initialize with '<p><br></p>'
//     Fix: setVisibleButtons(visible) for hide .DLV_separator2hide spans
//     Added <hr> for author's marks
//     Added "format final" in the footer
//     Added outdent for blockquotes
//     Added CSS style for comment preview: commentPreviewConfigure()
//     Added showOrHideEditor() - Mostrar/Ocultar GM's menu option
//     Footer bar configuration
//
//   2011-10-27, version 0.3 (alpha)
//     Fix: okAction function -> tag p to "\n\n" 
//
//   2011-10-27, version 0.2 (pre-alpha)
//     First public version
//     Basic funcionality
//
//   2011-10-13, version 0.1 (pre-alpha)
//     First version, no public
//
// --------------------------------------------------------------------
//
// https://developer.mozilla.org/en/rich-text_editing_in_mozilla

divMargin = 10;

// http://www.howtocreate.co.uk/tutorials/javascript/browserwindow

function getPageWidth() {
    return document.documentElement.clientWidth;
}

function getPageHeight() {
    return document.documentElement.clientHeight;
}

function getPostWidth() {
    return document.getElementById('column').offsetWidth;
}

function getSideBarWidth() {
    h = document.getElementById('header').offsetWidth;
    c = document.getElementById('column').offsetWidth;
    return h - c;
}

function getBodyWidth() {
    return getPostWidth() + getSideBarWidth();
}

function getMarginsWidth() {
    return ( getPageWidth() - getBodyWidth() ) / 2;
}

function calcDivWidth() { // 2 * divMargin <- direita e esquerda
    return ( getSideBarWidth() + getMarginsWidth() ) - ( 2 * divMargin );
}

function getTopBarHeight() {
    return 28; // element
}

function calcDivHeight() {
    return getPageHeight() - ( 2 * divMargin ) - getTopBarHeight();
}

function addJavaScript(src) {  // no used
    var s = document.createElement('script');
    s.language = 'JavaScript';
    s.src = src;
    s.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(s);
}

function create_div_sEd(){
    var sEd = document.createElement('div');
    sEd.id = 'GM_cHelper';
    sEd.style.position = 'fixed'; /*Define a posição absoluta da pop-up*/
    sEd.style.bottom = divMargin + 'px'; /*Distancia da margem superior da página */
    sEd.style.right = '10px'; /*Distancia da margem esquerda da página */
    sEd.style.width = calcDivWidth() + 'px'; //'420px'; /*Largura da pop-up*/
    sEd.style.height = calcDivHeight() + 'px'; //'750px'; /*Altura da pop-up*/
    //sEd.style.padding = '20px 20px 20px 20px'; /*Margem interna da pop-up*/
    sEd.style.borderWidth = '1px'; /*Largura da borda da pop-up*/
    sEd.style.borderStyle = 'solid'; /*Estilo da borda da pop-up*/
    sEd.style.borderColor = '#ccc';
    sEd.style.background = '#fff'; /*Cor de fundo da pop-up*/
    //sEd.style.color = '#000066'; /*Cor do texto da pop-up*/
    sEd.style.display = 'block'; /* Estilo da pop-up*/    
    document.getElementsByTagName('body')[0].appendChild(sEd);
}

function newBar() {
    var table = document.createElement('table');
    table.bgColor = '#C0C0C0';
    table.id = 'GM_toolbar1';
    table.height = '30';
    table.cellSpacing = '0';
    table.cellPadding = '0';
    var tr = document.createElement('tr');
    table.appendChild(tr);
    return table;
}

function newButton_OLD(func,image,desc) {
    //var imgd = 'http://www.kevinroth.com/rte/images/'; 
    var imgd = 'http://www-archive.mozilla.org/editor/midasdemo/';
    var td = document.createElement('td');
    var div = document.createElement('div');
    div.className = 'imagebutton';
    div.id = func;
    var img = document.createElement('img');
    img.className = 'image';
    img.src = imgd + image;
    img.alt = desc;
    img.title = desc;
    div.appendChild(img);
    td.appendChild(div);
    return td;
}

function newButtonText(name,value,onclick) {
    var input = document.createElement('input');
    input.type = 'submit';
    input.name = name;
    input.id = name;
    input.value = value;
    input.onClick = onclick;
    return input;
}

function newButton(name,src,onclick) {
    var imgd = 'http://www.kevinroth.com/rte/images/'; 
    //var imgd = 'http://www-archive.mozilla.org/editor/midasdemo/';
    var input = document.createElement('input');
    input.type = 'image';
    input.name = name;
    input.id = name;
    input.src = imgd + src;
    input.addEventListener("click", onclick, false);
    return input;
}

/* <input type="image" src="butup.gif" alt="Submit button"> 

<input type="submit" name="btnBold" value="bold" on id="btnBold" onClick="doBold();">
<input type="submit" name="btnItalic" id="btnItalic" value="italic" onClick="doItalic();">
<input type="submit" name="btnURL" id="btnURL" value="URL" onClick="doURL();">
<input type="submit" name="btnImg" id="btnImg" value="Image" onClick="doImage();">

<iframe id="rte"></iframe>

See: http://www.webdevelopersnotes.com/tips/html/using_an_image_as_a_submit_button.php3?x=102&y=18 */

function createBar() {
    div = document.getElementById('GM_cHelper');
    div.appendChild( newButton('btnBold','bold.gif', doBold) );
    div.appendChild( newButton('btnItalic','italic.gif',doItalic) );
    div.appendChild( newButton('btnStrikeThrough','strikethrough.gif',doStrikeThrough) );
    div.appendChild( newButton('btnIndent','indent.gif',doIndent) );
    div.appendChild( newButton('btnOutdent','outdent.gif',doOutdent) );
    div.appendChild( newButton('btnHyperlink','hyperlink.gif',doHyperlink) );
    div.appendChild( newButton('btnUnlink','unlink.gif',doUnlink) );
    div.appendChild( newButton('btnCut','cut.gif',doCut) );
    div.appendChild( newButton('btnCopy','copy.gif',doCopy) );
    div.appendChild( newButton('btnPaste','paste.gif',doPaste) );
    div.appendChild( newButton('btnUndo','undo.gif',doUndo) );
    div.appendChild( newButton('btnRedo','redo.gif',doRedo) );
    div.appendChild( newButton('btnRemoveFormat','removeformat.gif',doRemoveFormat) );
   
}

/* http://starkravingfinkle.org/blog/2007/07/firefox-3-contenteditable/ */
/* http://stackoverflow.com/questions/3730905/javascript-iframe-designmode-and-onkeydown-event-question 

http://blog.zenorocha.com/post/4931780221/html5-local-storage
*/

function createRTE() {
    var editor = document.createElement('div');
    editor.id = 'rte';
    editor.contentEditable = 'true';
    editor.innerHTML = '<p><br></p>';
    editor.style.width = ( calcDivWidth() - 20 ) + 'px'; // DESCOBRIR RELAÇÃO DE VALORES
    editor.style.height = ( calcDivHeight() - 65 ) + 'px'; // DESCOBRIR RELAÇÃO DE VALORES
    editor.style.marginLeft = '0px';
    //editor.style.overflow = 'scroll';
    editor.style.padding = '8px';
    editor.style.borderWidth = '0px'; /*Largura da borda da pop-up*/
    editor.style.borderTopWidth = '1px';
    editor.style.borderBottomWidth = '1px';
    editor.style.borderStyle = 'dotted'; /*Estilo da borda da pop-up*/
    editor.style.background = '#FFFFCC';
    div = document.getElementById('GM_cHelper');
    div.appendChild( editor );
    GM_addStyle(' div { outline: 0; } '); 
    GM_addStyle(' input::-moz-focus-inner { border: 0; } ');
    GM_addStyle(' #rte blockquote { margin-top: 5px; margin-bottom: 0.7em; margin-left: 7px; margin-right: 7px; padding: 5px;background: #F9F9F9; border: solid 1px #E1E1E1; color: #939494; } ');
    GM_addStyle(' #rte { line-height: 1.5em; color: #666; font-size: 13px; overflow-x: hidden; overflow-y: scroll; text-align: left; } ');
    GM_addStyle(' #rte p { margin-bottom: 0.7em; border: 1px #ccc dotted; } ');
    GM_addStyle(' #rte blockquote p { margin: 0px; margin-bottom: 0.7em; border: 1px #ccc dotted; } ');
    
}

/*
function cleanContentEditableDiv(div) {
  var htmlString = div.innerHTML;
  htmlString     = htmlString.replace(/<\/p>/gim,"<br/>");
  htmlString     = htmlString.replace(/<p>/gim,"");
  return htmlString;
}*/

/* Code copied */

/* http://corpocrat.com/2008/07/22/a-simple-wysiwyg-editor-in-javascript/ */

function doBold() { 
    var range = window.getSelection().getRangeAt(0);
    range.surroundContents(document.createElement("b"));
}

function doItalic() { 
    var range = window.getSelection().getRangeAt(0);
    range.surroundContents(document.createElement("i"));
}

function doStrikeThrough() { 
    var range = window.getSelection().getRangeAt(0);
    range.surroundContents(document.createElement("del"));
}

function doIndent() { 
    document.execCommand('formatBlock', null, 'blockquote'); 
    document.execCommand('formatBlock', null, 'p');
}

function doOutdent() { document.execCommand("outdent",null,null); }

function doHyperlink() {
    var mylink = prompt("Digite um endereço: ", "http://");
    if ((mylink != null) && (mylink != ""))
        document.execCommand("createLink",null,mylink);
}

function doUnlink() { document.execCommand("unlink",null,null); }  // ESTUDAR ISSO -> UM!

function doCut() { document.execCommand("cut",null,null); }

function doCopy() { document.execCommand("copy",null,null); }

function doPaste() { document.execCommand("paste",null,null); }

function doUndo() { document.execCommand("undo",null,null); }

function doRedo() { document.execCommand("redo",null,null); }

function doRemoveFormat() { document.execCommand("removeFormat",null,null); }

function doImage() {
    myimg = prompt('Enter Image URL:', 'http://');
    cw = document.getElementById('rte').contentWindow;
    cw.document.execCommand('InsertImage', false, myimg);
}

/* http://forums.devshed.com/javascript-development-115/javascript-get-all-elements-of-class-abc-24349.html */
function makeGetElementsByClassName() {

    if (document.getElementsByClassName == undefined) {
	    document.getElementsByClassName = function(className)
	    {
		    var hasClassName = new RegExp("(?:^|\\s)" + className + "(?:$|\\s)");
		    var allElements = document.getElementsByTagName("*");
		    var results = [];

		    var element;
		    for (var i = 0; (element = allElements[i]) != null; i++) {
			    var elementClass = element.className;
			    if (elementClass && elementClass.indexOf(className) != -1 && hasClassName.test(elementClass))
				    results.push(element);
		    }

		    return results;
	    }
    }

}

function getCommentsWidth() {
    return document.getElementsByClassName('comment_text')[0].offsetWidth;
}

function html_entity_decode(str)
{
    var tarea = document.createElement('textarea');
    tarea.innerHTML = str; return tarea.value;
    tarea.parentNode.removeChild(tarea);
}

function viewsource(source)
{
  var html;
  var rte = document.getElementById('rte');
  if (source) { // to see source
    html = document.createTextNode(rte.innerHTML);
    
    // experiment
    //html = html.replace(/^\n\n/,'');
    
    rte.innerHTML = "";
    html = document.importNode(html,false);
	rte.appendChild(html);
  } else { // to see html
    html = rte.innerHTML;
    
    // experiment
    
    
    rte.innerHTML = html_entity_decode(html);
  }
}

function resizeAction() {
    a = document.getElementById('DLV_resize');
    if(a.innerHTML == 'expandir') {
        a.innerHTML = 'recolher';
    } else { // span.innerHTML == 'Recolher'
        a.innerHTML = 'expandir';
    }
    return false;
}

function setVisibleButtons(visible) {
    var array = new Array ("DLV_ok", "DLV_p", "DLV_br", "DLV_final", /* "DLV_ext",*/ "btnBold", "btnItalic", "btnStrikeThrough", "btnIndent", "btnOutdent", "btnHyperlink", "btnUnlink", "btnCut", "btnCopy", "btnPaste", "btnUndo", "btnRedo", "btnRemoveFormat");
    if(visible) {
        visible = 'inline';
        GM_addStyle(' .DLV_separator2hide { display: inline; } ');
    }
    else {
        visible = 'none';
        GM_addStyle(' .DLV_separator2hide { display: none; } ');
    }
    for(var i in array) 
        document.getElementById(array[i]).style.display = visible;
}

function setEditorHeightOrig(original){
    h = calcDivHeight();
    e = document.getElementById('GM_cHelper');
    if(original) 
        e.style.height = h + 'px';
    else 
        e.style.height = (h - 30)+ 'px';
}

function sourceAction() {
    a = document.getElementById('DLV_source');
    if(a.innerHTML == 'source') {
        a.innerHTML = 'html';
        viewsource(true);
        setVisibleButtons(false);
        setEditorHeightOrig(false);
    } else { // span.innerHTML == 'html'
        a.innerHTML = 'source';
        viewsource(false);
        setVisibleButtons(true);
        setEditorHeightOrig(true);
    }
    return false;
}

function okAction() {
  var rte = document.getElementById('rte');
  var html = rte.innerHTML.replace(/\n/g,'');
  if(html == '<p><br></p>') html = '';
  html = html.replace(/\<\/p\>/g,'').replace(/\<p\>/g,'\n\n');
  html = html.replace(/^\n\n/,'');
  html = html.replace(/\<br\>/g,'\n');
  
  var tarea = document.getElementById('comment');
  var a = document.getElementById('DLV_ok');
  a.href = "#respond";   // passa a existir nas 3 próximas linhas
  tarea.value = html;
  //var div = document.getElementById('respond').parentNode;
  //var a = document.createElement('a');
  //a.name = 'div_respond';
  //document.insertBefore(div);  
  return true;
}

function addFooterItem(id,text,action) {
    var a = document.createElement('a');
    a.id = id;
    a.href = 'javascript:void(0)';
    a.innerHTML = text;
    a.addEventListener("click", action, false);    
    div = document.getElementById('GM_cHelper');
    div.appendChild(a);
}

function addFooterSeparator(text,toHide) {
    div = document.getElementById('GM_cHelper');
    var span = document.createElement('span');
    span.innerHTML = text;
    if(toHide) span.setAttribute('class','DLV_separator2hide');
    div.appendChild(span);
}

function insertBr() {
    document.execCommand("insertHTML",null,"<br>");
}

function formatFinal() {
    rte = document.getElementById('rte');
    rte.innerHTML = rte.innerHTML + '<p><br></p>';
}

function inserParOnReturn() {
    document.execCommand("insertBrOnReturn",null,"true");
}

function formatP() { document.execCommand('formatBlock', null, 'p'); }

/* pop up? http://informaticanaweb.wordpress.com/2008/03/18/pop-up-css-e-javascript/ */

function infoHelp() {
    var a = document.getElementById('DLV_infoHelp');
    a.href = "http://www-archive.mozilla.org/editor/midasdemo/securityprefs.html";
    a.target = "_blank";
    alert('note this tip: \n\n  gedit ./.mozilla/firefox/[profile]/user.js');
    return true;
}

function openPage() {
    var a = document.getElementById('DLV_page');
    a.href = "http://userscripts.org";
    a.target = "_blank";
    return true;
}

function formatExternal() {
    alert('implement');
}

function formatExternal() {
    // getSelectionHtml()
    // replaceSelectionWithHtml(html)
    
    // getSelectedNodes()                   NOT USED
    
    html = getSelectionHtml();
    alert(html);/*
    //replaceSelectionWithHtml('ola');
    a = ;
    for(var i in a)
        alert(a.innerHTML);*/
    //document.execCommand('formatBlock', null, '');
    
    //html = getSelectionHtml();
    //rte = document.getElementById('rte');
    //rte.innerHTML = rte.innerHTML.replace('<p>'++<')
    
    // link configure e remove
}

function formatAction() {

}

function createFooter() {
    addFooterItem('DLV_ok','<b style="color: green;">OK</b>',okAction);
    addFooterSeparator(' | ',true);
    //addFooterItem('DLV_resize','expandir',resizeAction);
    //addFooterSeparator(' | ');
    addFooterItem('DLV_source','source',sourceAction);
    addFooterSeparator(' | format: ',true);
    //addFooterItem('DLV_format','yes',formatAction);
    addFooterItem('DLV_p','<tt>&lt;p&gt;</tt>',formatP);
    addFooterSeparator(' ',true);
    addFooterItem('DLV_br','<tt>&lt;br&gt;</tt>',insertBr);
    addFooterSeparator(' ',true);
    addFooterItem('DLV_final','<tt>final</tt>',formatFinal);
    //addFooterSeparator(' ');
    //addFooterItem('DLV_ext','ext',formatExternal);
    //addFooterSeparator(' | ');
    //addFooterItem('DLV_infoHelp','configure',infoHelp);
    addFooterSeparator(' | ',false);
    addFooterItem('DLV_page','help',openPage);
    

}

// test http://jsfiddle.net/w7gDE/1/

/*

<div class="commentbody">
<p class="comment_author">Sidnei says:</p>
<p class="comment_time"><a href="#comment-28590">
   23 April 2011 at 10:36 am</a> </p>
   
*/

/**
 * Function : dump()
 * Arguments: The data - array,hash(associative array),object
 *    The level - OPTIONAL
 * Returns  : The textual representation of the array.
 * This function was inspired by the print_r function of PHP.
 * This will accept some data as the argument and return a
 * text that will be a more readable version of the
 * array/hash/object that is given.
 * Docs: http://www.openjs.com/scripts/others/dump_function_php_print_r.php
 */
function dump(arr,level) {
	var dumped_text = "";
	if(!level) level = 0;
	
	//The padding given at the beginning of the line.
	var level_padding = "";
	for(var j=0;j<level+1;j++) level_padding += "    ";
	
	if(typeof(arr) == 'object') { //Array/Hashes/Objects 
		for(var item in arr) {
			var value = arr[item];
			
			if(typeof(value) == 'object') { //If it is an array,
				dumped_text += level_padding + "'" + item + "' ...\n";
				dumped_text += dump(value,level+1);
			} else {
				dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
			}
		}
	} else { //Stings/Chars/Numbers etc.
		dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
	}
	return dumped_text;

}

/************* bloco com somente a função acima *********************/

// http://stackoverflow.com/questions/4652734/return-html-from-a-user-selection/4652824#4652824
function getSelectionHtml() {
    var html = "";
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            html = container.innerHTML;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            html = document.selection.createRange().htmlText;
        }
    }
    return html;
}

/******** http://stackoverflow.com/questions/7781963/js-get-array-of-all-selected-nodes-in-contenteditable-div/7784176#7784176 ****/

function nextNode(node) {
    if (node.hasChildNodes()) {
        return node.firstChild;
    } else {
        while (node && !node.nextSibling) {
            node = node.parentNode;
        }
        if (!node) {
            return null;
        }
        return node.nextSibling;
    }
}

function getRangeSelectedNodes(range) {
    var node = range.startContainer;
    var endNode = range.endContainer;

    // Special case for a range that is contained within a single node
    if (node == endNode) {
        return [node];
    }

    // Iterate nodes until we hit the end container
    var rangeNodes = [];
    while (node && node != endNode) {
        rangeNodes.push( node = nextNode(node) );
    }

    // Add partially selected nodes at the start of the range
    node = range.startContainer;
    while (node && node != range.commonAncestorContainer) {
        rangeNodes.unshift(node);
        node = node.parentNode;
    }

    return rangeNodes;
}

function getSelectedNodes() {
    if (window.getSelection) {
        var sel = window.getSelection();
        if (!sel.isCollapsed) {
            return getRangeSelectedNodes(sel.getRangeAt(0));
        }
    }
    return [];
}

/*************************************************************************/

// http://stackoverflow.com/questions/6251937/how-to-get-selecteduser-highlighted-text-in-contenteditable-element-and-replac/6252893#6252893

function replaceSelectionWithHtml(html) {
    var range, html;
    if (window.getSelection && window.getSelection().getRangeAt) {
        range = window.getSelection().getRangeAt(0);
        range.deleteContents();
        var div = document.createElement("div");
        div.innerHTML = html;
        var frag = document.createDocumentFragment(), child;
        while ( (child = div.firstChild) ) {
            frag.appendChild(child);
        }
        range.insertNode(frag);
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        html = (node.nodeType == 3) ? node.data : node.outerHTML;
        range.pasteHTML(html);
    }
}

function makeCopyButtonsForAuthors() {

    //newButton('btnCopy','copy.gif',doCopyAuthor)
    //authors = document.getElementsByClassName('comment_author');
    //times = document.getElementsByClassName('comment_time');
    
    var authors = new Array();  // DEPOIS, IA SER... DESNECESSÁRIO
    var datetis = new Array();  // DEPOIS, IA SER... DESNECESSÁRIO
    var anchors = new Array();  // DEPOIS, IA SER... DESNECESSÁRIO
    
    
    cms = document.getElementsByClassName('commentbody');
    for(var i in cms) {
    
        /* mh = cms[i].innerHTML.match(/href=\"\#[^\"]*\"/g);
        var anchor = mh[0].replace('href="','').replace('"','');
        
        mh = cms[i].innerHTML.match(/\>[^\<\>]*\<\//g);
        
        alert(dump(mh));*/
        
        var c = 0;
        
        author = null;
        dateti = null;  
        anchor = null;      
 
        childs = cms[i].childNodes;
        
        for(var j in childs)
            if(childs[j].nodeType == 1) //element
                if(childs[j].textContent)
                {           
                    //alert(i + ' ec ' + childs[j].textContent);
                    if(c==0) 
                    { 
                        author = childs[j].textContent.replace(' says:',''); 
                        if(author == '') author = 'anônimo';
                        c += 1; continue;
                    }
                    if(c==1) 
                    { 
                        dateti = childs[j].textContent.replace('\n   ','')
                        dateti = dateti.replace('pm ','pm').replace('am ','am');
                        anchor = childs[j].firstChild.getAttributeNode('href').value;
                        c += 1;
                    }
                }
                else if(childs[j].innerText)
                    alert(i + ' ei ' + childs[j].innerText);
            else if(childs[j].nodeType == 3) // text
                if(childs[j].nodeValue)
                    alert(i + ' tn ' + childs[j].nodeValue);
        
        if(author && dateti && anchor) 
        {
            authors.push(author);
            datetis.push(dateti);
            anchors.push(anchor);
            //alert(author + ' | ' + dateti + ' | ' + anchor);
        }
        
        //alert(textnode.textContent || textnode.innerText);
                    
        //alert(as);
        //var author = as[0].innerHTML;
        //var anchor = as[1].href;
        //var datime = as[1].innerHTML;
        //alert(anchor+' '+datime+' '+author);
        //s = 'Em <a href="'+anchor+'">'+datime+'</a>, '+author+' escreveu:';
        //alert(s);
        
    }
    
    // OS 3 ARRAYS TORNARAM-SE "NECESSÁRIOS" (PARA MANTER CMS INTACTO, ACIMA)
    
    for(var i in cms)   
    {
        author = authors[i];    
        dateti = datetis[i];
        anchor = anchors[i];
         
        if(author && dateti && anchor && i < cms.length) 
        {   
            // TODO: colocar location no href...
            
            url = location.protocol + '//' + location.host + location.pathname;
            s = 'Em <a href="'+url+anchor+'">'+dateti+'</a>, <b>'+author+'</b> escreveu:';         
            p = document.createElement('p'); p.innerHTML = s;
            
            //ps = cms[i].getElementsByTagName('p');
            cms[i].insertBefore(p,cms[i].getElementsByTagName('p')[0]);
            
            hr = document.createElement('hr');
            hr.style.height = '3px';
            hr.style.border = '0';
            hr.style.color = 'gray';
            hr.style.backgroundColor = 'gray';
            
            cms[i].insertBefore(hr,cms[i].getElementsByTagName('p')[1]);
            
            // move <a href="#comment-33381"> to above
            //a = cms[i].getElementsByTagName('p')[1].getElementsByTagName('a')[0];
            //a.parentNode.removeChild(a);
            //cms[i].insertBefore(a,cms[i].getElementsByTagName('p')[1]);
            
            //appendChild( p );
        }
    }
    GM_addStyle(' .comment_author, .comment_time { display:none; } ');
    GM_addStyle(' .commentbody { padding-top: 7px; } ');
    //alert(location.href);
}

function doCopyAuthor(str) {

}

/*

http://stackoverflow.com/questions/2087778/javascript-copy-style/2088135#2088135

    for (var i= from.style.length; i-->0;) {
        var name = from.style[i];
        to.style.setProperty(name,
            from.style.getPropertyValue(name),
            priority= from.style.getPropertyPriority(name)
        );
    }

*/

function commentPreviewConfigure() {
    w = getCommentsWidth();
    GM_addStyle(' #comment-preview { border: 1px solid #ccc; width: '+w+'px; background: #F8FCEF; padding: 20px; margin:0; margin-top: 45px; margin-left: 50px; } ');
    GM_addStyle(' #div-comment-preview .comment-author { display: none; } ');
    GM_addStyle(' #div-comment-preview .comment-meta { display: none; } ');
    GM_addStyle(' #div-comment-preview { text-align: left; } ');
}

// http://unixpapa.com/js/key.html
// http://www.mspc.eng.br/info/jscriptContrEv.shtml

/* Não teve jeito. Duas chamadas tiveram de ficar sendo feitas, repetindo. */

function showOrHideEditor() {
    editor = document.getElementById('GM_cHelper');
    if(editor.style.display == 'block')
        editor.style.display = 'none';
    else // editor.style.display == 'none'
        editor.style.display = 'block';
}

window.addEventListener("load", function(e) {
 
    makeGetElementsByClassName();
    create_div_sEd();
    createBar();
    createRTE(); 
    createFooter();
    makeCopyButtonsForAuthors();
    commentPreviewConfigure();

    GM_registerMenuCommand ("Mostrar/Ocultar editor TinyEd", showOrHideEditor);


}, false);

/*

- cada imagem em código 64                          TODO                    
- acessos: expandir/recolher                        DEPOIS
- acessos: ajuda (pop-up)                           TODO
- acessos: créditos                                 TODO
- acessos: favoritos (?)                            DEPOIS
- acessos: textarea                                 TESTING
- acessos: "preparar" (testes) / enviar (?)         TESTING


*/
