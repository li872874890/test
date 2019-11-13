$(function () {
    banner();
    share();
    inews();
	prophoto();
	irating();
	/*服务领域*/
	jQuery(".floor_4_1 .bd li").first().before( jQuery(".floor_4_1 .bd li").last() );				
	jQuery(".floor_4_1").hover(function(){ jQuery(this).find(".arrow").stop(true,true).fadeIn(300) },function(){ jQuery(this).find(".arrow").fadeOut(300) });				
	jQuery(".floor_4_1").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop", vis:3, autoPage:true, trigger:"click",delayTime:1000});
	/*新闻资讯*/
    jQuery(".layB .slide li").each(function(i){ jQuery(".layB .slide li").slice(i*4,i*4+4).wrapAll("<ul></ul>");});
    jQuery(".layB").slide({titCell:".hd ul",mainCell:".slide",autoPage:true,effect:"leftLoop",autoPlay:true,delayTime:500,interTime:5000});
	/*厂区展示-荣誉资质*/
    jQuery(".floor_6_3 .slideBox").slide({ mainCell:"ul",vis:4,prevCell:".sPrev",nextCell:".sNext",effect:"left",autoPage:true,autoPlay:true,delayTime:500,interTime:5000});
	jQuery(".floor_6_3").slide({titCell:".parHd li",mainCell:".parBd"});
    $(".returnTop2,.returnTop").click(function() {
		$("body, html").stop().animate({
			"scrollTop": 0
		});
	});
	
	$("#hospital").hover(function(){
		$(this).find(".selectList").slideDown();
	},
		function(){
			$(this).find(".selectList").slideUp()
		}
	);
	
	$(".postlist .item").click(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		if($(this).find(".bottom").hasClass("hidden")){
			$(this).find(".bottom").removeClass("hidden").parents(".item").siblings().find(".bottom").addClass("hidden");
		}
		else {
				$(this).find(".bottom").addClass("hidden");
			}
	});
	
	
	if($(".imglist").length){
        $(".imglist").each(function(){
            var _this=$(this);
            imglist(_this);
        });
    };
	$('#toolbar dd').bind({
        'mouseenter': function () {
            if ($(this).children('.slide').length) {
                var _this = $(this).children('.slide');
                _this.stop(true, true).animate({ 'width': 180 }, 200);
            } else if ($(this).children('.pop').length) {
                var _this = $(this).children('.pop');
                _this.show().animate({ 'right': 65 }, 180);
            }
        },
        'mouseleave': function () {
            if ($(this).children('.slide').length) {
                var _this = $(this).children('.slide');
                _this.stop(false, false).animate({ 'width': 0 }, 200);
            } else if ($(this).children('.pop').length) {
                var _this = $(this).children('.pop');
                _this.hide().animate({ 'right': 90 }, 190);
            }
        }
    });
    $("#top").click(function () {
        $("body, html").stop().animate({ "scrollTop": 0 });
    });
	 $('#inews .top h3').click(function(){
	        var index = $(this).index();
	        $(this).addClass("hover").siblings().removeClass("hover");
	        $(this).parents("#inews").find(".bottom .newsBox").eq(index).show().siblings().hide();
	    });
	
	$('#aGent .top h3').click(function(){
	        var index = $(this).index();
	        $(this).addClass("hover").siblings().removeClass("hover");
	        $(this).parents("#aGent").find(".bottom .agentBox").eq(index).show().siblings().hide();
	    });
	
	$("#addFavo").click(function() {
		var fm = $("title").html();
		AddFavorite(fm, location.href, '');
	});
	$("#setHome").click(function(){
        SetHome($('title').html(), location.href, '');
	});	
	
    $(".rightFix .share").hover(function(){
        $(this).find(".box").stop(true,true).slideDown();
    },function(){
        $(this).find(".box").stop(true,true).slideUp();
    });
	
	$(".fix_top").click(function(){	
		$("body, html").stop().animate({"scrollTop":"0px"});
	})
	//设为首页
	$(".setHome").click(function(){
		var hm = window.location.host;
		SetHome(this, location.href);
	});
	
	  //招贤纳士
	$(".postlist .item").click(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		if($(this).find(".bottom").hasClass("hidden")){
			$(this).find(".bottom").removeClass("hidden").parents(".item").siblings().find(".bottom").addClass("hidden");
		}
		else {
				$(this).find(".bottom").addClass("hidden");
			}
	});
});

$(".toolbar_tab").hover(function(){
		$(this).find("em").stop().animate({"left":"-130px"},300)
	},function(){
		$(this).find("em").stop().animate({"left":"60px"},300)
	});

   $("#test").click(function() {
		$("body, html").stop().animate({
			"scrollTop": 0
		});
	});

