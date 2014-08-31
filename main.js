var piece;
var canvasId = 'myCanvas';

function init()
{
	var canvas = document.getElementById(canvasId);
	piece = new Dollars(canvas);
	//if no parent, we are not in an iframe so we handle resizing ourselves
	if (!window.parent || window.parent.onResize==null)
	{
		window.onresize = function() { onWindowResize(); };
		window.onorientationchange = function() { onWindowResize(); };
	}	
	//
	onWindowResize();
	//
	piece.start();
}

var viewSize;
function onWindowResize()
{
	setSize(window.innerWidth, window.innerHeight);
}
function setSize(w,h)
{
	//can also be called from parent window
	var canvas = document.getElementById(canvasId);
	//canvas.width = w;
	//canvas.height = h;
	var s = window.devicePixelRatio;
	if (isNaN(s) || s==0) s = 1;
	canvas.getContext('2d').scale(s,s);
	canvas.width = w*s;
	canvas.height = h*s;
	if (!Device.desktop)
	{
		canvas.width = Math.min(2046, canvas.width);
		canvas.height = Math.min(2046, canvas.height);
	}
	canvas.style.width = w+"px";
	canvas.style.height = h+"px";
	if (piece) piece.setSize(w,h);
}

function log()
{
	if (window.console && window.console.log) window.console.log(arguments);
	if (document.getElementById("output")) 
	{
		var str = "";
		for (var i=0;i<arguments.length;i++) 
		{
			if (i>0) str += ", ";
			str += arguments[i];
		}
		//document.getElementById("output").innerHTML = str + "<br/>" + document.getElementById("output").innerHTML;
		document.getElementById("output").innerHTML = str;
	}
}