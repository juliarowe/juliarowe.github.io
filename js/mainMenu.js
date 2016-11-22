//////////////////////////////////////////////////////////////////////////////
//	main_menu.js														    //
//	creates main media list from array of object specified in 		        //
//	global.js																//
//  																		//
//	Julia Rowe																//
//	25/11/2015																//
//////////////////////////////////////////////////////////////////////////////

class mainMenu {
	get generateContent() {
		var content="<div id='main-menu'><ul class='main-menu'>";
		
		for (var i in menuItems) {
			content += "<li class='main-menu-item' data-item='"
			   	+ menuItems[i].replace(' ', '') 
				+ "'> <img class='main-menu-pic' src='images/"
				+ menuItems[i].replace(' ', '_') 
				+ ".jpg'> <div class = 'overlay'></div><p class='main-menu-text'>"
				+ menuItems[i].toUpperCase() 
				+ "</p> </a> </li>";
		}
		content += "</ul></div>";

    $('#content')[0].innerHTML = content;
		this.setListeners();
		this.updateUI();
	}

	setListeners() {
		$('.main-menu-item').click(function() {
			var target = $(this).data('item');
			
			if (target == 'contact') {
				$(location).attr('href', 'mailto:juliabrowe@gmail.com');
			} else if (target == 'resume') {
				window.open('pages/resume.pdf');
			} else {
				$('#menu').removeClass('hidden');
				funcObj[target].loadPage;
			}
		});
	}

	updateUI() {
		var text_arr = $('.main-menu-text');
		var len = text_arr.length;
		var img_height = $('.main-menu-pic').height();

		for (var i = 0; i < len; i++) {
			var text_height = $($('.main-menu-text')[i]).height();
			var text_top = (img_height - text_height) / 2;
			if (i == 0)
				text_top = 81.5;
			$($('.main-menu-text')[i]).css({'top':(text_top + 'px')});
		}

		$('#content').css({height:''});
		$('#menu').addClass('hidden');
	}
}
