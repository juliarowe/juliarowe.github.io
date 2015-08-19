//ABOUT ME


function aboutMe() 
{

	//VARIABLES
	var content;
	var menu;
	var aboutMeItems = ['North Carolina', 'Durham Academy', 'Tufts University', 
						'Travel'];

	//FUNCTION DECLARATIONS
	this.showAboutMe = showAboutMe;

	//FUNCTION DEFINITIONS
	function construct()
	{
		createMenu();
		generateContent();
	}

	function createMenu()
	{
		menu = "<div class= 'scrollspy-nav'><ul class = 'content-nav'";

		for (var i in aboutMeItems) {
			menu += "<li class='content-nav-item'> <a href='scroll-item-'" + i +"<img class = 'aboutMe-menu-pic' src='images/" + aboutMeItems[i] + ".png'><span class='about-me-text-content'><span>"+ aboutMeItems[i].toUpperCase() +"</span></span></a></li>";
		}

		menu += '</ul></div>';
	}


}