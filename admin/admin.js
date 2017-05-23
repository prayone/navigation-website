var show="/rs/v_category_link";
var sort="/rs/event_category";
var sqlink="/rs/event_link"
var u_id=getCookie("u_id");
var operate = '';
var flag='';
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



// -----------------------------------------------------------------
// 我的书签：创建链接
var u_id=getCookie("u_id");
function addNote() {
    var name=$("#mingcheng").val();
    var link=$("#wangzhi").val();
    var c_id=$("#add-modal").attr("bindId");
    var intro=$("#textarea").val();
    var data={
        name:name,
        link:link,
        c_id:c_id,
        intro:intro
    }
    if(flag=='edit'){
        // 修改
       flag = '';//重置
        var noteid=$("#add-modal").attr("n_id");
        var data1={
            name:name,
            link:link,
            intro:intro
        }
        zhput(sqlink+"/"+noteid,data1).then(function (rs) {
            if(rs.info){
                clearForm();
                showSort();
            }else if(rs.err){
                alert(rs.err)
            }
        })
    }else{
        //新增
        zhpost(sqlink,data).then(function (rs) {
            if(rs){
                clearForm();
                c_id='';
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
    $("#add-modal").modal('hide');
    $("#wangzhi").val("");
    $("#mingcheng").val("");
    $("#textarea").val("");

}