//prophoto
function prophoto(){
	if(!$("#prophoto").length){ return false;}
	$("#prophoto .listcon").find("a").eq(0).addClass("hover");
	var time=5000, tim=800,speed = 1000,speed2 = 500,n = 0;
    var $simg=$("#prophoto .listcon");
  	var len = $("#prophoto .listcon").find("a").length;
    var len=Math.ceil(len/4);
    var xwid=$("#prophoto .listcon a").width()+7;
	var func = function(index){
		if(n < len-1){
			n++;
		}else{
			n = 0;
		}
        $simg.stop().animate({"margin-left":-n*xwid}, speed2);
	}
	var func2 = function(){
		if(n > 0){
			n--;
           $simg.stop().animate({"margin-left":-n*xwid}, speed2);
		}else{
            $simg.stop().animate({"margin-left":-(len-1)*xwid}, speed2);
			n = len-1;
           
		}
	}
    var func3 = function(index){
        $simg.stop().animate({"margin-left":-index*xwid}, speed2);
        n=index;
	}
	// 绑定按钮事件
	$("#prophoto .prev").click(function(){
		func2();
	});
	$("#prophoto .next").click(function(){
		func();
	});
	$simg.find("img").on("mouseover",function(){
		$(this).parent().addClass("hover").siblings().removeClass("hover");
		$("#bigImg").attr("src", $(this).attr("bigimg"));
		$("#bigImg").attr("jqimg",$(this).attr("bigimg"));
	})  
//	$(".jqzoom").jqueryzoom({
//      xzoom: 400, //放大图的宽度(默认是 200)
//      yzoom: 405, //放大图的高度(默认是 200)
//      offset: 10, //离原图的距离(默认是 10)
//      position: "right", //放大图的定位(默认是 "right")
//      preload: 1
//  });
}


function irating(){
	if(!$(".irating").length || $(".irating .titlist li").length <= 1){ return false; }
	var t, a = $(".irating #titlist .list"), time = 5000, length = a.children("li").length, step = 300, c = a.height(), d = a.find("li").width(), n = 0;
	// 克隆数据,实现无间断滚动
	var clone = a.html();
	if($("#titlist ul li").length < 9){

	}else{
		var clone = a.html();
		a.append(clone);
	}
	if(length>8){
		var func = function(){
			if(n < length && n >= -2){
				n ++;
			}
			a.stop().animate({"margin-left": -(n*d)}, step, function(){
				if(n >= length){
					n = 0;
					a.css({"margin-left": 0});
				}else if(n <= -1){
					n = length - 1;
					a.css({"margin-left": -(length -1)*d});
				}
				a.children("li").eq(n).addClass("hover").siblings("li").removeClass("hover");
				$("#bigimg img").attr({"src": a.children("li").eq(n).children("h3").attr("data-img")});
				$("#bigimg").attr({"href": a.children("li").eq(n).children("h3").attr("data-url")});
				$(".irating .txtlist").children(".item").eq(n).addClass("onactive").show().siblings(".item").removeClass("onactive").hide();
			});

		}
	}else{
		var func = function(){
			if(n < length && n >= -2){
				n ++;
			}
			//console.log(n)
			a.stop().animate({"margin-left": 0}, step, function(){
				if(n >= length){
					n = 0;
					a.css({"margin-left": 0});
				}else if(n <= -1){
					n = length - 1;
					a.css({"margin-left": 0});
				}
				a.children("li").eq(n).addClass("hover").siblings("li").removeClass("hover");
				$("#bigimg img").attr({"src": a.children("li").eq(n).children("h3").attr("data-img")});
				$("#bigimg").attr({"href": a.children("li").eq(n).children("h3").attr("data-url")});
				$(".irating .txtlist").children(".item").eq(n).addClass("onactive").show().siblings(".item").removeClass("on").hide();
			});
			
		}
	}
	$(".irating .next").click(function(){
		func();
	});
	$(".irating .prev").click(function(){
		n -= 2;
		func();
	});
	a.children("li").bind("mouseover", function(){
		n = $(this).index()-1;
		func();
	});
	t = setInterval(func, interval);
	$(".irating").hover(function(){
		$(".irating .next,.irating .prev").show();
	},function(){
		$(".irating .next,.irating .prev").hide();
	});
}

function imglist(_this){
    // 新闻tab切换
	    $('#irepro .top h3').click(function(){
	        var index = $(this).index();
	        $(this).addClass("hover").siblings().removeClass("hover");
	        $(this).parents("#irepro").find(".bottom .imglist").eq(index).show().siblings().hide();
	    });
	    if ( _this.find(".item").length <= 1) {	return false; }
    var t, a = _this;
    var clone = a.find(".list").html();
    a.find(".list").append(clone); // 克隆数据
    var n = 0,
        N = a.find(".list").children(".item").length,
        wid = a.find(".list").children(".item").width()+30,
        time = 5000,
        step = 600;
    a.find(".list").width(N * wid);
    var func = function() {
        if (n >= N / 2) {
            n = 0;
            a.find(".list").css({
                "margin-left": 0
            });
            func();
        } else {
            n++;
            a.find(".list").stop().animate({
                "margin-left": -wid * n
            }, step);
        }
    }
    var func2 = function() {
        if (n <= 0) {
            n = N / 2;
            a.find(".list").css({
                "margin-left": -wid * n
            });
            func2();
        } else {
            n--;
            a.find(".list").stop().animate({
                "margin-left": -wid * n
            }, step);
        }
    }
    // 手动触发滚动效果::向右箭头
    _this.find(".next").click(function() {
//		clearInterval(t);
        func();
    });
    // 手动触发滚动效果::向左箭头
    _this.find(".prev").click(function() {
//		clearInterval(t);
        func2();
    });
    // 自动执行
    t = setInterval(func, time);
    if(_this.parents(".floor_1").length){

    }else{
        t = setInterval(func, time);
        a.hover(function() {
                clearInterval(t);
            },function() {
                t = setInterval(func, time);
            }
        );

    }
}


