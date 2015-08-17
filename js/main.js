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
	
	readyFunction();
	updateUI();
	setListeners();
});

function updateUI()
{
	var menu_width = $('#header-title').width();
	$('#menu-list .menu-item').css('width', menu_width - 90);

	//var content_width = $('#content').width();
	//$('#content img').width(content_width - 80);
}

function setListeners() 
{

	$( window ).resize(function() 
	{
		wWidth = $(window).width();
		wHeight = $(window).height();
		if (wWidth < 550) wWidth = 550;
		funcObj['ball'].updateUI();
	});

}

function readyFunction()
{
	funcObj['menu'] = new menu();
	funcObj['social'] = new socialList();
	
	setTimeout(function() {
		funcObj['ball'] = new ball();
	}, 0);
}
