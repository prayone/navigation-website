var webCof = {
	"baidu_so":'https://www.baidu.com/s?wd=',
	"taobao_so":'https://s.taobao.com/search?q=',
	"jd_so":'http://search.jd.com/Search?enc=utf-8&keyword=',
	"zhihu_so":"https://www.zhihu.com/search?q=",
	"douban_so":"https://www.douban.com/search?q=",
	"weibo_so":"http://s.weibo.com/",
	"wechat_so":"http://weixin.sogou.com/",
	"github_so":"https://github.com/search?q=",
	"shipin_so":"http://www.soku.com/search_video/?q=",
	"yinyue_so":"http://music.hao123.com/search?key=",
	"wangpan_so":"http://www.panc.cc/"
	}
$(".search_web").on("click",searchWeb);//还有
$(".bdsug").on('keyup',function(e){
    if(e.keyCode === 13){
        searchWeb();
    }
});
function searchWeb(){
	var keyWord = $('.bdSug').val();
	var key = $('.myTab li.active').find('a').attr('dataurl');
	location.href = webCof[key]+keyWord;
}
function addqita(info){
	var txt=$(info).text();
	var dataurl=$(info).attr("dataurl");
	$(".other_so").text(txt).attr("dataurl",dataurl);
    $(".myTab li").removeClass("active");
    $(".other_so").parent().addClass("active");
}
