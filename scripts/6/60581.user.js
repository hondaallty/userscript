// ==UserScript==
// @name           Washington Post to Wikipedia citation
// @namespace      Wikipedia
// @description    Converts any article or blog page into Wikipedia news citation
// @include        http://blog.washingtonpost.com/*/*
// @include        http://voices.washingtonpost.com/*/*
// @include        http://www.washingtonpost.com/*/*
// ==/UserScript==

/*
Description
This Greasemonkey script takes any article page from the washingtonpost.com website and creates a
Wikipedia citation for it.

Edit history
2009-10-26 Creation based on similar script for The Times.

*/
// Last update
var version='26 October 2009';

// Global variables
var utitle='', uauthor='', usummary='', udate='', 
	uyear='', uurl='', uref='', upub='The Washington Post',
	uwidth='650',
	monthNames=new Array(
	"January","February","March","April","May","June","July",
	"August","September","October","November","December");

var helpText='<p><b>Instructions</b></p>\
<p style=margin-top:0.75em;>The citation above is automatically populated \
based on the Washington Post article you are currently viewing. You can edit the text on this page \
inside the text box. For more help on the citation parameters see \
<a style="font-size:80%" href=http://en.wikipedia.org/wiki/Template:Cite_news target=_blank>\
[[template:cite news]]</a>. Some handy buttons available are:<\p>\
<div style=margin-left:2em;margin-top:0.75em;>\
<input type=button value="Highlight text"> highlight all text ready for cut & paste\
<br><input type=button value="<==>"> expand the text for more easily readable layout\
<br><input type=button value="=><="> collapse the text\
<br><input type=button value=&laquo> <input type=button value=&raquo> increase/decrease the size of the edit text box\
<br><input type=button style=color:darkblue; value="&lt;ref&gt"> wrap the citation with ref tags to \
turn it into a footnote (click twice to remove automatic name)\
<br><input type=button style=color:red; value=Reset> undo all changes\
<br><input type=button style=color:darkblue; value=quote> add a quote (copy part of the article first, then paste it into \
the pop-up box)\
</div>\
<p style=margin-top:0.75em;><i>\
Feedback and bug reporting can be left on my Wikipedia user talk page \
<a style="font-size:80%" href=http://en.wikipedia.org/wiki/User_talk:Ash target=_blank>\
[[User talk:Ash]]</a>. \
Before you report a bug check, you have installed the latest version available on \
<a href=http://userscripts.org/scripts/show/60581 target=_blank>userscripts.org</a>.\
</i></p>\
<p style=margin-top:1.5em;color:grey;>Release date of this script: '+version+'</p>';

/**
 * Throughout, whitespace is defined as one of the characters
 *  "\t" TAB \u0009
 *  "\n" LF  \u000A
 *  "\r" CR  \u000D
 *  " "  SPC \u0020
 *
 * This does not use Javascript's "\s" because that includes non-breaking
 * spaces (and also some other characters).
 */

/**
 * Determine whether a node's text content is entirely whitespace.
 *
 * @param nod  A node implementing the |CharacterData| interface (i.e.,
 *             a |Text|, |Comment|, or |CDATASection| node
 * @return     True if all of the text content of |nod| is whitespace,
 *             otherwise false.
 */
function is_all_ws( nod )
{
  // Use ECMA-262 Edition 3 String and RegExp features
  return !(/[^\t\n\r ]/.test(nod.data));
}


/**
 * Determine if a node should be ignored by the iterator functions.
 *
 * @param nod  An object implementing the DOM1 |Node| interface.
 * @return     true if the node is:
 *                1) A |Text| node that is all whitespace
 *                2) A |Comment| node
 *             and otherwise false.
 */

function is_ignorable( nod )
{
  return ( nod.nodeType == 8) || // A comment node
         ( nod.nodeType == 3); // a text node
}

/**
 * Version of |previousSibling| that skips nodes that are entirely
 * whitespace or comments.  (Normally |previousSibling| is a property
 * of all DOM nodes that gives the sibling node, the node that is
 * a child of the same parent, that occurs immediately before the
 * reference node.)
 *
 * @param sib  The reference node.
 * @return     Either:
 *               1) The closest previous sibling to |sib| that is not
 *                  ignorable according to |is_ignorable|, or
 *               2) null if no such node exists.
 */
