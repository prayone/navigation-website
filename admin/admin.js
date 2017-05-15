$(function () {
	var username = localStorage.getItem('username')
	//防止非法进入
	if(!username){
		location.href='../index.html'
	}
	$.get("system.html",function(data){
		$(".infoBox").html(data);
	});
	$(".sortlist").on("click","li",function(){
		$(this).addClass("bg").siblings().removeClass("bg");
		var $this=$(this);
		var _target=$this.attr("target");
			$.get(_target,function(data){
				$(".infoBox").html(data);
			});
	});
});
