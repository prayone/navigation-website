$(function(){
	var base_login = '/op/login';
	var base_register="/op/register";

	// 已有账户关闭注册模态框
	$("#tiao").click(function(){
		$("#zhuce-modal").modal('hide');
	});
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

		// 校验登录
		// getList();
		$("#sign-in").on("click",getList);//还有
		$(".password").on('keyup',function(e){
			if(e.keyCode === 13){
			getList()
			  }
		    });
		function getList(){
			// 登陆接口'/op/login'
            var username=$(".username").val();
            var password=$(".password").val();
            if(username==""||password==""){
                alert("用户名或者密码不能为空！")
                return
            }
            var data = {
                username:username,
                password:password
            }
			zhpost(base_login,data).then(function(rs){
                if(rs.info){
                    console.log("登陆成功！")
                    localStorage.setItem('username',username)
                    setCookie('sid',rs.sid)
                    setCookie('u_id',rs.userid);
                    window.location.href="./mynote/mynote.html";
                }else if(rs.err){
                    alert(rs.err)
                }
			})
		};
	//注册
    $("#register").on("click", getRegister);
    $("#pw2").on('keyup',function(e){
        if(e.keyCode === 13){
            getRegister()
        }
    });
	function getRegister () {
		var username = $('#zhuce-up').val()
		var password = $('#pw1').val()
		var PWD = $('#pw2').val()
		if(password!=PWD){
			alert('两次输入密码不一致')
			return
		}
        if(username==""||password==""){
            alert("用户名或者密码不能为空！")
            return;
        }
        var data = {
            username:username,
            password:password
        }
        zhpost(base_register,data).then(function (rs) {
            if(rs.info){
                alert("注册成功！")
                location.href = 'index.html'
            }else{
                alert(rs.err)
                $('#zhuce-up').val("");

            }
        });

    };
		
});
var iewmsrc="http://pan.baidu.com/share/qrcode?w=150&h=150&url=";
function indexewm(info) {
    $("#indexewm-modal").modal();
    $("#ewm-modal").modal();
    $(".ewmtitle").html($(info).siblings(0).html());
    $(".lianjie").html($(info).siblings(0).attr("href"))
    var iimglink=$(info).siblings(0).attr("href");
    $(".ewmimg").attr("src",iewmsrc+iimglink)
}