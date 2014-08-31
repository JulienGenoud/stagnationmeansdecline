var ArrayUtil = {};

ArrayUtil.shuffle = function(array)
{
	var res = [];
	while (array.length)
	{
		res.push(array.splice(Math.floor(Math.random()*array.length),1)[0]);
	}
	return res;
}


ArrayUtil.lookup = function(table, x, interpolate)
{
	//'table' should be array of format [x0,y0, x1,y1, x2,y2 ...], with x0,x1,x2 increasing
	if (x<table[0]) return table[1];//x < x0: return y0
	for (var i=0;i<table.length-2;i+=2)
	{
		var xp = table[i];
		var xn = table[i+2];
		if (xp<=x && x<=xn)
		{
			var yp = table[i+1];
			var yn = table[i+3];
			if (interpolate)
			{
				return yp + (yn-yp) * (x-xp)/(xn-xp);
			}
			else
			{
				return table[i+1];//return low y
			}
		}
	}	
	//not found: x must be larger than largest x in table
	return table[table.length-1];//x > xLast: return yLast
}

/**
 * ArrayUtil.max will return first INDEX of greatest numeric value in values
 * To get the max value, just use Math.max
 **/
ArrayUtil.max = function(values)
{
	return values.indexOf( Math.max.apply(null, values) );
}

/**
 * ArrayUtil.sum will return sum of numeric values in values
 **/
ArrayUtil.sum = function(values)
{
	var sum = 0;
	for (var i=0;i<values.length;i++) sum += values[i];
	return sum;
}
/**
 * ArrayUtil.average will return average of numeric values in values
 **/
ArrayUtil.average = function(values)
{
	return values.length ? ArrayUtil.sum(values)/values.length : 0;
}