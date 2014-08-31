(function(window) {
	var Stack = function(x,y,z) {
		this.initialize(x,y,z);
	}
	var p = Stack.prototype = new Container();
	//
	p.initialize = function(x,y,z) 
	{
		Container.prototype.initialize.apply(this);
		this.skin = new lib.Stack();
		this.addChild(this.skin);
		this.scale = 1;
		this.gx = x;
		this.setY(y);
		this.setZ(z);
	}
	
	p.setY = function(y)
	{
		this.gy = y;
		this.updatePosition();
	}
	
	p.setZ = function(z)
	{
		this.gz = z;
		this.index = this.gx + this.gz * 100;
	}
	
	p.setScale = function(s)
	{
		this.skin.scaleX = this.skin.scaleY = s;
		this.scale = s;
		this.updatePosition();
		this.cache(0,0,123*s,436*s);
	}
	
	p.updatePosition = function()
	{
		var s = this.scale;
		this.x = -66 * s + this.gx * 62 * s;
		this.y = -60 * s + this.gy * 27 * s;
	}
	
	p.rise = function()
	{
		this.gy -= 1; 
		this.updatePosition();
	}
	
	window.Stack = Stack;
}(window));

