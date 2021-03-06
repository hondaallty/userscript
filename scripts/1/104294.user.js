// ==UserScript==
// @name           facebook.com - Replace smileys (enhanced)
// @version        2.0.4+
// @description    Replace text smileys (smileys are same as in facebook chat) -- This is an enhanced version of the script found at <a href="http://userscripts.org/scripts/show/49338">http://userscripts.org/scripts/show/49338</a>. This version adds support for SSL, so that it doesn't leak your session information for hijacking tools like Firesheep.
// @icon           http://userscripts.kub4jz.cz/smileys/icon.png

// @author         kc9jud <kc9jud@arrl.net>

// @require        http://buzzy.hostoi.com/AutoUpdater.js

// @include        http*://www.facebook.com/*
// @match          http://www.facebook.com/*
// @match          https://www.facebook.com/*

// @exclude        http://*.facebook.com/login.php
// @exclude        http://*.facebook.com/sharer*
// @exclude        http://*.facebook.com/ajax/*
// @exclude        http://*.facebook.com/plugins/*

// @exclude        https://*.facebook.com/login.php
// @exclude        https://*.facebook.com/sharer*
// @exclude        https://*.facebook.com/ajax/*
// @exclude        https://*.facebook.com/plugins/*

// @exclude        http://apps.facebook.com/*
// @exclude        http://*.facebook.com/apps/*

// @exclude        https://apps.facebook.com/*
// @exclude        https://*.facebook.com/apps/*
// ==/UserScript==