function node_before( sib )
{
  while ((sib = sib.previousSibling)) {
    if (!is_ignorable(sib)) return sib;
  }
  return null;
}

/**
 * Version of |nextSibling| that skips nodes that are entirely
 * whitespace or comments.
 *
 * @param sib  The reference node.
 * @return     Either:
 *               1) The closest next sibling to |sib| that is not
 *                  ignorable according to |is_ignorable|, or
 *               2) null if no such node exists.
 */
function node_after( sib )
{
  while ((sib = sib.nextSibling)) {
    if (!is_ignorable(sib)) return sib;
  }
  return null;
}

/**
 * Version of |lastChild| that skips nodes that are entirely
 * whitespace or comments.  (Normally |lastChild| is a property
 * of all DOM nodes that gives the last of the nodes contained
 * directly in the reference node.)
 *
 * @param sib  The reference node.
 * @return     Either:
 *               1) The last child of |sib| that is not
 *                  ignorable according to |is_ignorable|, or
 *               2) null if no such node exists.
 */
function last_child( par )
{
  var res=par.lastChild;
  while (res) {
    if (!is_ignorable(res)) return res;
    res = res.previousSibling;
  }
  return null;
}

/**
 * Version of |firstChild| that skips nodes that are entirely
 * whitespace and comments.
 *
 * @param sib  The reference node.
 * @return     Either:
 *               1) The first child of |sib| that is not
 *                  ignorable according to |is_ignorable|, or
 *               2) null if no such node exists.
 */
function first_child( par )
{
  var res=par.firstChild;
  while (res) {
    if (!is_ignorable(res)) return res;
    res = res.nextSibling;
  }
  return null;
}

/**
 * Version of |data| that doesn't include whitespace at the beginning
 * and end and normalizes all whitespace to a single space.  (Normally
 * |data| is a property of text nodes that gives the text of the node.)
 *
 * @param txt  The text node whose data should be returned
 * @return     A string giving the contents of the text node with
 *             whitespace collapsed.
 */
function data_of( txt )
{
  var data = txt.data;
  // Use ECMA-262 Edition 3 String and RegExp features
  data = data.replace(/[\t\n\r ]+/g, " ");
  if (data.charAt(0) == " ")
    data = data.substring(1, data.length);
  if (data.charAt(data.length - 1) == " ")
    data = data.substring(0, data.length - 1);
  return data;
}

function cnvrt2title(str) {
	return str.toLowerCase().replace(/\b\w+\b/g, cnvrt);
    function cnvrt() {
    	if (arguments[arguments.length -2] == 0)
        	return arguments[0].replace(/^[a-z]/, cnvrt2);
        else if (/^(a|about|after|an|and|at|by|for|from|in|into|nor|of|on|onto|over|the|to|up|with|within)$/.test(arguments[0]) )
            return arguments[0];
        else
            return arguments[0].replace(/^[a-z]/, cnvrt2);
        }
	function cnvrt2() {
		return arguments[0].toUpperCase();
    }
}

function randomString(n) {
	var chars = "abcdefghiklmnopqrstuvwxyz";
	var string_length = n;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	return randomstring;
}

function fullMonth(m){
monthNames
	for(var i in monthNames){
		if(monthNames[i].search(m)==0){return monthNames[i]}
	}
	return m;
}

