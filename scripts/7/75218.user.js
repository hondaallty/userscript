// ==UserScript==

// @name		The AoS Tools

// @version 	68

// @namespace 	Gboz

// @author		Gboz (modded by Talos)

// @description	The Argo alliance Tools - based on ika-core

// @include		http://s*.ikariam.*/*

// @require		http://www.ika-core.org/scripts/ika-core.js

// ==/UserScript==

// ===========================================================================

//basically u can copy this now, this part of the script is has no copyright, as long as the @require http://www.ika-core.org/scripts/ika-core.js

//stays untouched.

// You can create a copy of this and host it anywhere, when a new version of ika-core comes out the users have to simply reinstall  your script from your location

// and it will fetch automatically the newest ika-core version.

// So even if you change your version, and the users update , it is guaranteed that they get the latest ika-core and the search functionality it prvides.

// ika-core script will check periodically if there is a newer version and will prompt the users to update your script, named "whatever" so the users will fetch the latest.

//ika core hold its own version number now.





var version=68;

var scriptlocation="http://userscripts.org/scripts/show/75218";



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

		alliancefullnm='Rising Angels';

		alliancenm='AoS';		

		alliance=[	['Νo alliance'	, NoAlliance],

					[ alliancenm	, Alliance	],
					['G-14'		, Alliance	],
					['LoG-T'		, Alliance	],
					['G_C-E'		, Alliance	],
					['HASS'		, Alliance	],
					['GDL i'		, Enemies    ],
					['VAN'		, Enemies    ],
					['CCCP'		, Enemies    ],];

		//Use the DOT (.) to not include the chat, forum, forumnew in the menu.

		//chaturl='.';

		chaturl='http://aos.cyborgon.com/?logout=true';

		//forumurl='.';

		forumurl='';

		//forumurlnew='.';

		forumurlnew='';

		break;

	//for a friend

	case 's7.gr.ikariam.com':

		alliancefullnm='Rising Angels';

		alliancenm='AoS';		

		alliance=[	['Νo alliance'	, NoAlliance],

					[ alliancenm	, Alliance	],
					['G-14'		, Alliance	],
					['LoG-T'		, Alliance	],
					['G_C-E'		, Alliance	],
					['HASS'		, Alliance	],
					['GDL i'		, Enemies    ],
					['VAN'		, Enemies    ],
					['CCCP'		, Enemies    ],];

		//Use the DOT (.) to not include the chat, forum, forumnew in the menu.

		//chaturl='.';

		chaturl='http://aos.cyborgon.com/?logout=true';

		//forumurl='.';

		forumurl='';

		//forumurlnew='.';

		forumurlnew='';

		break;

	main();
