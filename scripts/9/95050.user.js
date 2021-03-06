// ==UserScript==
// @name           Filmweb - IMDB search
// @description    Dodaje link do wyszukiwania danego filmu w IMDB, takze usuwa okienko do facebooka po prawej.
// @version			3.0
// @namespace      http://userscripts.org/users/27225
// @include        http://www.filmweb.pl/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js
// ==/UserScript==

//Remove facebook
var $connectToFBorGoogle = $('.findMoreFriends.importFriendsBox');
if($connectToFBorGoogle.length > 0)
	$connectToFBorGoogle.html(""); //remove the contents of the connect to facebook or google element.

//remove discussion section - uncomment the below three lines in order to remove the comments sections.
// var $dyskusja = $("#filmForum");
// if($dyskusja.length > 0)
	// $dyskusja.remove();

var imdbIcon = "data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVCgsVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRULCxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFwsMFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXDAwaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoMDhsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGw4OGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbDg8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8PDx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHw8PHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fDxAhIQcAACECAAcHACEAABMCAAAAAAYhBwABAgADISEQECEhBwAAIQIABwIAEwAAEwIAAAEAABsHAAAEAAATIRARISEHAAAhAgAHAgAUAAAUAgACFAAAFAcAABQAABQhEREhIQgAACECAAgAAAgAABQCAAIUAAAUCAAAFAAAFCERESMjCAAAIwIACAAACAAAFAIAAhQAABQIAAAUAAAUIxESIyMIAAAjAgACAAECAAAYAgACGAAAGAgAABgAABgjEhYjIwgAACMCAAIAAgIAABgCAAIYAAAYCAAAGAAAGCMWFiQkCAAAJAIAAAANAAAAGAIAAhgAABgIAAAAAAAiJBYWJSUJAAAlAgAAAB0AAAAdAgABAwAAIQkAACEJHSUlFhYlJQkAACUCAAACJQAAAB0CAAAAAAUlCQAAJSUlJSUWFiYmJB0dJiIdHSImHR0dJiIdHR0kJiYkHR0mJiYmJhYZJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmGRkmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYZGScnJycnJycnJycnJycnJycnJycnJycnJycnJycnJxkZJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnGRwnJycnJycnJycnJycnJycnJycnJycnJycnJycnJyccHicnJycnJycnJycnJycnJycnJycnJycnJycnJycnJx4eKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoHiAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCggICgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAADAAAABgAAAAAQAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBQYAAgwOAAINDgAFGh8ABRsgAAUcIAAFHCEABR0hAAUeIgAIKDAACC00AAw6RgAMQUsADkZTAA5HVAAOSFUADktXAA5MWAAOT1sAEVRlABFVZgARVmYAEVdnABFYZwARWGgAEVlpABFaaQARW2oAEVxqABFcawARXWwAEV5sABFfbQARYG4AFG1+ABBxmAAQcpkAEHSbABB1nAAQdp0AEHeeABB4nwAXfZEAEHqgABB7oQAQfKIAEH2jABeBlAAQf6QAGoGaABCApQAQgaYAEIKnABCDqAAQhKgAGoefABCGqgAQh6sAEIisABCJrQAQiq4AEIyvABCNsAAdjqkAHY6qABCOsQAdkKwAEJCyABCRswAdkq0AEJK1AB2TrgAQk7UAHZSvABCUtgAdla8AIpK4ABCVtwAdl7EAIpS6ABCXtwAemLIAIpW7ABCYuAAembMAEJm6ACKXvAAem7QAIpi9ABCbuwAenLQAEJy8ACKavgAgnLsAEJ2+AB6etgAQnr4AIJ28AB6ftwAinMAAEJ+/AB6guAAincEAEKDAAB6huQAin8IAEKLAACChvwAeo7kAIqDDABCjwQAQpMMAIqLEABClxAAio8UAEKfFACKlxwAQqMYAEKnHACKnyAAQqsgAIqjJACKpygAiq8wAIq3NACKuzgAhscsAIrDPACKx0AAhs8wAIrPSACO00wAjttQAI7jVACK51AAjudYAI7vYACO82QAjvtoAI7/bACPB3AAjwt0AI8TfACPG4AAjx+EAI8njACPK5AAjzOUAI83mACPP5wAj0OgAI9LqACPT6wAj1ewAI9ftACPY7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQlTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSUmUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUCYnU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTUycoV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXVygpWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWSkqXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXSosZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZCwtZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZy0uampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqai4vbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubi8xcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcTEzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzczM0dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dTQ1eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eDU2enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6QF56enp6ejY3e3t7QQAAAAR7FAAAAHsUAAB7FAAAAHsAAAAAAAAACmJ7FAAAAA4BAAAMe3t7ezc5fHx8QwAAAAR8FQAAAHwEAABDFQAAAHwAAAAAAAAAAAB8FQAAAAAAAAAAMnx8fDk6fX19RgAAAAR9FgAAAH0EAABGFgAAAH0AAAAAAgAAAABsFgAAAA8PAAAAFn19fTo7fn5+SAAAAAV+FwAAAH4AAAAXFwAAAH4AAAAAfgIAAABIFwAAABcXAAAAF35+fjs8gICASgAAAAWAGAAAAIAAAAAQGAAAAIAAAAAAgAUAAABKGAAAABgYAAAAGICAgDw9gYGBTAAAAAWBGQAAAEwAAAAFGQAAAIEAAAAAgQUAAABMGQAAABkZAAAAGYGBgT0+g4ODTwAAAAWDGgAAADgAAAACGgAAAIMAAAAAgwUAAABPGgAAABoaAAAAGoODgz4/hISEUgAAAAaEGwAAABsAAAAAGwAAAIQAAAAAhAYAAABSGwAAABsbAAAAG4SEhD9ChYWFVQAAAAaFHAAAABEAAQAAEQAAAIUAAAAAhQYAAABVHAAAABwcAAAAHIWFhUJEhoaGWAAAAAeGHQAAAAcABwAABwAAAIYAAAAAhgcAAABYHQAAAB0dAAAAHYaGhkRFiIiIWwAAAAeIHgAAAAIAHgcAAgAAAIgAAAAAiAcAAABbHgAAABISAAAAHoiIiEVHiYmJYAAAAAiJHwAAAAAAKw0AAAAAAIkAAAAAiQgAAABgHwAAAAAAAAAAI4mJiUdJioqKYwAAAAiKIAAAAAAAYyAAAAAAAIoAAAAAigEAAABjIAAAAAsBAAADioqKiklLi4uLZgAAAAiLIQAAAAAAi2YAAAAAAIsAAAAAAAAAAACLIQAAACGLZn+Li4uLi0tOjIyMaQAAAAiMIQAAAAABjIcAAAAAAIwAAAAAAAAAACGMIQAAACGMjIyMjIyMjE5RjY2NggkJCRONMAkJCQkTjY0JCQkJCY0JCQkJCQkibY2NMAkJCTCNjY2NjY2NjVFUjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjlRWj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj1ZakJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkFpckZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkVxfkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkl9hk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk2FllJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlGVolZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlWhrlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlmtvl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl29wmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmHBymZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmXJ0mpqampqampqampqampqampqampqampqampqampqampqampqampqampqampqamnR2m5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm3Z3nJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnHd5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";

