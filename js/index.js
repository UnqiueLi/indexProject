/**
 * Created by Master on 2016/12/17.
 */
$(function(){
    /*
    导航点击下划
     */
    $(".nav_right li").on({
        'click':function(){
            $(this).siblings().attr("class","");
            $(this).attr("class","active");
        }
    });
    /*
    banner轮播
     */
    $(".picCir li").on({
        "click":function() {
            $("#picLun").animate({left: $(this).index()*(-1600)}, 1500);
            $(this).siblings().attr("class", "");
            $(this).attr("class", "activeCir");
            index = $(this).index();
            }
        });
        var index=0;
        var lastIndex=$("#picLun li").length;
    var  timer = setInterval(Next,2000);
    $(".banner").hover(function(){
            clearInterval(timer);
    },function(){
           timer=setInterval(Next,2000);
    })
     function Next(){
         $("#picLun").animate({left:index*(-1600)},1500);
         $(".picCir li").eq(index).attr("class","activeCir");
         $(".picCir li").eq(index).siblings().attr("class","");
        index++;
        if(index>=lastIndex){
            index=0;
        }
    }
    /*
    移动特效
     */
    $("#topMove li").on({
        "mouseenter":function(){
            $(this).children(".hidebox").stop(true,false).fadeIn(700);
            $(this).find("h2").siblings().attr("class","");
            $(this).find("h2").attr("class","activefont");
        },
        "mouseleave":function(){
            $(this).children(".hidebox").stop(true,false).fadeOut(700);
            $(this).find("h2").attr("class","");
        }
     })
    /*
    轮播
     */

    /*
    地图
     */
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(116.4035,39.915),8);
    setTimeout(function(){
        map.setZoom(14);
    }, 2000);  //2秒后放大到14级
    map.enableScrollWheelZoom(true);
})
