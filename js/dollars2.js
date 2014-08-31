if (!window.lib) { window.lib = {}; }

var p; // shortcut to reference prototypes

// stage content:



// symbols:
(lib.Stack = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.topbill("single",0);
	this.instance.setTransform(60.3,41.9,0.5,0.5);

	this.instance_1 = new lib.pack("single",0);
	this.instance_1.setTransform(60.4,41.9,0.5,0.499);

	this.instance_2 = new lib.pack("single",0);
	this.instance_2.setTransform(60.4,68.9,0.5,0.499);

	this.instance_3 = new lib.pack("single",0);
	this.instance_3.setTransform(60.4,95.9,0.5,0.499);

	this.instance_4 = new lib.pack("single",0);
	this.instance_4.setTransform(60.4,122.9,0.5,0.499);

	this.instance_5 = new lib.pack("single",0);
	this.instance_5.setTransform(60.4,149.9,0.5,0.499);

	this.instance_6 = new lib.pack("single",0);
	this.instance_6.setTransform(60.4,176.9,0.5,0.499);

	this.instance_7 = new lib.pack("single",0);
	this.instance_7.setTransform(60.4,203.9,0.5,0.499);

	this.instance_8 = new lib.pack("single",0);
	this.instance_8.setTransform(60.4,230.9,0.5,0.499);

	this.instance_9 = new lib.pack("single",0);
	this.instance_9.setTransform(60.3,257.9,0.5,0.499);

	this.instance_10 = new lib.pack("single",0);
	this.instance_10.setTransform(60.4,284.9,0.5,0.499);

	this.instance_11 = new lib.pack("single",0);
	this.instance_11.setTransform(60.4,311.9,0.5,0.499);

	this.instance_12 = new lib.pack("single",0);
	this.instance_12.setTransform(60.3,338.9,0.5,0.499);

	this.instance_13 = new lib.pack("single",0);
	this.instance_13.setTransform(60.4,365.9,0.5,0.499);

	this.instance_14 = new lib.pack("single",0);
	this.instance_14.setTransform(60.4,392.9,0.5,0.499);

	this.addChild(this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,123,435.9);


(lib.topbill = function() {
	this.initialize();

	// Layer 2
	this.shape = new Shape();
	this.shape.graphics.f().s("#000000").ss(0.8,1,1,3).p("AAKAKQgpANgqAA").p("ABJgWQgUATAUgU");
	this.shape.setTransform(11.2,-73.6);

	// Layer 3
	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#cc6635").p("AL5iXIh7AAIvDAAIh5AAIkID+IB6AAIPCAAIB6AAIEJj+").f("#8be666").p("AF2BnIvCAAImHF7QApAAAPAOQAQAOgVATIL2AAQAUgTArgOQArgOApAAIAHABIGGl8").p("AApEzQg5A3iUAoQiTAniXAAQiYAAhCgnQgggTgDgZQgCgYAcgbQA5g4CTgoQCUgnCXAAQCYAABCAnQBCAog5A4").p("AAgDTQhCgniYAAQiXAAiUAnQiTAog5A4QgcAbACAYQADAZAgATQBCAnCYAAQCXAACTgnQCUgoA5g3QA5g4hCgo").p("Ah4E6QgcAXgoAQQguASgrABQgaAAgKgHQgKgHAKgKQAKgIATgHQAUgGASAAQARAAAHAEQAIAFgHAHIgLAHQAQgEAPgIQAZgKATgOIiYAAQhJAfgnAMQgnALglAAQg0AAgPgRQgMgOATgXIgYAAIARgRIAZAAQAZgUAjgOQAsgSAmAAQAWAAAIAHQAJAHgJAJQgJAJgTAGQgRAHgRAAQgRAAgHgEQgGgFAHgHIAPgJQgPADgNAGQgSAIgSAPICLAAIAFgCQBKghAmgKQAmgMAoAAQA5AAAOASQANAPgUAYIAyAAIgRARIgyAA").p("AiPEbQgJgKgcABQgWgBgbAJIgoAPIB/AAQAFgIgGgG").p("AniFNQAUABAagJIAigLIhyAAQgDAGAEAFQAIAJAZgB").p("AAQniIlVFLIPDAAIFVlLIgIAAQgpABgPgOQgPgNAUgUIr2AAQgUAUgrANQgqAOgpgB").p("AKrlMQg4A1iOAkQiPAliSAAQiSAAg/glQgegRgEgXQgCgXAbgaQA3g0CPgmQCNgkCTAAQCSAABAAkQBBAmg4A0").p("AKimmQhAgkiSAAQiTAAiNAkQiPAmg3A0QgbAaACAXQAEAXAeARQA/AlCSAAQCSAACPglQCOgkA4g1QA4g0hBgm").p("AGtkqIgKAGQAMgCATgHQAYgLASgNIiUAAQhFAdgmALQglALglgBQgzABgOgQQgMgOAUgVIgZAAIARgQIAZAAQAZgTAggNQAqgQAlAAQAVAAAJAGQAIAHgIAIQgKAJgRAFQgRAGgRAAQgRAAgGgEQgGgDAHgHIAOgIQgPADgLAEQgTAIgRAOICGAAIAGgDQBEgcApgMQAkgKAnAAQA2AAAPAQQAMAPgUAWIAxAAIgQAQIgxAAQgbAXgmAOQgsASgqgBQgZABgKgHQgLgGALgKQAJgIASgGQASgFAUgBQAPABAIAEQAHAEgHAG").p("AGmljIgnAOIB7AAQAEgHgFgHQgIgHgcgBQgUABgbAH").p("ACxkzQATABAagIIAggLIhtAAQgDAFAEAGQAHAIAYgB").f("#000000").p("AhGE6IARgRIgyAAQAUgYgNgPQgOgSg5AAQgoAAgmAMQgmAKhKAhIgFACIiLAAQASgPASgIQANgGAPgDIgPAJQgHAHAGAFQAHAEARAAQARAAARgHQATgGAJgJQAJgJgJgHQgIgHgWAAQgmAAgsASQgjAOgZAUIgZAAIgRARIAYAAQgTAXAMAOQAPARA0AAQAlAAAngLQAngMBJgfICYAAQgTAOgZAKQgPAIgQAEIALgHQAHgHgIgFQgHgEgRAAQgSAAgUAGQgTAHgKAIQgKAKAKAHQAKAHAaAAQArgBAugSQAogQAcgXIAyAA").p("AiOEpIh/AAIAogPQAbgJAWABQAcgBAJAKQAGAGgFAI").p("AoDFFQgEgFADgGIByAAIgiALQgaAJgUgBQgZABgIgJ").p("AGtk0QgIgEgPgBQgUABgSAFQgSAGgJAIQgLAKALAGQAKAHAZgBQAqABAsgSQAmgOAbgXIAxAAIAQgQIgxAAQAUgWgMgPQgPgQg2AAQgnAAgkAKQgpAMhEAcIgGADIiGAAQARgOATgIQALgEAPgDIgOAIQgHAHAGADQAGAEARAAQARAAARgGQARgFAKgJQAIgIgIgHQgJgGgVAAQglAAgqAQQggANgZATIgZAAIgRAQIAZAAQgUAVAMAOQAOAQAzgBQAlABAlgLQAmgLBFgdICUAAQgSANgYALQgTAHgMACIAKgGQAHgGgHgE").p("AHVlrQAcABAIAHQAFAHgEAHIh7AAIAngOQAbgHAUgB").p("ACSk6QgEgGADgFIBtAAIggALQgaAIgTgBQgYABgHgI").f().s("#000000").ss(0.8,1,1,3).p("ABjnvQgqAOAqgOQArgNAUgUIL2AAQgUAUAPANQAPAOApgBIAIAAIlVFLIB7AA").p("AHwBnIh6AAImGF8IgHgBQgpAAgrAOQgrAOgUATIr2AAQAVgTgQgOQgPgOgpAAIGHl7Ih6AAIEIj+IB5AAIFVlL").p("AlEiXIgBAA").p("ApMBnIPCAA").p("AAgDTQBCAog5A4Qg5A3iUAoQiTAniXAAQiYAAhCgnQgggTgDgZQgCgYAcgbQA5g4CTgoQCUgnCXAAQCYAABCAn").cp().p("AKimlQBBAlg4A0Qg4A1iOAkQiPAliSAAQiSAAg/glQgegRgEgXQgCgXAbgaQA3g0CPgmQCNgkCTAAQCSAABAAk").cp();
	this.shape_1.setTransform(2.3,-23.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-95.6,-75.9,195.9,105.7);


(lib.pack = function() {
	this.initialize();

	// Layer 3
	this.shape = new Shape();
	this.shape.graphics.f("#cc6635").p("AL4mJIy0AAIkID/IS0AAIABAAIEJj/IgCAA").f("#6abd42").p("AL6mJIAAAqIGimUIAxgwIguAAIgDADImkGXIACAA").p("AL7kEIGlmZIAugrIguAAImmGZIABAr").p("AL6kvIGmmZIAtgrIgxAAImiGUIAAAw").p("AHwiKIoIH4IyGAAIguAtIAxAAISDAAIIJn5IAAgsIgBAA").p("AHxheIoJH5IyDAAIgxAwIAtAAISHAAIIJn5IAAgw").p("AL7itIGlmZIAugrIguAAImlGYIAAAs").p("AL7iCIGlmYIAtgrIgtgBImlGZIAAAr").p("AL8hXIGkmYIAugrIguAAImlGYIABAr").p("AL8gsIGkmXIAtgrIgtgBImkGYIAAAr").p("AL7jZIGlmYIAtgrIgtgBImlGZIAAAr").p("ASisnIAsgqIy1AAInVHIIS0AAIGkmXIAGgH").p("ASglsImkGXIAAArIHSnBIgugB").p("ATOmXIgtAAImlGXIAAArIGkmXIAugr").p("ATOnDIguAAImkGXIAAAsIGlmXIAtgs").p("AHyCqIoKH7IyIgBIgsAsIAtAAISHAAIIKn7IAAgr").p("AHxgDIoJH6IyIgBIgsAsIAtAAISHAAIIJn6IAAgr").p("AHxAoIoJH6IyHAAIgtAsIAsgBISIABIIKn6IgBgs").p("AHyBUIoKH6IyIgBIgsAsIAtAAISHAAIIKn7IAAgq").p("AHyB+IoKH7IyHAAIgtAsIAsgBISIABIIKn7IAAgs").p("AHyEBIoKH7IyIgBIgsAsIAtAAISHAAIIKn6IAAgs").p("AHyEtIoKH6IyHAAIgtArIS0AAIIKn6IAAgr").p("AHyDVIoKH7IyHAAIgtAsIAsgBISIABIIKn7IAAgs").p("AHxguIoJH5IyHAAIgtAsIAsgBISIABIIJn6IAAgr").p("AyeFuISGAAIIIn4Iy0AAIoIH4IAuAA").f("#993300").p("AL6kvIAAgwIAAgqIkJD/IAAAsIAAAwIAAArIAAArIABAsIAAAqIAAAsIAAArIAAAsIAAAsIAAArIAAAdIEKj/IAAggIAAgrIAAgrIAAgsIAAgrIgBgrIAAgrIAAgsIAAgrIgBgr").f().s("#000000").ss(0.8,1,1,3).p("ASismIgDADIAuAAIgxAwIAxAAIgtArIAuAAIguArIAtABIgtArIAuAAIguArIAtABIgtArIAuAAIguArIAtABIgtArIAuAAIgtAsIAtAAIguArIAuABInSHBIAAAgIkKD/IAAgdIoKH6Iy0AAIAtgrIgtAAIAsgsIgsABIAtgsIgtAAIAsgsIgsABIAtgsIgtAAIAsgsIgsABIAtgsIgtAAIAsgsIgsABIAtgsIgtAAIAxgwIgxAAIAugtIguAAIIIn4IEIj/IHVnIIS1AAIgsAq").cp().p("AL6mJIgCAAIy0AA").p("ArEiKIS0AAIABAAIEJj/").p("AL6mJIAAAqIGimU").p("ASfsjIgDADImkGX").p("AL6kvIABArIGlmZ").p("ASgrIImmGZ").p("AL6kvIAAgw").p("AHxiKIAAAsIAAAwIAAArIAAArIABAsIAAAqIAAAsIAAArIAAAsIAAAsIAAAr").p("AL8BWIAAgrIAAgrIAAgsIAAgrIgBgrIAAgrIAAgsIAAgr").p("AHwiKIoIH4IyGAA").p("AybGbISDAAIIJn5").p("AyfHLISHAAIIJn5").p("AL7itIGlmZ").p("ASgpxImlGY").p("AL7iCIGlmY").p("AL8hWIGkmZ").p("AL8grIGkmY").p("ASglsImkGX").p("AShmXImlGX").p("AHyCqIoKH7IyIgB").p("AyfLQISHAAIIKn7").p("AHxgDIoJH6IyIgB").p("AyfIiISHAAIIJn6").p("AyfJNISHABIIKn6").p("AyfJ5ISHAAIIKn7").p("AHyEBIoKH7IyIgB").p("AyfMnISHAAIIKn6");
	this.shape.setTransform(2.3,1.1);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-120.6,-83.8,245.9,170);