// banner焦点图
function banner() {
    if (!$("#banner").length || $("#banner li").length <= 1) {	return false; }
    $("#banner ul li:gt(0)").css({"display":"none"});
    var b = $("#banner"),
        me = $("#banner ul"),
        tip = $("#banner .tip"),
        t, interval = 5000,
        speed = 1000,
        speed2 = 700,
        n = 0,
        N = me.children("li").length;
    wid = b.children("li").width();
    step = 200,time = 3000;
    if ($("#banner .tip").length) {
        var htmlTip = "";
        for (var i = 0; i < N; i++) {
            if (i == 0) {
                htmlTip += "<span class='cur'>"+(i+1)+"</span>";
            } else {
                htmlTip += "<span class=''>"+(i+1)+"</span>";
            }
        }
        tip.html(htmlTip);
    }
    var func = function() {
        if (n >= N - 1) {
            n = 0;
        }else if(n < -1){
            n = N-1;
        }
        else {
            n++;
        }
        me.children("li").eq(n).css({
            "z-index": 2
        }).stop().fadeIn(speed).siblings("li").css({
            "z-index": 1
        }).stop().fadeOut(speed2);
        if ($("#banner .tip").length) {
            tip.children("span").eq(n).addClass("cur").siblings("span").removeClass("cur");
        }
    }
    $("#banner").hover(function(){
        $("#btn_prev,#btn_next").fadeIn()
    },function(){
        $("#btn_prev,#btn_next").fadeOut()
    })
    $dragBln = false;
    $("#btn_prev").click(function(){
        clearInterval(t);
        n -= 2;
        func();
        t = setInterval(func, time)
    });
    $("#btn_next").click(function(){
        clearInterval(t);
        func();
        t = setInterval(func, time)
    });

    tip.children("span").click(function() {
        clearInterval(t);
        n = $(this).index() - 1;
        func();
        t = setInterval(func, interval);
    })
    $("#banner ul.list li").mouseenter(function() {
        clearInterval(t);
    }).mouseleave(function() {
        t = setInterval(func, time);
    });
    t = setInterval(func, interval);
}

//inews
function inews(){ 
	var $a=$("#inews").find(".tog").find("div");
	var i=2;
	var page=1;
	var $v_show=$("#inews .inewsCon .list");
	var $v_content=$("#inews .inewsCon");
	var v_width=$v_content.width();
	var len=$v_content.find(".item").length;
	var page_count=Math.ceil(len/i);
	$v_show.width(page_count*v_width);
	if(len < 3){
		$a.hide();
	}
	$a.click(function(){
		var $sty=$(this).attr("class");
		if(!$v_show.is(":animated")){
		   if($sty=="prev"){
			  if(page==1){
					 $v_show.animate({left:-v_width*(page_count-1)+"px"},500);
					 page=page_count;  
			  }else{
					 $v_show.animate({left:"+="+v_width+"px"},500);                                    
					 page--;
			  }  
		   }
		   if($sty=="next"){
			  if(page==page_count){
					$v_show.animate({left:0},500);
					page=1;
			  }else{
					$v_show.animate({left:"-="+v_width+"px"},500);
					page++;
			  }   
		   }
		}
	});
}


function layout(u){
	var $obj = $('<div class="dialog-layout"></div>');
	if(u == 0){
		$('.dialog-layout').remove();
	}else{
		if(!$('.dialog-layout').length){
			$obj.appendTo('body').show();
		}
	}
}
function share(){
	window._bd_share_config = {
		share : [{
			"bdSize" : 16
		}],
	}
	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
}

// 加入收藏 兼容360和IE6
function shoucang(sTitle, sURL) {
    try {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e) {
            alert("您的浏览器不支持此功能，请使用Ctrl+D进行添加");
        }
    }
}

function SetHome(obj,url){
	try{
		obj.style.behavior='url(#default#homepage)';
		obj.setHomePage(url);
   }catch(e){
	   if(window.netscape){
		  try{
			  netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
		 }catch(e){
			  alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
		  }
	   }else{
		alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
	   }
  }
}