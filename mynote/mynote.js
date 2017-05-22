$(function(){
	var base_category = '/rs/v_category_link';

	//获取用户名并渲染
	var username=localStorage.getItem("username");
	if(!username){
		location.href='../index.html'
	}
	$(".myinfo").html(username);
	zhget(base_category+'?id=1').then(function (rs) {
		if(rs){
            buildTableNoPage(rs,'category_temp','category_list');
        }else if(rs.err){
			alert(rs.err)
		}else {
        	alert('请求出错')
		}
    })
});