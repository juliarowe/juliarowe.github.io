//////////////////////////////////////////////////////////////////////////////
//	menu.js																    //
//	creates menu from array specified in global.js and handles listeners	//
//	associated with those menu items										//
//  																		//
//	Julia Rowe																//
//	12/8/2015																//
//////////////////////////////////////////////////////////////////////////////

function menu() 
{
	function construct()
	{
		generateContent();
		setListeners();
	}

	function generateContent()
	{
		var menu_content = '';

		for (var i in menuItems) {
			menu_content += "<li class = 'menu-item'>" 
						 + menuItems[i].toUpperCase() 
						 + "</li>";
		}

		$('#menu-list').append(menu_content);
	}

	function setListeners()
	{
		$('.menu-icon').on('click', function(e) {
			$('#menu-list, #menu-but, #menu-close').toggleClass('disp_off');
			$('#menu-list, #menu-but, #menu-close').toggleClass('disp_on');

			$('#menu').toggleClass('menu-hidden');
			$('#menu').toggleClass('menu-shown');
		});

//		$('.menu-item').on('click', //TODO: load that content)
	}

	construct();
}