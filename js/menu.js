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
			menu_content += "<li class = 'menu_item'>" 
						 + menuItems[i].toUpperCase() 
						 + "</li>";
		}

		$('#menu_list').append(menu_content);
	}

	function setListeners()
	{
		$('.menu_icon').on('click', function(e) {
			$('#menu_list, #menu_but, #menu_close').toggleClass('disp_off');
			$('#menu_list, #menu_but, #menu_close').toggleClass('disp_on');

			$('#menu').toggleClass('menu_hidden');
			$('#menu').toggleClass('menu_shown');
		});

//		$('.menu_item').on('click', //TODO: load that content)
	}

	construct();
}