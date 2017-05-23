$(function(){
	var base_category = '/rs/v_category_link';
    var u_id=getCookie("u_id");
    //获取用户名并渲染
	var username=localStorage.getItem("username");
	if(!username){
		location.href='../index.html'
	}
	$(".myinfo").html(username);
	zhget(base_category+'?id='+u_id).then(function (rs) {
		if(rs){
            buildTableNoPage(rs,'category_temp','category_list');
            //面板的小箭头图标
            $(".arrowdown").on("click",function(){
                if($(this).hasClass("fa-chevron-down")){
                    $(this).removeClass("fa-chevron-down");
                    $(this).addClass("fa-chevron-left");
                }else{
                    $(this).addClass("fa-chevron-down");
                    $(this).removeClass("fa-chevron-left");
                }
            });

        }else if(rs.err){
			alert(rs.err)
		}else {
        	alert('请求出错')
		}
    })

});
var ewmsrc="http://pan.baidu.com/share/qrcode?w=150&h=150&url=";
function erweima(info) {
    $("#ewm-modal").modal();
	$(".ewmtitle").html($(info).siblings(0).html());
	$(".lianjie").html($(info).siblings(0).attr("href"))
	var imglink=$(info).siblings(0).attr("href");
	$(".ewmimg").attr("src",ewmsrc+imglink)
}