//This is a actor's page
if(String(document.location).search('/person/') != -1){
	var personName = getPersonName();
	var birthDate = getBirthDate();
	var deathDate = getDeathDate();
	var url = 'http://www.imdb.com/search/name?birth_date='+birthDate+'&death_date='+deathDate+'&name='+personName;
}
else{ //this is a film page
	var title = getTitle();
	var filmYear = getFilmYear(); //old
	var url = 'http://www.imdb.com/find?s=all&q='+title+' ('+filmYear+')';
}

var imdbDiv = document.createElement('div');
imdbDiv.setAttribute('class','commonToggleBox');

//Search link html contents
var searchLinkHTML = '<h2 class="sideNag">'
	+'<h3>&nbsp;&nbsp;&nbsp;<img src="'+imdbIcon+'" />&nbsp;&nbsp;IMDB</h3>'
	+'</h2>'
	+'<p class="msgContent toggleContentInfoBox"><a href="'+url+'" target="_blank">Wyszukaj w IMDB</a></p></div>';


//Put the imdb search link in the container where the connect to facebook or google element was.
if($connectToFBorGoogle > 0)
{
	$connectToFBorGoogle.html(searchLinkHTML);
}
else if($("#personUserActivityContainer").length > 0){
	$("#personUserActivityContainer").after('<div class="commonToggleBox">'+searchLinkHTML+'</div>');
}
else if($(".sideBox.friendsList").length > 0)
{
	$(".sideBox.friendsList").after('<div class="commonToggleBox">'+searchLinkHTML+'</div>');
}

	  
//get movie/person title/name
function getTitle(){
	
	var $orgTitle = $('.filmTitle').find(".text-large.caption");
	var docTitle = document.title;
	if($orgTitle.length > 0){// there is an original title
		var orgTitleText = $orgTitle.text()
		return orgTitleText;
	}
	if(docTitle.indexOf('(') != -1)
		var title = docTitle.substring(0 , docTitle.indexOf('('));
	title = title.replace(", The","");
	title = title.replace(", Il","");
	return title;
}

function getFilmYear(){
	var docTitle = document.title;
	if(docTitle.indexOf("(") == -1)
		return "";
	var yearStr = docTitle.substring(docTitle.indexOf('(') + 1, docTitle.indexOf(')'));
	return yearStr;
}

function getPersonName(){
	var findPattern = "//a[@property='v:name']";
	var linkResults= document.evaluate( findPattern, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null );	
	if(linkResults.snapshotLength > 0)
		return linkResults.snapshotItem(0).getAttribute('title');
}

function getBirthDate(){
	var html = document.body.innerHTML;
	var indexStr1 = '<dt>data urodzenia:</dt><dd>';
	if(html.indexOf(indexStr1) == -1)
		return "";
	var index1 = html.indexOf(indexStr1) + indexStr1.length;
	var index2 = html.indexOf('<script',index1);
	var date = html.substring(index1, index2);
	return date+','+date;
}

function getDeathDate(){
	var html = document.body.innerHTML;
	var indexStr1 = '<dt>data śmierci:</dt><dd>';
	if(html.indexOf(indexStr1) == -1)
		return "";
	var index1 = html.indexOf(indexStr1) + indexStr1.length;
	var index2 = html.indexOf('<script',index1);
	var date = html.substring(index1, index2);
	return date+','+date;
}