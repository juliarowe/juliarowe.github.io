//for each elem in ball array create a ball
//must be able to distinguish those balls from eachother (title / name)


//TODO:
//Bounce ball - fix
//multiple balls
//so like check overlap
//also listeners
//clear balls
//expand ball
function ball() {
	
	//VARIABLES
	var contentWidth;
	var contentHeight
	var width;
	var height;
	var top;
	var left;
	var minTop;
	var minLeft;
	var maxTop;
	var maxLeft;
	var xDir;
	var yDir;
	var speed
	var dx;
	var dy;

	//FUNCTION DECLARATIONS
	this.updateUI = updateUI;
	//this.getLocation = getLocation;

	//FUNCTION DEFINITIONS
	function construct() 
	{
		init();
		updateUI();
		setListeners();
		renderBall();
		moveBall();
	}

	function init()
	{
		contentWidth = $('#content').width();
		contentHeight = $('#content').height();
		
		width = wWidth/8;
		height = wWidth/8;
		
		minTop = 0;
		minLeft = 0;
		maxLeft = contentWidth - width;
		maxTop = contentHeight - height;
		
		left = Math.random() * maxLeft;
		top = Math.random() * maxTop;

		xDir = Math.random() * 2 - 1;
		yDir = Math.random() * 2 - 1;
		speed = (Math.floor(Math.random() * 6) + 3) * 5;
		
		dx = xDir * speed;
		dy = yDir * speed; 

	}


	function updateUI() 
	{
		$('.ball').css({'width':width, 'height':height});
		//$('.ball_text').css({'font-size':(height / 4), 
		//					 'top':(height / 2 + height / 8)})
	}

	function setListeners()
	{
		$('.ball').on('click', function() {
			expandBall();
			
		});
	}

	function renderBall()
	{
		$('.ball').css({'left':left, 'top':top});		
	}

	function moveBall()
	{
		ballTimer = setInterval(function() {
			left = left + dx;
			top = top + dy;
			checkLocation();
			$('.ball').animate({'left':left, 'top':top}, 500, 'linear');
		}, 500)
	}

	function checkLocation()
	{
		if (left <= minLeft || left >= maxLeft || top <= minTop || top >= maxTop)
			bounceBall();

		//could also check over lap here
	}

	function bounceBall() 
	{
		if (left <= minLeft) {
			dx = -dx;
			left = minLeft;
		} else if (left >= maxLeft) {
			dx = -dx;
			left = maxLeft;
		}
		if (top <= minTop) {
			dy = -dy;
			top = minTop;
		} else if (top >= maxTop) {
			dy = -dy;
			top = maxTop;
		}
	}
	//TODO: base animation time on distance
	function expandBall()
	{
		clearInterval(ballTimer);

		var x = Math.pow(left, 2);
		var y = Math.pow(top, 2);
		var distance = Math.sqrt(x + y);

		//TODO: might change these once we get the real balls
		$('.ball').animate({'top':'-4px', 'left':'0px','border':'0px', 
						   'opacity':'0.5', 'font-size':'32px'}, 
						   {duration:(2 * distance), easing:'linear', 
						   queue:false});
	}

	//CONSTRUCT
	construct();


}