$(function () {
// sun_egde start
    $(".sun_edge,.moon").click(function () {
        $("#bullets").toggleClass("right_150");
    })
// sun_egde end
//     msg_sub_button start
    $("#msg_sub_button").mousedown(function () {
        $(this).addClass("button_up");
    })
    $("#msg_sub_button").mouseup(function () {
        $(this).removeClass("button_up");
    })
//     msg_sub_button end
//     code start
    $(".icon>a:eq(1)").click(function () {
        $(this).children("span").toggleClass("span_click")
    })
//     code end
    var html1 = "";
    $(".c100").each(function () {
        html1 += $(this).find("span").html()
    })
    // alert(html1);
    $(".c100").mouseover(function () {
        var str = $(this).attr("class").substr(12,2);
        $(this).find("span").html(str+"%");
    }).mouseout(function () {
        $(this).find("span").html($("#"+$(this).attr("class").substr(12,2)).val());
    })
    setInterval(function timers() {
        if($(".page4").attr("style")=="display: block;"){
            $(".sun_edge").hide();
            $(".moon").show();
        }
        if($(".page5").attr("style")=="display: block;"){
            $(".sun_edge").hide();
            $(".moon").show();
        }
        if($(".page1").attr("style")=="display: block;"){
            $(".sun_edge").show();
            $(".moon").hide();
        }
        if($(".page2").attr("style")=="display: block;"){
            $(".sun_edge").show();
            $(".moon").hide();
        }
        if($(".page3").attr("style")=="display: block;"){
            $(".sun_edge").show();
            $(".moon").hide();
        }
        if($(".page6").attr("style")=="display: block;"){
            $(".sun_edge").show();
            $(".moon").hide();
        }
    },1000)
    $(".mains>ul>li>h3").click(function () {
        $(".mains>ul>li>h3").removeClass("activer")
        $(this).addClass("activer")
        $(".mains>ul>li>ul").hide();
        $(this).next().show();
    })
})