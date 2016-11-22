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
  setListeners();
});

function readyFunction() {
  new menu();
  new socialList();

  funcObj['home']          = new mainMenu();
  funcObj['aboutMe']       = new aboutMe();
  funcObj['projects']      = new projects();
  // funcObj['graphicDesign'] = new photos();
  // funcObj['photography']   = new photos();

  pages['aboutMe']       = new aboutMePage();
  pages['projects']      = new projectsPage();
  // pages['graphicDesign'] = new photoPage();
  // pages['photography']   = new photoPage();

  funcObj.home.generateContent;
}

function setListeners() {
  $('#header-title').on('click', function() {
    funcObj.home.generateContent;
  });
}
