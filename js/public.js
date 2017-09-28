
$(function(){
	// headertop();//二维码弹出
	// searchtextshow();//首页搜索框 
	//loading();//加载。。。
	scrollheader();//页面header滚动 
	scroll();//滚动条下拉页面加载文字动画
	upslip();//内页列表的上升动画效果 
	 //abouttitle();//工程展示类型页面的头部滚动置顶
})


//首页二维码弹出
// function headertop(){
// 	var width =$(window).width();
// 	if(width>=779){
// 	    $(".ewm i").hover(function(){
// 		$(this).next(".ewmimg").fadeToggle(500)
// 		})
// 	}
// 	else if(width<780){
// 	    $(".ewm i").click(function(){
// 	    	$(this).next(".ewmimg").toggle();
// 	    })
// 	}
// }

//首页搜索框
// function searchtextshow(){
// 	var winwidth = $(window).width();
// 	$(".search-btn").click(function(){
// 		if(winwidth>=779){
// 		$(".search-text").addClass("show")
// 		}
// 	 })
// }

// function loading(){//加载。。。
// 	$(window).load(function() { 
// 			$('.status').fadeOut();
// 			$('.preloader').delay(500).fadeOut('slow'); 
// 		}); 
// }


//页面header滚动
function scrollheader(){
var menuid;
window.winwidth = $(window).width();
window.winheight = $(window).height();
var menusub,_navLi = $("nav li");
var _delayTop = 0;
$(window).bind("scroll",function(){
	var _wTop = _winScroll = windowPos = $(window).scrollTop(),
		docHeight = $(document).height(),
		windowHeight = $(window).height(),
		completion = windowPos / (docHeight - windowHeight) * window.winheight; 
	if(_wTop>50&&window.winwidth>800&&_delayTop<_wTop){
		$(".pc-header ").removeClass("top")
		 $(".pc-header .logo img").attr("src","/images/logo2.png")
		 $(".mune-toggle i").css("background-position","-2px -1px")
		}
	else{
	}
	if(_wTop<49){ 
			$(".pc-header ").addClass("top")
			$(".pc-header .logo img").attr("src","/images/logo.png")
		 $(".mune-toggle i").css("background-position","-32px -1px")

	}
	_delayTop = _wTop;
});
 
}

$(function(){
	var WindowHeight=$(window).height()
	$(".phonenav .nav").height(WindowHeight)
	//手机端导航向左滑出动作
	$('.nav-toggle').click(function(){
		$('body').toggleClass('open-toggle');
	})
	$(".phonenav .nav").before("<div class='navbg'></div>");
	$(".navbg").height(WindowHeight)
	$(".navbg").click(function(){
		$('body').removeClass('open-toggle'); 
	})
 
	//手机端导航展开二级菜单
	$('.mune-toggle p').click(function(){
	    $(this).find(".soo").removeClass("s")
	    $('.down-nav').not($(this).siblings('.down-nav')).slideUp().prev().find(".soo").addClass("s");
        $(this).siblings('.down-nav').slideToggle();
        return false; 
	})
})

$(function(){
// 返回顶部
	$(".gotop").click(function() {
		$('html,body').animate({
			scrollTop : '0px'
		}, 300);
		$(".gotop").hide();
	}); 
})
  $(document).scroll(function(){
	  	if($(window).width()>779){
		  	if($(document).scrollTop()>350){
				$(".gotop").show();
			}
			else{
				$(".gotop").hide();
			}
	  }
  })


 
  //工程展示类型页面的头部滚动置顶 
	if($(window).width()<780){
	$(document).scroll(function(){
			if($(document).scrollTop()<250){
				 // $(".about-title").removeClass("fixed")
				 
				 $(".tj-title-tab").removeClass("fixed")
				 $(".d-title-tab").removeClass("fixed")
			}
			else{
				 // $(".about-title").addClass("fixed")
				 $(".tj-title-tab").addClass("fixed")
				 $(".d-title-tab").addClass("fixed")
			}
	})
}

 




//滚动首页面加载文字动画
function scroll(){ 
		$(document).scroll(function(){
			$('.animated').each(function(){
			var imagePos = $(this).offset().top;
			var timedelay = $(this).attr('data-delay');
			var timedelay2 = timedelay/10 
			var topOfWindow = $(window).scrollTop();
			var WindowHeight = $(window).height();
			var $anim = $(this).attr('data-animation');
				if (imagePos <= ($(window).scrollTop()+$(window).height())) {		
					$(this).delay(timedelay).queue(function(){
						$(this).addClass($anim).clearQueue();
					});
				}
				else{
					$(this).queue(function(){
						$(this).removeClass($anim).clearQueue();
					});
				}
			
			});
		}) 
		$('.animated').each(function(){
		var timedelay = $(this).attr('data-delay');
		var $anim = $(this).attr('data-animation');
			$(this).delay(timedelay).queue(function(){
				$(this).addClass($anim).clearQueue();
			});
	    });

}

function upslip(){
	$('.equipment figure,.case li,.Talent li,.services li').each(function(){
		var timedelay = $(this).attr('data-delay');
		var $anim = $(this).attr('data-animation');
		$(this).delay(timedelay).queue(function(){
			$(this).addClass($anim).clearQueue();
		});
	});
}


$(function(){
	$(".module-4 .tab-btn li").hover(function(){ 
	$(this).addClass("cut")
},
function(){
	$(this).removeClass("cut")

}
)
})




