//ABOUT ME

//TODO:
//render HTML
//JSON object with text 
//Set Listeners
//add scroll spy functionality

function aboutMe() 
{

	//VARIABLES
	var about_content;
	var menu;
	var aboutMeItems = ['North Carolina', 'Durham Academy', 'Tufts University', 
						'Travel'];

	//FUNCTION DECLARATIONS
	this.loadContent = loadContent;

	//FUNCTION DEFINITIONS
	function construct()
	{
		createMenu();
		generateContent();
		loadContent();
		setListeners();
		updateUI();
	}


	function createMenu()
	{
		menu = "<div class='content-menu container-padded'> <ul class='content-nav'>";

		for (var i in aboutMeItems) {
			menu += "<li class='content-nav-item' data-target='" + aboutMeItems[i].replace(' ', '_').toLowerCase() + "'><img class='content-menu-pic' src='images/" + aboutMeItems[i] + ".png'/><div class = 'overlay'></div><p class='content-menu-pic-txt'>"+ aboutMeItems[i].toUpperCase() +"</p></a></li>";
		}
		menu += '</ul></div>';
	}

	function generateContent()
	{
		//create HTML files for each section
		//or could also just have one big one
		
		//for testing
		about_content = "<div id='main-content'>";
		
		for (var i in aboutMeItems) {
			about_content += "<div id='" + aboutMeItems[i].replace(' ', '_').toLowerCase() + "' class='about-me-section'> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium ut nibh vitae congue. In ut urna sit amet diam dapibus molestie vel hendrerit sapien. Nam et velit odio. Sed facilisis, purus ut varius hendrerit, velit ligula lobortis tellus, in porttitor erat nunc eget risus. Nullam facilisis nisl vel leo lacinia elementum. Etiam sit amet justo dolor. Maecenas pellentesque pretium turpis ac dignissim. Vestibulum aliquet dui vehicula felis scelerisque, id tempor quam congue. Aliquam laoreet, felis ac ultricies interdum, sapien est dapibus lacus, ac rutrum ipsum risus ut quam. Sed tortor ligula, vulputate non porttitor nec, scelerisque eget sem. Aenean ac diam vel augue placerat efficitur a eget dui. Integer in dolor quis enim gravida dictum. Nam sit amet quam a nulla lobortis ultrices vitae ut turpis. <br> Nullam sit amet auctor massa. Cras id luctus ipsum, eu dapibus arcu. Donec ac sem volutpat felis cursus placerat ut quis tellus. Aliquam pulvinar, orci ac ultrices rhoncus, mi enim semper elit, nec porta odio lectus ut velit. Integer nisi mi, sollicitudin dignissim maximus at, ultricies sagittis tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam placerat lorem et interdum placerat. Suspendisse et accumsan justo. Quisque feugiat justo felis, ac gravida lectus iaculis ac. <br> Praesent vitae elit efficitur, consectetur tortor sit amet, vulputate sem. In feugiat, ligula non lobortis luctus, ante est pulvinar sem, nec porttitor dolor magna ac velit. Maecenas a purus sed purus tempus auctor. Fusce bibendum dui in lorem pharetra consequat. Fusce porttitor euismod volutpat. Nulla mollis nunc nisi. Vivamus ut sodales ante, vestibulum suscipit augue. Morbi justo dui, molestie sit amet leo non, viverra feugiat metus. Vestibulum eget lectus rhoncus orci placerat aliquam eget vel tortor. Donec vel ex ipsum.<br> Mauris egestas mi elit, id dignissim magna consequat non. Donec sem urna, elementum ac metus id, gravida convallis enim. Nam tortor nunc, viverra et porta vitae, venenatis quis mauris. Maecenas sed eleifend quam. Nam imperdiet imperdiet risus, vitae viverra diam. Nullam at enim facilisis, mattis mauris at, maximus risus. Phasellus sodales urna at tortor fermentum faucibus. Aliquam tempus massa id erat pulvinar, vitae faucibus quam dictum. Cras vestibulum augue ut ipsum tincidunt volutpat. <br> Aliquam porta dolor et arcu sodales, a tristique augue luctus. Phasellus fermentum lacus in auctor tincidunt. Suspendisse massa ipsum, venenatis eu mi et, tempor vehicula purus. Mauris lacinia nunc vitae mi dapibus, ut pharetra libero varius. Suspendisse varius dictum augue, nec pulvinar arcu euismod eget. Duis et sollicitudin eros. Morbi malesuada rhoncus eleifend. Nulla sed commodo massa. Ut sit amet purus tellus. Maecenas vel aliquam orci. Sed vel enim urna. Maecenas finibus, mi id facilisis bibendum, nibh orci facilisis purus, nec imperdiet urna velit nec lectus. Sed a vulputate quam. Vestibulum posuere id eros et tincidunt.</p> </div>";
		}
		about_content += "</div>";
	}

	function setListeners()
	{
		$('.content-nav-item').on('click', function(e) {
			var target = $(this).data('target');
			scrollToTop(target);
		});

		$('#durham_academy').on('click', function() {
			scrollToTop(this);
		});
	}

	function loadContent()
	{
		$('#content').html('')
		$('#content').append(menu + about_content);
		//$('#content').append(content);
	}

	function updateUI()
	{
		var text_arr = $('.content-menu-pic-txt');
		var len = text_arr.length
		var img_height = $('.content-menu-pic').height();

		for (var i = 0; i < len; i++) {
			var text_height = $($('.content-menu-pic-txt')[i]).height();
			var text_top = (img_height - text_height) / 2;
			$($('.content-menu-pic-txt')[i]).css({'top':(text_top + 'px')});
		}
	}

	function scrollToTop(elem) 
	{
		var content_top = $('#main-content').offset().top;
		//var tar_elem = '#' + elem;
		//tar_elem = $(tar_elem)[0]

		$(elem).scrollTop(content_top);
	}

	construct();
}