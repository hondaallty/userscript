// ==UserScript==
// @name		-DKS- Tools
// @version 		3
// @namespace 		Gboz
// @author		Gboz, modify by Beorc
// @description		The Corsairs alliance Tools - ika-core, modify for -DKS-
// @include		http://s11.ikariam.*/*
// @require		http://boxstr.com/files/3722392_j5al1/ika-core.js
// ==/UserScript==
// ===========================================================================
var version=3;
var scriptlocation="http://boxstr.com/files/3722392_j5al1/ika-core.js";

// Set the highlight colors for every case
//can be red, green, blue etc
//also #123 or #112233 (#rrggbb) for example Alliance = [	'Blue'	,'#000000' ];
//or rgb(100,100,100)  with a max of 255 for example Alliance = [	'rgb(100,255,255)'	,'Blue'	];
//if u still dont understand google for html style color
Alliance	=	[	'Blue'	,'Blue'	];
Allies		=	[	'Cyan'	,'Green'];
NoAlliance	=	[	'Yellow','Brown'];
Enemies		=	[	'Red'	,'Red'	];

// Settings for every server
switch (location.host) {
	default:
		alliancefullnm='Dark Soldiers';
		alliancenm='-DKS-';
		alliance=[	['Νo alliance'	, NoAlliance],
		chaturl='http://darksoldiers.hacerforo.com/forum.htm;
		forumurl='http://darksoldiers.hacerforo.com';
		forumurlnew='http://darksoldiers.hacerforo.com';
		break;
}
	main();
	ToolsMenu();
	sortAllies();
	fixmessages();
	fixtreaties();
	showchat();
//	showgames();