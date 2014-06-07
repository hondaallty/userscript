// ==UserScript==
// @name          Summize Favicon Restore
// @description   Replaces the Twitter Search favicon with the original Summize one, making it easier to tell search pages from those on the main Twitter domain.
// @version       1.0
// @author        Marjolein Hoekstra @CleverClogs
// @namespace     http://userscripts.org/users/26533
// @include       http://search.twitter.com/*

// ==/UserScript==

var header = document.getElementsByTagName('head')[0];
var linkelem = document.createElement('link');
linkelem.setAttribute('type', 'image/x-icon');
linkelem.setAttribute('rel', 'shortcut icon');
linkelem.setAttribute('href', 'data:image/x-icon;base64,AAABAAEAEBAAAAEAGABoAwAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAQAMAAMQOAADEDgAAAAAAAAAAAAA1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPJsf/aksPq9xvvN1Py3wfuJmfg5U/I1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPKxu/v+/v/Y3v3U2v3+/v/////X3P07VfI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPJhdvVHYPM1UPI1UPJMZPT4+f////+Onfg1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPLh5f7///+qtvo1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPJAWvO2wPv///////93ivc1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPJwhPbu8P////////+0vvs7VfI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI2UfKdqvn////////6+/+Hl/g1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPJpffb////////N0/xOZvQ1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPKmsvr////T2f03UfI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPKPnvj////n6/5KY/M2UfJYbvR8j/c1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI8VvLa3/3////////29//////r7f81UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI5U/KCk/ens/qmsvqMnPhsgfY1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPI1UPIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
header.appendChild(linkelem);