$(function(){
	// 已有账户关闭注册模态框
	$("#tiao").click(function(){
		$("#zhuce-modal").modal('hide');
	});
	//面板的小箭头图标
	$("#arrowdown").on("click",function(){
		if($(this).hasClass("fa-chevron-down")){
			$(this).removeClass("fa-chevron-down");
			$(this).addClass("fa-chevron-left");
		}else{
			$(this).addClass("fa-chevron-down");
			$(this).removeClass("fa-chevron-left");
		}
	});
		// 校验登录
		// getList();
		$("#sign-in").on("click",getList);//还有
		$(".password").on('keyup',function(e){
			if(e.keyCode === 13){
			getList()
			  }
		    });
		function getList(){
			$.getJSON("js/conf.js",function (result){
				var username=$(".username").val();
				var password=$(".password").val();
				if(username==""||password==""){
					alert("用户名或者密码不能为空！")
					return;
				}
				if(username==result.username&password==result.password){
					console.log("登陆成功！")
					localStorage.setItem('username',username)
					window.location.href="./mynote/mynote.html?username="+username;
					//这块跳不过去
				}else{
					alert("密码或者登录名错误！")
				}
			});
		};
		setTimeout(function(){
			$.getJSON("js/data.js",function(data){
				console.log(data.username)
				alert(data.username)
				// for(var i in data.result){
				// 	console.log(i)
				// 	var title=i.title;
				// 	$("#sort-title").html(title);
				// }
			});
		},2000)
		
});