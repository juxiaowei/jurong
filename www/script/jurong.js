/**
 * Created by Administrator on 2014/11/23 00231.
 */
require.config({
    baseUrl: '../jurong/xhtml/www/script/lib/',
    paths: {
        jquery: 'jquery-1.7.1.min',
        scroll: '../app/scroll',
        yx_rotaion: 'jquery.yx_rotaion',
        slide: 'silde',
        dataPicker: 'My97DatePicker/WdatePicker',
        yztab: '../app/yztab'
    },
    shim: {
        yztab: {
            deps: [
                'jquery'
            ],
            exports: 'yztab'
        },
        slide: {
            deps: [
                'jquery'
            ],
            exports: 'slide'
        },
        yx_rotaion: {
            deps: [
                'jquery'
            ],
            exports: 'yx_rotaion'
        }
    }
});
require(['jquery', 'yztab', 'scroll','yx_rotaion','slide','dataPicker'], function ($, f, t,a,b) {
    var f = new f();
    f.tab2('.service-nav', 'li', '.service-nav', 'mouseenter', 'hover', 'ul');
    f.tab2('.charm-title', 'a', '.charm-title', 'mouseenter', 'hover', '.charm-content');
    f.tab2('.group-dep-system', 'a', '.group-dep-system', 'mouseenter', 'hover', 'ul');
    f.tab2('.information-right-box-title', 'a', '.information-right-box-title', 'mouseenter', 'hover', 'ul');
    f.tab2('.xxgk-news-title-one', 'a', '.xxgk-news-title', 'mouseenter', 'hover', 'ul');
    f.tab2('.xxgk-news-title-two', 'a', '.xxgk-news-title', 'mouseenter', 'hover', 'ul');
    f.tab2('.life-travel-content-left', 'a', '.life-travel-content-left', 'mouseenter', 'hover', '.box');
    f.tab2('.charm-city-title', 'a', '.charm-city-title', 'mouseenter', 'hover', '.charm-city-content-box');
    f.tab2('.new-title', 'li', '.new-title', 'mouseenter', 'hover', '.new-content');
    f.tab3('.warp-nav-left', 'li', '.warp-nav-left', 'mouseenter', 'hover', '.nav-right-box','867');
//    首页
    window.onscroll=function(){
        if($(document).scrollTop()>44){
            $(".nav-fixed-top").addClass("hover");
        }else{
            $(".nav-fixed-top").removeClass("hover");
        }
    }
//    公共服务的滚动
    if($(".ranklist").length>0){
        $(".ranklist").myScroll({
            speed: 40,
            rowHeight: 29
        });
    }
    if($(".yx-rotaion").length>0){
        $(".yx-rotaion").yx_rotaion({auto:true});
    }

    WdatePicker({
        eCont: 'datePicker',
        firstDayOfWeek:1,
        maxDate: '%y-%M-%d',
        onpicked: function (dp) {
            window.open("search.jsp?startTime=" + dp.cal.getDateStr()+"&endTime=" + dp.cal.getDateStr());
        }
    });
    // WeekPicker
    $(function() {
        $("#botton-scroll").jCarouselLite({
            btnNext: ".next",
            btnPrev: ".prev"
        });
    });
});