(function(window) {
	var Dollars = function(canvas) {
		this.initialize(canvas);
	}
	var p = Dollars.prototype = new BasePiece();
	//
	p.shape;
	//
	p.initialize = function(canvas) 
	{
		BasePiece.prototype.initialize.apply(this, [canvas, Config]);
		//SoundController.init([{id:"sounds/rain",loop:true},{id:"sounds/birds",loop:true},{id:"sounds/thunder"}]);
		document.body.style.backgroundColor = Config.bgColor;
		//
		var v = Config.verticalSpacing;
		//first create non-moving bg row of stacks
		this.stacksBG = [];
		for (var i=0;i<Config.gridWidth;i++)
		{
			var stack = new Stack(i,0,-1);
			this.addChild(stack);
			this.stacksBG.push(stack);
		}
		//
		this.stacks = [];
		this.movesPerLayer = [];		
		for (var z=0;z<Config.gridHeight;z++)
		{
			var moves = [];
			for (var x=0;x<Config.gridWidth;x++)
			{
				var y = z*v + Math.floor(Math.random()*v);
				var stack = new Stack(x,y,z);
				this.addChild(stack);
				var idx = this.stacks.length;
				for (var k=0;k<y;k++) moves.push(idx);
				this.stacks.push(stack);
			}
			this.movesPerLayer[z] = ArrayUtil.shuffle(moves);
		}
		this.sort();
		this.layerIndex = 0;
		//this.paused = true;
	}	
	
	p.sort = function()
	{
		this.sortChildren(function(a,b) { return a.index-b.index;});
	}
	
	p.setSize = function(w,h)
	{
		//this.canvas.width = w;
		//this.canvas.height = h;
		//no borders: fit viewport in 4:3
		//use canvas.width because this is corrected for devicepixelratio
		var scale = Math.max(this.canvas.width/800, this.canvas.height/600);
		for (var i=0;i<this.stacksBG.length;i++) this.stacksBG[i].setScale(scale);
		for (var i=0;i<this.stacks.length;i++) this.stacks[i].setScale(scale);
	}	
	
	p.relayer = function(z)
	{
		var n = Config.gridHeight * Config.verticalSpacing;
		var moves = [];
		for (var i=0;i<Config.gridWidth;i++)
		{
			var idx = i + z * Config.gridWidth;
			var stack = this.stacks[idx];
			stack.setZ(stack.gz+Config.gridHeight);
			stack.setY(n);
			for (var k=0;k<n;k++) moves.push(idx);
		}
		this.movesPerLayer[z] = ArrayUtil.shuffle(moves);
		this.sort();
	}
	
	p.update = function()
	{
		if (this.tickCount%1==0)
		{
			this.layerIndex = (this.layerIndex+1) % Config.gridHeight;
			var pool = this.movesPerLayer[this.layerIndex];
			var idx = pool.pop();
			var stack = this.stacks[idx];
			stack.rise();
			if (pool.length==0) this.relayer(this.layerIndex);
			return true;
		}
	}
	
	window.Dollars = Dollars;
}(window));

