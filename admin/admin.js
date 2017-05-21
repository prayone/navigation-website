var sort="/rs/event_category";
$(function () {
	var username = localStorage.getItem('username');
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
// 我的书签：创建分类
var u_id=getCookie("u_id");
function addSort() {
    var name=$("#sort-mc").val();
    debugger
    var data={
        name:name,
        u_id:u_id
    }
    zhpost(sort,data).then(function (rs) {
        console.log(rs);
    });
}