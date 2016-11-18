//ABOUT ME

//TODO:
//add scroll spy functionality
//write actual content
//find backgrounds


class aboutMe {

	get loadPage() {
		var html = pages.aboutMe.html;
		$('#content')[0].innerHTML = html;
		this.setListeners();
		this.updateUI();
	}

	setListeners() {
		$('.about-me-nav-item').on('click', function() {
			var target = '#' + $(this).data('target');
			var scrollDest = $(target).position().top + 20;
			$('body').animate({scrollTop:scrollDest}, 100);
		});

		$(window).scroll(function() {
			var scrollContent = $.find('.about-me-section');
			var scrollNav = $.find('.about-me-nav-item');
			var scrolledAbove = scrollContent.map(function(elem) {
					var fromTop = $(window).scrollTop() + 169;
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

		$(window).resize(function() {
			var content_height = $('#about-me-content').height() + $('#about-me-content').offset().top - $('#content').css('padding-top').replace('px', '');
			$('#content').css({height:content_height});
		});
	}

	updateUI() {
		var text_arr = $('.about-me-menu-pic-txt');
		var len = text_arr.length
		var img_height = $('.about-me-menu-pic').height();

		for (var i = 0; i < len; i++) {
			var text_height = $($('.about-me-menu-pic-txt')[i]).height();
			var text_top = (img_height - text_height) / 2;
			$($('.about-me-menu-pic-txt')[i]).css({'top':(text_top + 'px')});
		}

		var content_height = $('#about-me-content').height() + $('#about-me-content').offset().top - $('#content').css('padding-top').replace('px', '');
		$('#content').css({height:content_height});
	}
}
