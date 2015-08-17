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
			social_content += "<li class = 'social_list_item'> <a href ="
						   + socialItems[i].URL
						   + "> <img class = 'social_icon' src = 'icons/"
						   + socialItems[i].name
						   + ".svg'> </a> </li>";
		}
	
		$('#social_nav').append(social_content);
	}

	construct();
}