//////////////////////////////////////////////////////////////////////////////
//	social.js															    //
//	creates social media icon list from array of object specified in 		//
//	global.js																//
//  																		//
//	Julia Rowe																//
//	12/8/2015																//
//////////////////////////////////////////////////////////////////////////////

function socialList()
{
	function construct() 
	{
		generateContent();
	}

	function generateContent()
	{
		var social_content = '';
		
		for (var i in socialItems) {
			social_content += "<li class = 'social-list-item'> <a href ="
						   + socialItems[i].URL
						   + "> <img class = 'social-icon' src = 'icons/"
						   + socialItems[i].name
						   + ".svg'> </a> </li>";
		}
	
		$('#social-nav').append(social_content);
	}

	construct();
}