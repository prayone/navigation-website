var sort="/rs/event_category";
var operate = '';
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
    var data={
        name:name,
        u_id:u_id
    }
    if(operate=='edit'){
    	// 修改
		operate = '';//重置
        var sortId = $('#bulid-sort-modal').attr('c_id');
       zhput(sort+"/"+sortId,data).then(function (rs) {
       	 	if(rs.info){
                clearForm();
                showSort();
            }else if(rs.err){
                alert(rs.err)
            }
       })
	}else{
    	//新增
        zhpost(sort,data).then(function (rs) {
        	if(rs.info){
                clearForm();
                showSort();
			}else if(rs.err){
        		alert(rs.err)
			}
        });
	}
}
function clearForm() {
    $("#bulid-sort-modal").modal('hide');
    $("#sort-mc").val("");
}



