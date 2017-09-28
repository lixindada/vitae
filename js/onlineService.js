(function($){
    $(document).ready(function(){

        var _userAgent = window.navigator.userAgent.toLowerCase();
        if(_userAgent.indexOf('android')<0 && _userAgent.indexOf('iphone')<0 &&  _userAgent.indexOf('ipad')<0 )
        {
            if(showStyle==1){
                $('.box_os').show();
                $('.onlineService').hide();
            }
            else{
                $('.onlineService').show();
                $('.box_os').hide();
            }

            $('#ico_pp_a').click(function(){
                $('#pop_ly_id_div').show();
            })
            $('#vcode').click(function(){
                $(this).attr('src',wzh+'/GetCode.asp?r='+Math.random());
            })

            $('#pop_ly_id_div dl dt span').click(function(){
                $("#pop_ly_id_div").hide();
            })
            $(".bmname").css("cursor", "pointer");
            $(".bmclass").css("display", "block");
            $(".bmname").css("display", "block");
            $(".bmname").click(function(){
                $(".bmclass").css("display", "none").prev("p").children("em").removeClass("openbg");
                $(this).next(".bmclass").css("display", "block").prev("p").children("em").addClass("openbg");
                if($(".bmclass").last().css("display")=="none"){
                    $(".bmname").last().css("paddingBottom", "5px");
                }
            })
            $('#msg_sub_button').click(function(){
                if($("#msg_uname").val()=="" || $("#msg_uname").val()=="请输入您的称呼"){alert("请输入您的称呼!");return false;}
                if($("#msgtext").val()=="" || $("#msgtext").val()=="请输入留言内容"){alert("请输入留言内容!");return false;}
                if($("#msg_vcode").val()=="" || $("#msg_vcode").val()=="请输入验证码"){alert("请输入验证码!");return false;}
                $(this).html("正在提交...");
                $(this).addClass("button_text");
                $(this).attr("disabled",true);
                var d="toUser="+kuse+"&msg_uname="+escape($("#msg_uname").val())+"&msg_uemail="+escape($("#msg_uemail").val())+"&msg_utel="+escape($("#msg_utel").val())+"&msgtext="+escape($("#msgtext").val())+"&msg_vcode="+escape($("#msg_vcode").val())+"";
                if(isSync==1){d+="&msg_tomail="+escape(send_to_email);}
                $.ajax({
                    type:"post",
                    url:wzh+"/msg_book_save.asp?r="+Math.random(),
                    dataType:"jsonp",
                    jsonp:"callbackparam",
                    jsonpCallback:"success_jsonpCallback",
                    data:d,
                    success:function(json){
                        if(json[0].statu==1){
                            alert(unescape(json[0].msg));
                            // $("#pop_ly_id_div").hide();
                        }
                        else{
                            alert(unescape(json[0].msg));
                        }
                        $('#vcode').attr('src',wzh+'/GetCode.asp?r='+Math.random());
                        $("#msg_sub_button").attr("disabled", false);
                        $("#msg_sub_button").html("确 定");
                        $("#msg_sub_button").removeClass("button_text");
                    },
                    error:function(XMLHttpRequest, textStatus, errorThrown){
                    }
                })
            })

            $('.onlineService .ico_os').click(function()
            {
                $('.onlineService').hide();
                $('.box_os').show();
            });
            $('.os_x').click(function()
            {
                $('.box_os').hide();
                $('.onlineService').show();
            });
            $boxOsFun = function(){var st=$(document).scrollTop();if (!window.XMLHttpRequest) {$('.box_os').css('top',st+44);$('.onlineService').css('top',st+44);$('#pop_ly_id_div').css('top',st+244);}};
            $(window).bind('scroll', $boxOsFun);
            $boxOsFun();


            $('.acbox .ico_pp').hover(function(){
                    $(this).stop().animate({height:'52px'},'fast');
                },function(){
                    $(this).stop().animate({height:'33px'},'fast');
                }
            );
            $('.acbox .ico_gt').hover(function(){
                    $(this).stop().animate({height:'52px'},'fast');
                },function(){
                    $(this).stop().animate({height:'33px'},'fast');
                }
            );

            $('.onlineService .ico_pp').hover(function(){
                    $(this).stop().animate({width:'87px'},'fast');
                },function(){
                    $(this).stop().animate({width:'39px'},'fast');
                }
            );
            $('.onlineService .ico_gt').hover(function(){
                    $(this).stop().animate({width:'97px'},'fast');
                },function(){
                    $(this).stop().animate({width:'39px'},'fast');
                }
            );

            $('.ico_gt').click(function(){
                $("html, body").animate({scrollTop:0}, 1);
            })


            if ( $(window).width()<1200 || screen.width<1200)
            {
                $('.hydp950,.w_950,.sdmain,.main').css('overflow','hidden');
                $('.top_bg').css({'overflow':'hidden','width':'950px','margin':'0 auto'});
                $('.db_bg2').addClass('db_bg2_s');
                $('.jstd_c .bg_l,.jstd_c .bg_r').css('display','none');
                $('#js_play .prev').css('left','0');
                $('#js_play .next').css('right','0');
                $('#videoplay .prev, #videoplay2 .prev').addClass('prev_s');
                $('#videoplay .next, #videoplay2 .next').addClass('next_s');
            }else{
                $('.hydp950,.w_950,.sdmain,.main').removeAttr('style');
                $('.top_bg').removeAttr('style');
                $('.db_bg2').removeClass('db_bg2_s');
                $('.jstd_c .bg_l,.jstd_c .bg_r').removeAttr('style');
                $('#js_play .prev').removeAttr('style');
                $('#js_play .next').removeAttr('style');
                $('#videoplay .prev, #videoplay2 .prev').removeClass('prev_s');
                $('#videoplay .next, #videoplay2 .next').removeClass('next_s');
            }
        }
    });
    /*download by www.sucaijiayuan.com*/
})(jQuery);