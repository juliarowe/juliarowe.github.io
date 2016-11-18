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
	function construct() {
		generateContent();
		setListeners();
	}

	function generateContent() {
		var menu_content='';

		for (var i in menuItems) {
			menu_content += "<li class='menu-item' data-target='" 
						 + menuItems[i].replace(' ', '_') + "''>" 
						 + menuItems[i].toUpperCase() 
						 + "</li>";
		}

		$('#menu-list').append(menu_content);
	}

	function setListeners() {
		$('.menu-icon').on('click', toggleMenu);

		$('.menu-item').on('click', function() {
			//clear the balls
			loadContent($(this).data('target'));
			toggleMenu();
		});
	}

	function loadContent(target) {
		if (target == 'resume') {
			//open resumme in new window
		}

		//load that page
		else {
			var page = 'pages/' + target + '.html';
			$('#frame').attr({'src':page});
		}
	}

	function toggleMenu() {
		//$('#menu-list, #menu-but, #menu-close').toggleClass('disp_off');
		//$('#menu-list, #menu-but, #menu-close').toggleClass('disp_on');

		$('#menu-list').toggleClass('disp_off');
		$('#menu-list').toggleClass('disp_on');

		//$('#menu').toggleClass('menu-hidden');
		//$('#menu').toggleClass('menu-shown');
	}

	construct();
}
