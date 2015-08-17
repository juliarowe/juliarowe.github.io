//TODO:
// main
// UImain
// content controller:
//	-content obj
//	-getContent
// nav bar:
// 	-listeners
// 	-replace content
// main menu:
//	-replace content
//	-listeners
// page menu:
// 	-image menu (make this more transparent)
//	-text menu (?)
// ball object
//  -render ball
//	-text/ image /shape
//	-listeners
// ball controller
// 	-move ball
// 	-overlap handling -- what to do?
//  -expanding
// about me
// research
// photography
// graphic deisgn
// contact	

$('body').ready(function(){

	updateUI();
	setListeners();
	ball();
});

//$(window).resize(ball());

$( window ).resize(function() {
  console.log('resized');
});

function updateUI()
{
	var menu_width = $('#header_title').width();
	$('#menu_list .menu_item').css('width', menu_width - 90);

	ball();
	//var content_width = $('#content').width();
	//$('#content img').width(content_width - 80);
}

function setListeners() 
{
	$('.menu_icon').on('click', function(e) {
		$('#menu_list').toggleClass('disp_off');
		$('#menu_list').toggleClass('disp_on');

		$('#menu_but').toggleClass('disp_on');
		$('#menu_but').toggleClass('disp_off');

		$('#menu_close').toggleClass('disp_off');
		$('#menu_close').toggleClass('disp_on');

		$('#menu').toggleClass('menu_hidden');
		$('#menu').toggleClass('menu_shown');
	});
}