(function(d){

    const DEBUG = true;

    const script_id = 49338;
    const script_version = '2.0.4';

    /* replaced elements class name */
    const gm_class = ' gm_smileys_replaced';

    /* smileys */
    var smiley = {
        ':-)'   : '1px',       ':)'   : '1px',
        ':-('   : '-16px',     ':('   : '-16px',
        ':-P'   : '-31px',     ':P'   : '-31px',    ':-p'   : '-31px',      ':p '   : '-31px',
        ':-D'   : '-47px',     ':D'   : '-47px',    //'xD'    : '-47px',
        ':-O'   : '-64px',     ':O '  : '-64px',    ':-o'   : '-64px',      ':o '   : '-64px',
        ';-)'   : '-79px',     ';)'   : '-79px',
        '8-)'   : '-96px',     ' 8)'  : '-96px',
        '8-\|'  : '-111px',    '8\|'  : '-111px',
        '>:-('  : '-128px',    '>:('  : '-128px',
        ':-/'   : '-143px',    ':/'  : '-143px',
        ':\'('  : '-160px',    ':´('  : '-160px',   ':,('   : '-160px',
        '3:-)'  : '-176px',    '3:)'  : '-176px',   ']:->'  : '-176px',
        'O:-)'  : '-192px',    'O:)'  : '-192px',   ' o:-)' : '-192px',     ' o:)'  : '-192px',
        ':-*'   : '-208px',    ':*'   : '-208px',
        '<3'    : '-224px',    '♥'    : '-224px',   '*IN LOVE*' : '-224px',
        '^_^'   : '-240px',    '^^'   : '-240px',
        '-_-'   : '-256px',
        'o.O'   : '-272px',    'O.o'  : '-272px',   'o.o'   : '-272px',
        '>:-O'  : '-288px',    '>:o'  : '-288px',
        ':v'    : '-304px',
        ' :3'   : '-320px',

        ':putnam:' : 'putnam',
        '<(")'     : 'penguin', '<(\'\')' : 'penguin',
        '(^^^)'    : 'shark',
        ':|]'      : 'robot',
        ':42:'     : '42',
    };


    /* RexExp all smileys */
    var smileys_all = new Array();

    for (smile in smiley) {
        smileys_all.push(smile.replace(/[\)\(\^\*\.\:\|]/g, '\\$&').replace(/\u0000/g, '\\0'));
    }

    const smileys_regex = new RegExp(smileys_all.join("|"), 'g');

    delete smileys_all;

    /* Log function */
    function log(text)
    {
        if (DEBUG === true && typeof GM_log === 'function' && text != null) {
            GM_log(text);
        }
        return false;
    }


    function g(id, parent)
    {
        if(id && typeof id === 'string') {
            var p = parent||d;
            id = p.querySelectorAll(id);
        }
        return id||null;
    }


    function replace(elements)
    {
        var count =  elements.length;

        if (count <= 0 || count == d.getElementsByClassName('gm_smileys_replaced').length) return false;

        var el, class_name, data, matches, childs, child, childValue, smile, smile_orig, alt, html, replace_img;

        for(i = 0; i < count; i++) {
            el = elements[i];

            class_name = el.className;

            /* is replaced? */
            if (!el
                || class_name.indexOf(gm_class) >= 0
                || class_name.indexOf('uiStreamPassive') >= 0
                || class_name.indexOf('GenericStory_Report') >= 0
            ) {
                continue;
            }

            /* add class */
            el.className += gm_class;

            data = el.innerHTML;
            /* replace tags */
            data = data.replace('&gt;', '>', 'g').replace('&lt;', '<', 'g');

            /* check smileys */
            matches = data.match(smileys_regex);
            data = null;
            if (!matches) continue;

            childs = el.childNodes;

            for(var k = 0; k < childs.length; k++) {

                child = childs[k];

                /* only text nodes */
                if (child.nodeName != '#text') continue;

                /* get value */
                data = child.nodeValue;

                var replacements = new Array();

                /* create node */
                html = d.createElement('span');

                for(j = 0; j < matches.length; j++) {
                    smile = matches[j];

                    if (data.indexOf(smile) >= 0) {

                        smile_orig = smile;

                        alt = smile_orig;
                        alt = alt.replace('"', '&quot;');
                        alt = alt.replace('♥', '&lt;3');

                        if (smiley[smile_orig].substr(-2) == 'px') {

                            replace_img = '<img class="emote_img gm_smiley smiley"'
                                        + ' src="https://s-static.ak.fbcdn.net/images/blank.gif"'
                                        + ' style="background-position: ' + smiley[smile_orig] + ' 0px;"'
                                        + ' title="' + alt + '" alt="' + alt + '">';

                            /* special smileys */
                            if (smile == ':-D' || smile == ':D' || smile == 'xD') {smile = new RegExp('[:|x]-?D+', 'gi');}
                            else if (smile == ':-)' || smile == ':)') {smile = new RegExp(':-?[\)]+', '');}
                            else if (smile == ';-)' || smile == ';)') {smile = new RegExp(';-?[\)]+', 'g');}
                            else if (smile == ':-(' || smile == ':(') {smile = new RegExp(':-?[\(]+', '');}
                            else if (smile == ':/') {smile = new RegExp(':-?[\/]+[ \z]?', 'g');}
                            else if (new RegExp('^:-?O').test(smile)) { smile = new RegExp('[ \s]?:-?O[\s\z]?', 'gi'); }

                            data = data.replace(smile, '%' + j + '%', 'gi');
                            replacements[j] = replace_img;

                        } else {
                            /* extra smileys */
                            data = data.replace(smile_orig, '%' + j + '%', 'gi');
                            replacements[j] = '<img class="gm_smiley"'
                                            + ' src="https://s-static.ak.fbcdn.net/images/emote/' + smiley[smile_orig] + '.gif"'
                                            + ' title="' + alt + '" alt="' + alt + '"> ';
                        }
                    }
                }

                /* replace tags back */
                data = data.replace('>', '&gt;', 'g').replace('<', '&lt;', 'g');

                /* replace smileys */
                for(r = 0; r < replacements.length; r++) {
                    data = data.replace(new RegExp('%' + r + '%', 'g'), replacements[r]);
                }
                replacements = null;

                html.innerHTML = data;
                el.replaceChild(html, child);

                /* Data reset */
                data = null;
            }
        }

        delete elements, count, el, class_name, matches, childs, child, childValue, smile, data, alt, html, replace_img, replacements;
        return false;
    }


    function lookForSmileys()
    {
        /* get location (after #) */
        var loc = location.hash;

        if (loc.length == 0 || !new RegExp('#!/|sk=|ref=|php').test(loc)) {
            /* get pathname (after /) */
            loc = location.pathname.replace(new RegExp('^[/]+', ''), '');

            /* if not pathname get search (after ?) */
            if (loc.length == 0) loc = location.search;
        }

        if (loc == 'ai.php') return;

        /* photo */
        if (new RegExp('photo.php').test(loc)) {
            replace(g('div.photocaption_text, div.commentContent>span'), content);
        } else
        /* photos with comments */
        if (new RegExp('photo_comments.php').test(loc)) {
            replace(g('.walltext, div.commentContent', content));
        } else
        /* messages */
        if (new RegExp('sk=messages&tid=|/inbox/|sk=sent&tid=').test(loc)) {
            replace(g('div.GBThreadMessageRow_Body_Content', d.getElementsByClassName('div.message_pane')[0]));
        } else
        /* notes */
        if (new RegExp('note.php').test(loc)) {
            replace(g('div.notesBlogText, div.commentContent>span', d.getElementById('contentArea')));
        } else {
            /* statuses */
            replace(g('span.messageBody, .UIStory_Message, div.commentContent>span', content));
        }

        delete loc;

        /* create promo box */
        if (!d.getElementById('pagelet_replacesmileysbox')) {

            if (!d.getElementById('home_stream')) return false;

            if (col = d.getElementById('rightCol')) {

                var html;

                html = '<div class="UIImageBlock mbs phs clearfix">'
                     + '<img alt="" style="background-position: -112px 0px;" src="https://s-static.ak.fbcdn.net/images/blank.gif" class="emote_img UIImageBlock_Image smiley">'
                     + '<div class="UIImageBlock_Content UIImageBlock_ICON_Content">'
                     + '<div class="fcb"><b>Replace smileys</b> <small>v' + script_version + '</small></div>'
                     + '<div class="fsm fwn fcg">'
                     + '<a href="#" id="open-list">List of smileys</a>'
                     + ' &middot; <a href="/pages/Replace-smileys-userscript/155692691129314">Become a Fan</a>'
                     + '</div>'
                     + '</div>'
                     + '</div>';

                var box = document.createElement('div');
                box.setAttribute('id', 'pagelet_replacesmileysbox');
                box.innerHTML = html;
                col.appendChild(box);

                d.getElementById('open-list').addEventListener('click', openWindow, false);

                delete col, html, box;
            }

        } else {
            d.getElementById('open-list').addEventListener('click', openWindow, false);
        }

        return false;
    }


    function openWindow(e)
    {
        e.preventDefault();
    	return window.open('http://userscripts.kub4jz.cz/smileys/', null, 'width=450,height=450,left=25,scrollbars=yes', true);
    }


    function addStyle(css)
    {
    	if (typeof GM_addStyle !== 'undefined') { return GM_addStyle(css); }
    	else if (head = d.getElementsByTagName('head')[0]) {
    		var style = d.createElement('style');
    		try { style.innerHTML = css; }
    		catch(x) { style.innerText = css; }
    		style.type = 'text/css';
    		head.appendChild(style);
    	}

        delete head, style, css;

        return false;
    }


    function cssStyles()
    {
        /* box */
        addStyle(
         ' img.emote_img {}'
        +' img.gm_smiley {margin: 0 1px;position: relative;top: -1px;vertical-align: top;}'
        +' img.gm_smiley.smiley {background-image: url(https://s-static.ak.fbcdn.net/images/emote/emote.gif);background-repeat: no-repeat;background-attachment: scroll;}'
        +' #pagelet_replacesmileysbox {line-height: 1.3em;margin: 15px 0;}'
        +' #pagelet_replacesmileysbox img.UIImageBlock_Image {margin-top: 2px;}'
        );

        return false;
    }

    /* Start script */
    var content = d.getElementById('content');

    cssStyles();
    lookForSmileys();

    if (content) {
        setTimeout(function () {
            var t;
            content.addEventListener("DOMNodeInserted", function () {clearTimeout(t); t = setTimeout(lookForSmileys, 100);}, false);
            /* photos */
            document.getElementById('fbPhotoTheaterUfi').addEventListener("DOMSubtreeModified", function () {clearTimeout(t); t = setTimeout(replace(g('div.fbPhotoCaption, div.commentContent>span'), d), 100);}, false);
        }, 2000);
    }

    /* AutoUpdater */
    if (typeof autoUpdate === 'function') {
        autoUpdate (script_id, script_version);
    }

    return false;
})(document);
