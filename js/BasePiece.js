(function(window) {
	var BasePiece = function() 
	{
	}
	var p = BasePiece.prototype = new Container();
	p.canvas;
	p.stage;
	p.config;
	p.tickCount = 0;//elapsed ticks
	p.paused = false;
	//
	p.initialize = function(canvas, config) 
	{
		Container.prototype.initialize.apply(this);
		//
		this.config = config;
		this.canvas = canvas;
		this.stage = new Stage(canvas);
		this.stage.addChild(this);
		//
		var that = this;
		window.onkeyup = function(e) { that.onKeyUp(e); };
		//catch/block touch events to prevent def browser behaviour
		if (window.ontouchstart !== undefined)
		{
			canvas.addEventListener( 'touchmove', function(e) { that.onTouchMove(e); });
			canvas.addEventListener( 'touchstart', function(e) { that.onTouchStart(e); });
			canvas.addEventListener( 'touchend', function(e) { that.onTouchEnd(e); });
		}
	}
	
	p.onTouchStart = function(e)
	{
		e.preventDefault();
	}
	p.onTouchEnd = function(e)
	{
		e.preventDefault();
	}
	p.onTouchMove = function(e)
	{
		e.preventDefault();
	}
	
	
	p.onKeyUp = function(e)
	{
		if (!this.config.debug) return;
		var c = String.fromCharCode(e.which);
		if (c=="P") this.paused = !this.paused;
		if (c=="S") 
		{
			if (this.update()) this.stage.update();
		}
	}
	
	p.setSize = function(w,h)
	{
		this.canvas.width = w;
		this.canvas.height = h;
		//
		this.stage.update();
	}
	
	p.start = function()
	{
		Ticker.setFPS(this.config.framerate);
		Ticker.addListener(this);
	}
	
	p.tick = function()
	{
		if (this.paused) return;
		this.tickCount += this.fast ? 12 : 1;
		//
		var b = this.update();
		//
		if (b) this.stage.update();
	}	

	p.update = function()
	{
		return true;
	}
	
	window.BasePiece = BasePiece;
}(window));

