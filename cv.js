$(".title").on("mouseover",function(){
	$(this).css({"background":"#273c9c","color":"white"});
});
$(".title").on("mouseout",function(){
	$(this).css({"background":"#f7f5f5","color":"#273c9c"});
});
$(".name").on("mouseover",function(){
	$(this).css({"background":"#e8e6e6", "box-shadow":"1px 1px 30px lightgray"});
});

$(".name").on("mouseout",function(){
	$(this).css({"background":"#f7f5f5", "box-shadow":"none"});
});

$(".email").on("mouseover",function(){
	$(this).css({"background":"#e8e6e6", "box-shadow":"1px 1px 30px lightgray"});
});

$(".email").on("mouseout",function(){
	$(this).css({"background":"#f7f5f5", "box-shadow":"none"});
});

$("h3,h4,h5").on("mouseenter",function(){
	$(this).css({"font-size":Number($(this).css("font-size").slice(0,2))+2 + "px", "box-shadow":"1px 1px 500px lightgray"});
});

$("h3,h4,h5").on("mouseout",function(){
	$(this).css({"font-size":Number($(this).css("font-size").slice(0,2))-2 + "px","box-shadow":"none"});
});