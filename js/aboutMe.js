//ABOUT ME

//TODO:
//add scroll spy functionality
//write actual content
//find backgrounds


$('body').ready(function()
{
	updateUI();
	setListeners();
});


function setListeners()
{
	$('.nav-item').on('click', function() 
	{
		var target = '#' + $(this).data('target');
		var scrollDest = $(target).position().top;
		$('body').animate({scrollTop:scrollDest}, 100);
	});

	$(window).scroll(function()
	{
		var scrollContent = $.find('.about-me-section');
		var scrollNav = $.find('.nav-item');
		var scrolledAbove = scrollContent.map(function(elem)
			{
				var fromTop = $(this).scrollTop()+96;
    			if ($(elem).offset().top < fromTop)
    				return elem;	
			});
		
		var cur;
		for (var i in scrolledAbove){
			if (scrolledAbove[i] != undefined)
				cur = scrolledAbove[i];
		};

	    var curNav = '#' + $(cur).data('par');

	    if (!$(curNav).hasClass('active')) {
	    	scrollNav.map(function(elem)
	    	{
	    		if ($(elem).hasClass('active'))
	    			$(elem).removeClass('active');
	   				$(elem).children().map(function(el, item) 
	    			{
	    				$(item).removeClass('active');
	    			});

	    	});
	    	$(curNav).addClass('active');
	    	$(curNav).children().map(function(el, item) 
	   		{
	   			$(item).addClass('active');
	   		});
	    }
	});
}

function updateUI()
{
	var text_arr = $('.menu-pic-txt');
	var len = text_arr.length
	var img_height = $('.menu-pic').height();

	for (var i = 0; i < len; i++) {
		var text_height = $($('.menu-pic-txt')[i]).height();
		var text_top = (img_height - text_height) / 2;
		$($('.menu-pic-txt')[i]).css({'top':(text_top + 'px')});
	}
}