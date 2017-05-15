$(function(){
	//获取用户名并渲染
	var username=localStorage.getItem("username");
	if(!username){
		location.href='../index.html'
	}
	$(".myinfo").html(username);
});