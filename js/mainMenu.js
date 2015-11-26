//////////////////////////////////////////////////////////////////////////////
//	main_menu.js														    //
//	creates main media list from array of object specified in 		        //
//	global.js																//
//  																		//
//	Julia Rowe																//
//	25/11/2015																//
//////////////////////////////////////////////////////////////////////////////

function mainMenu()
{
	function construct() 
	{
		generateContent();
		//setListeners();
		updateUI();
	}

	function generateContent()
	{
		var content="<div id='main-menu'><ul class='main-menu'>";
		
		for (var i in menuItems) {
			content += "<li class='main-menu-item'> <a href=pages/"
					+ menuItems[i].replace(' ', '_') 
				    + ".html> <img class='main-menu-pic' src='images/"
				    + menuItems[i].replace(' ', '_') 
					+ ".jpg'> <div class = 'overlay'></div><p class='main-menu-text'>"
					+ menuItems[i].toUpperCase() 
					+ "</p> </a> </li>";
		}
		content += "</ul></div>";

		$('#content').append(content);
	}

	function setListeners() 
	{ 
		$('.main-menu-item').hover(function() 
		{
			$('.main-menu-item').css({ opacity: 0.6 });
			$(this).css({ opacity: 1 });
		}, function() 
		{
			$('.main-menu-item').css({ opacity: 1 });
		});
	}

	function updateUI()
	{
		var text_arr = $('.main-menu-text');
		var len = text_arr.length
		var img_height = $('.main-menu-pic').height();

		for (var i = 0; i < len; i++) {
			var text_height = $($('.main-menu-text')[i]).height();
			var text_top = (img_height - text_height) / 2;
			$($('.main-menu-text')[i]).css({'top':(text_top + 'px')});
		}
	}

	construct();
}