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
		setListeners();
	}

	function generateContent()
	{
		var social_content="<ul class='social-list'>";
		
		for (var i in socialItems) {
			social_content += "<li class='social-list-item'> <a href ="
						   + socialItems[i].URL
						   + "> <img class='social-icon' src='icons/"
						   + socialItems[i].name
						   + ".svg'> </a> </li>";
		}
		social_content += "</ul>";
		$('#social-nav').append(social_content);
	}

	function setListeners() 
	{ 
		$('.social-list-item').hover(function() 
		{
			$('.social-list-item').css({ opacity: 0.6 });
			$(this).css({ opacity: 1 });
		}, function() 
		{
			$('.social-list-item').css({ opacity: 1 });
		});
	}

	construct();
}