function authorSplit(a, fl) { // Attempt to get lastname, first name ordered
	a=a.replace(/\s+/g," ");
	var myA=a.split(' '), myS='', myF='';
	// check for organizations or oddities
	if(a.match(/association|organi|inc\.|charity|trust|society|archive|[\(\[\{\.\,]| (&|&amp;) /i)!==null){
		return (fl==1 ? a : myF);
	}
	// check for nobiliary particles if name is more than one word
	if (myA.length>1 && (myA[myA.length-2].match(/^von$|^van$|^de$/i)!==null) && (myA.length<5)) { // Needs expansion
		myS=myA[myA.length-2]+' '+myA[myA.length-1];
    	myF=myA.slice(0,myA.length-2).join(' ');
	} else if (myA.length<5) {
	   	myS=myA[myA.length-1];
	    myF=myA.slice(0,myA.length-1).join(' ');
	    if(myS.replace(/[\.\s]/g,"").length<2){
	    	var swap=myS;
	    	myS=myF;myF=swap;
	    }
	} else {myS=a}; // Skip strangely long names, likely organizations*/
	return (fl==1 ? myS : myF);
}

function tidy(str){ // remove leading and trailing unwanted chars
	return str.replace(/[\s\r\n]+/g," ")
		.replace(/^[\s\.,;:-]+|[\s:;,-]+$/g,"")
		.replace(/'/g,"\u0027")
		.replace(/\[\{/g,"(").replace(/\]\}/g,")");
}

function strip(str){ // remove formatting
	return tidy(str.replace(/<.*?>/g,""));
}

function getId(txt){ // list of prospect IDs separated by commas
	var ObArr=txt.split(',');
	for (var i=0;i<ObArr.length;i++){
		var Ob=document.getElementById(ObArr[i].replace(/ /g,""));
		if(Ob!==null){return Ob} // Return first existing object
	}
	// None exists
	return false;
}

function infoFromPaper() {
	var s = '';
	// Get meta data
    var meta=document.getElementsByTagName('meta');
    //GM_log("meta data found = "+meta.length);
    if(meta!==null && meta.length>3){
    	var mtitle='', msummary='', mdate='';
    	for(var i in meta){
    		switch(meta[i].name){
    			case "title":
    				mtitle=meta[i].content.replace(/\s/g," ");
    				break;
    			case "Description" : case "DESCRIPTION": case "description":
    				msummary=tidy(meta[i].content.replace(/"/g,"'"));
    				//GM_log("usummary = "+msummary);
    				break;
    			case "DC.date.issued":
    				udate=meta[i].content.split(" ")[0].replace(/\//g,"-");
    				uref="WP"+udate.replace(/\D/g,"");
    				udate=udate.match(/\d\d$/)[0]+" "+
    				monthNames[udate.replace(/.*-(\d\d)-.*/,"$1")-1]+
    				" "+udate.match(/\d{4}/)[0];
    				break;
    			 case "dcterms.created": 
    			 	udate=meta[i].content.split('T')[0].replace(/\D/g,"");
    			 	uref="WP"+udate;
    			 	if(udate.length==8 && udate.match(/\d{8}/)!==null){
    			 		udate=udate.match(/\d\d$/)[0]+" "+
    					monthNames[udate.replace(/....(\d\d)../,"$1")-1]+
    					" "+udate.match(/\d{4}/)[0];};
    			 	break;
    			 case "DCSext.author":case "author":
    			 	if(uauthor==''){
    			 		uauthor=meta[i].content;
    			 		GM_log("Author meta = "+uauthor);	
    			 	}
    			 	break;
    		}
    	}
    	//if(mtitle==''){mtitle=msummary;msummary=''};
    	if(msummary!==''){usummary=strip(msummary)};
    	utitle=strip(mtitle);
    }
    // Get heading
    var h1=document.getElementsByTagName('h1');
    if(h1!==null){
    	for(var i in h1){
    		if(h1[i].className==""){
    			h=h1[i].innerHTML;
    			if(h.length>1){
    				utitle=strip(h);
    				i=h1.length;
    			}
    		}
    	}
    }
    // Get sub header
    var h2=document.getElementsByTagName('h2');
    if(h2!==null && usummary==''){
    	for(var i in h2){
    		if(h2[i].className==""){
    			h=h2[i].innerHTML;
    			if(h.length>1){
    				usummary=strip(h);
    				break;
    			}
    		}
    	}
    }
    // Get sub header
    var h3=document.getElementsByTagName('h3');
    if(h3!==null && utitle==''){
    	for(var i in h3){
    		if(h3[i].className==""){
    			h=h3[i].innerHTML;
    			if(h.length>1 && h.match(/^Stories By/i)==null){
    				utitle=strip(h);
    				break;
    			}
    		}
    	}
    }
    if(utitle!==''){s+=" |title="+utitle};
    // Get date
    // Get blog posted date
    var ps=document.getElementsByTagName('p');
    if(ps!==null && udate==''){
    	for(var i in ps){
    		if(ps[i].className=="posted"){
    			udate=strip(ps[i].innerHTML);
    			if(uauthor==''){
    				uauthor=strip(udate.split("|")[0])
    					.match(/By( \w*){1,4}/)[0]
    					.replace(/^by /,"");
    			}
    			udate=udate.match(/\w{3,10} \d{1,2}, \d{4}/)[0];
    			i=ps.length;
    		}
    	}
    }
    if(udate!==''){s+=" |date="+udate}
    // Get byline
    if(getId('byline')!==false){
    	uauthor=strip(getId('byline').innerHTML)
    		.replace(/$by /i,"");
    }
    // Get staff article name (blog)
    /*<div id="bannerstrip">
<a href="http://projects.washingtonpost.com/staff/articles/chris%2bcillizza/">About Chris Cillizza</a> &nbsp;|&nbsp; <strong>On Twitter:</strong>
*/
	if(getId('bannerstrip')!==false && uauthor==''){
		var links=getId('bannerstrip').getElementsByTagName('a');
		for(var i in links){
			if(links[i].href.search(/http:\/\/projects.washingtonpost.com\/staff\/articles/)>-1){
				uauthor=strip(links[i].innerHTML).replace(/^About |^By /i,"");
			}
		}
	}
    // Output author
   	if(uauthor!==''){
   		uauthor=cnvrt2title(uauthor)
   			.replace(/^\s*by |,.*pondent| in .*/ig,"").replace(/\s+/g," ")
   		   	.replace(/^\s*|\s*$/g,"");
   	    if(authorSplit(uauthor,0)!==''){
   	    	s+=" |last="+authorSplit(uauthor,1)+" |first="+authorSplit(uauthor,0);
   	    	//uref=authorSplit(uauthor,1);
   	    }else{
   	    	s+=" |author="+uauthor;
   	    	//uref=uauthor.replace(/\W/g,"");
   	    }
    }
    uyear=(udate.match(/\d{4}/g)!==null?udate.match(/\d{4}/g)[0]:'');
    if(uref==''){uref=(authorSplit(uauthor,1)!=='' ? authorSplit(uauthor,1) : "WP" )+uyear};
    s+=" |newspaper="+upub;
    GM_log("uref="+uref+"//uyear="+uyear+"//uauthor="+uauthor+"//upub="+upub+"\n//usummary="+usummary);
    return s;
}

function showCitationFromInfo(info, url) {
      var s = '{{cite news';
      s += info;
      if(uurl==''){uurl=url};
      if(uurl!==''){s += ' |url=' + uurl.replace(/\/$/,"") + '}}'}else{s+='}}'};
      // sort into preferred order
      var ord=new Array("quote=","newspaper=","year=","date=","author(|1)", "first(|1)=", "last(|1)=", "title="); // Reverse order
      for(var i=0;i<ord.length;i++){
      	if(s.search(ord[i])>0){
      	  var m='\\| ?'+ord[i]+'[^\\|]+';
      	  if(s.match(m)!==null){
      	  	var mm=s.match(m)[0];
      	  	s=s.replace(/(\{\{cite news )/,"$1"+mm);
      	  	s=s.split(mm)[0]+mm+s.split(mm)[1]+s.split(mm)[2];
      	  }
      	}
      }
      // Toggle pre-existing citation box
      var test=document.getElementById('cite');
      if(test!==null){
      	test.parentNode.parentNode.removeChild(test.parentNode);
      		with(document.getElementById('myCite').getElementsByTagName('input')[0]){
      			value="Show citation";
      			style.backgroundColor="transparent";
      		}
      	} else {
      		with(document.getElementById('myCite').getElementsByTagName('input')[0]){
      			value="Hide citation";
      			style.backgroundColor="lightblue";
      		}
      	// Create citation box buttons
      	var tb = node_after(document.getElementById('myCite')); // insert here
      	var cite=document.createElement('div');
      	var taRows=parseInt(s.length/70);
      	var plusRows=0; // How many rows are too long for text box
      	for(var i=0;i<s.split(' |').length;i++){if(s.split(' |')[i].length>75){++plusRows}};
      	s.replace(/'/g,"&#146;"); // change single quotes
      	// Create summary / abstract
      	var sSummary=s.replace(/}}$/,(usummary!=='' ? " | quote="+usummary+"}}" : "}}"));
      	var search=utitle.split(':')[0].replace(/\s/g,"+");
		var gnews="http://news.google.com/news?q="+search;
		var gyear="&as_user_hdate="+uyear+"&as_user_ldate="+uyear;
		var guardian="http://browse.guardian.co.uk/search?search="+utitle.split(':')[0];
		//cite.className='blogs';
		var spacer='';
		for(var i=0;i<50;i++){spacer+='&nbsp;'};
      	cite.innerHTML = '\n<form name=cite id=cite><p style="font-size:12pt;margin-bottom:0px;">'+
      	'<span title="Edit and copy citation, useful additional fields include &quot;quote&quot; and &quot;page&quot;">'+
      	'Wikipedia citation</span> <input style="font-size:8pt" type="button" value="Highlight Text" title="Click to highlight all text for copying" '+
      	'onClick="javascript:this.form.citation.focus();this.form.citation.select();"> '+
      	 // Newspaper droplist
      	spacer+'\
<a id=golink name=golink target="_blank" style="font-size:8pt" \
href="'+gnews+'+'+gyear+'">Go</a>&nbsp; \
<SELECT name="droplist" id=droplist title="Search for &quot;'+
utitle.split(':')[0].replace(/[^\w\s]/g,"")+'&quot; at selected site" \
onchange="javascript:document.getElementById(&quot;golink&quot;).href=\
this.form.droplist.options[this.form.droplist.selectedIndex].value;" \
style="font-size:8pt;">\
<option SELECTED="SELECTED" value="'+gnews+'+'+gyear+'">Google News</option>\
<option value="http://www.google.com/search?q='+search+'">Google</option>\
<option value="'+gnews+'+site:independent.co.uk'+gyear+'">The Independent</option>\
<option value="'+gnews+'+site:timesonline.co.uk'+gyear+'">The Guardian</option>\
<option value="'+gnews+'+site:bbc.co.uk'+gyear+'">BBC News</option>\
<option value="'+gnews+'+site:telegraph.co.uk'+gyear+'">The Telegraph</option>\
<option value="'+gnews+'+site:thesun.co.uk'+gyear+'">The Sun</option>\
<option value="'+gnews+'+site:cnn.com'+gyear+'">CNN</option>\
<option value="'+gnews+'+site:nytimes.com'+gyear+'">New York Times</option>\
<option value="http://www.wired.com/search?query='+search+'&siteAlias=all">Wired News</option>\
</SELECT>'+
      	'</p>\n'+
      	'<p style="margin-top:2px;margin-bottom:0px;">'+
      	// +URL button
      	'<input id="b_url" style="font-size:8pt" type="button" value="No URL" '+
      	'onClick="javascript:var v=this.form.citation;'+
      	'if(this.form.citation.value.match(/\\|(| )*url(| )=/)!==null){'+
      	'this.form.b_url.value=&quot;URL&quot;;'+
      	'v.value=v.value.replace(/(\\n|| )*\\|(| )*url(| )=(| )[^}\\n\\|]*/,&quot; &quot;)'+
      	'}else{this.form.b_url.value=&quot;No URL&quot;;'+
      	'v.value=v.value.replace(/}}$/,&quot; | url='+uurl+' }}&quot;)}";> '+
      	// +ref button with smart 3 state behaviour
      	'<input title="Add automatically named reference tags for footnote" name="bRef" id="bRef" '+
      	'style="font-size:8pt;color:darkblue" type="button" value="<ref>" '+
      	'onClick="javascript:var v=this.form.citation,t=this.form.bRef;'+
      	'v.value='+	
      	'(v.value.search(/\\<ref name\\=/)>-1 ? '+
      	'v.value.replace(/(\\<ref) name\\='+uref+' /,&quot;$1&quot;)'+ //2nd click
      	' : (v.value.search(/\\<ref( *)>/)>-1 ? '+
      	'v.value.replace(/\\<ref>|<.ref>/g,&quot;&quot;)'+ //3rd click
      	' : v.value.replace(/^{{|^\\*{{/,&quot;<ref name='+uref+ //1st click
      	' >{{&quot;).replace(/}}$/,&quot;}}</ref>&quot;)));'+
      	'if(v.value.search(/ref name=/)>0){t.title=&quot;Click to remove ref name&quot;;'+
      		't.style.color=&quot;darkgreen&quot;}'+ // Colour changer
      	'else if(v.value.search(/\\<ref\\>/)>-1){t.title=&quot;Click to remove ref tags&quot;;'+
      		't.style.color=&quot;red&quot;}'+
      	'else{t.title=&quot;Add automatically named reference tags for footnote&quot;;'+
      		't.style.color=&quot;darkblue&quot;};"> '+
      	// +(optional) summary
      	(usummary!=='' ? 
      	'<input title="Add summary of article as quotation" '+
      	'style="color:darkblue;font-size:8pt" type="button" value="Summary" '+		
      	'onClick="javascript:var v=this.form.citation;if(v.value.match(/quote( *)=/)==null){'+
      	'v.value=v.value.replace(/}}$/,&quot; |quote='+usummary+'}}&quot;)};"> ':'')+
      	// Add bullet
      	'<input title="Bullet" style="color:darkblue;font-size:8pt" type="button" value="*" '+		
      	'onClick="javascript:this.form.citation.value='+
      	'this.form.citation.value.replace(/^{{/,&quot;*{{&quot;);"> '+
      	// +Reset button
      	'<input title="Reset the citation text, wiping out changes" '+
      	'style="color:red;font-size:8pt" type="button" value="Reset" '+
      	'onClick="javascript:getElementById(&quot;citebox&quot;).rows='+taRows+
      	';this.form.citation.value=\''+s.replace(/'/g,"&#146;").replace(/"/g,"&quot;")+'\';getElementById(&quot;addfields&quot;).style.display=&quot;&quot;;'+
      	'this.form.bRef.style.color=&quot;darkblue&quot;;'+ // Reset ref button
      	'this.form.bSqueeze.style.display=&quot;none&quot;;'+
      	'this.form.bExpand.style.display=&quot;&quot;;"> '+ // Reset expand button
      	// Text area start
      	'<p style="font-size:8pt;">'+
      	'<table><tr><td><textarea style="font-size:8pt;padding:0.5em;border-color:black;'+
      	'border-style:solid;border-width:1px;" rows='+taRows+
      	' cols=85 name=citation id=citebox>'+s+'</textarea></td>'+
      	'<td valign=top>'+
     	// Squeeze & Expand
      	'<td valign=top align=center>'+
      	'<input id="bSqueeze" name="bSqueeze" title="Reduce size by removing some spaces" '+// Squeeze
      	'type="button" style="display:none;" value="=><=" onClick="javascript:getElementById(&quot;citebox&quot;).rows='+taRows+
      	';this.form.citation.value='+
      	'this.form.citation.value.replace(/\\n*\\s* /g,&quot; &quot;)'+
      	'.replace(/\\n/g,&quot;&quot;).replace(/ = /g,&quot;=&quot;)'+
      	'.replace(/\\| /g,&quot;|&quot;).replace(/ }}/g,&quot;}}&quot;);'+
      	'this.form.bSqueeze.style.display=&quot;none&quot;;'+
      	'this.form.bExpand.style.display=&quot;&quot;;"> '+
      	''+
      	'<input id="bExpand" name="bExpand" title="Long layout" '+		// Expand
      	'type="button" value="<==>" onClick="javascript:this.form.citation.value='+
      	'this.form.citation.value.replace(/\\n*\\s*\\|/g,&quot;\\n |&quot;).replace(/\\n*\\s*}}/g,&quot;\\n}}&quot;)'+
      	'.replace(/\\?id=/,&quot;idxxx&quot;).replace(/(\\w)=(\\w)/g,&quot;$1 = $2&quot;).replace(/idxxx/,&quot;?id=&quot;);'+
      	'getElementById(&quot;citebox&quot;).rows=this.form.citation.value.split(/\\n/).length+'+plusRows+';'+
      	'this.form.bSqueeze.style.display=&quot;&quot;;'+
      	'this.form.bExpand.style.display=&quot;none&quot;"> '+
      	'<br>'+
      	'<input title="Take one row off textbox" '+		// Nudge -1
      	'type="button" value="&laquo;" onClick="javascript:'+
      	'var r=getElementById(&quot;citebox&quot;);if(r.rows>1){r.rows-=1};"> '+
      	'<input title="Add one row to textbox" '+		// Nudge +1
      	'type="button" value="&raquo;" onClick="javascript:'+
      	'getElementById(&quot;citebox&quot;).rows+=1;"> '+
      	'</td></tr></table></p>\n'+ // Text area end
      	'<p style="margin-top:2px;margin-bottom:2px;font-size:8pt;" id=addfields>'+
      	// +help
      	'<input id=showHelp title="Show instructions" '+
      	'type=button value="Help" '+
      	'onClick="javascript:var h=getElementById(&quot;helpText&quot;),t=this.form.showHelp;'+
      	'if(t.value==&quot;Help&quot;){'+
      	'h.style.display=null;'+
      	't.value=&quot;Hide help&quot;;t.style.color=&quot;red&quot;}else{'+
      	'h.style.display=&quot;none&quot;;'+
      	't.value=&quot;Help&quot;;t.style.color=&quot;black&quot;}'+
      	';" > '+
      	'  Add field: '+
      	// +quotation
      	 '<input title="Add quotation to the citation" style="color:darkblue" type=button value=quote '+
      	'onClick="javascript:var q=prompt(&quot;Quotation&quot;);if(q.length>3){this.form.citation.value=this.form.citation.value.replace'+
      	'(/}}$/,&quot; |quote=&quot;+q+&quot; }}&quot;)};" > '+
      	// +(optional) author
      	(uauthor==''?'<input title="Add author" style="color:darkblue" type=button value=author '+
      	'onClick="javascript:var q=prompt(&quot;Author&quot;);'+
      	'if(q.length>3){this.form.citation.value=this.form.citation.value.replace'+
      	'(/}}$/,&quot; |author=&quot;+q+&quot; }}&quot;)};" > ':'')+
      	// help text area
      	'</p><div id="helpText" style="display:none"><p><table><tr>'+
      	'<td style="padding:2em;background-color:lightgreen;">'+
      	helpText+'</td></tr></table></p></div>'+
        '</form>';
		with(cite.style){
      		backgroundColor='lightblue';
      		border='solid black 1px';
      		padding='8px';
      		margin='2px';
			marginTop='0em'; // A bit arbitrary, subject to reformat
			width=uwidth+'px';
			fontSize='8pt';
		}
      	tb.parentNode.insertBefore(cite,tb); // Insert before titlebar
      	}
    }


    function showCitationFromPage() {
      var u = cleanURI();//location.href;
      var book = u.split('&')[0];
      GM_log('Getting info from '+book);
      var info = infoFromPaper();
     showCitationFromInfo(info, u);
    }
    
function cleanURI() {
	return location.href.split('&')[0].split('?')[0];
}

//Add a buttons to the top selected area
function add_link(text, title, func, id) {
	// (add test of url)
	var bar=getId('bread_crumbs,tsMortem,content-wrapper');
	if(bar==false){GM_log('** Top Id not found');return}
    var link = document.createElement('a');
    link.title = title;
    with(link.style){
      	textDecoration = 'none';
      	fontSize='8pt';
    }
    link.innerHTML = text;
    link.id=id;
    var dofunc = function(event) {
        event.stopPropagation();
        event.preventDefault();
        func();
    };
    link.addEventListener('click', dofunc, false);
    bar.parentNode.insertBefore(link,bar);
}

//GM_log('Adding link to top');
add_link('<input type=button style="background:lightblue;" value="Show citation">', 
	'Show a Wikipedia formatted citation for this article',
	showCitationFromPage,'myCite');