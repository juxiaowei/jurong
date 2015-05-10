/**
 * Created by Administrator on 2014/11/24 0024.
 */
define(['jquery'],function($){
   var f = function(){
   };
    f.prototype={
        tab:function(aa,bb,cc,dd,ee,ff){
            $(aa).find(bb).on(dd, function(event) {
                var $index = $(aa).find(bb).index(this);
                $(this).addClass(ee).siblings(bb).removeClass(ee);
                $(this).parents(cc).next().find(ff).siblings(ff).hide().eq($index).show();
                event.preventDefault();
                /* Act on the event */
            });
        },
        tab2:function(aa,bb,cc,dd,ee,ff){
            $(aa).each(function(index){
                $(this).find(bb).on(dd, function(event) {
                    var $index = $(aa).eq(index).find(bb).index(this)
                    $(this).addClass(ee).siblings(bb).removeClass(ee);
                    $(this).parents(cc).next().find(ff).siblings(ff).hide().eq($index).show();
                    event.preventDefault();
                });
            })
        },
        tab1:function(aa,bb,cc,dd,ee,ff){
            $(aa).find(bb).on(dd, function(event) {
                var $index = $(aa).find(bb).index(this);
                if ($(this).hasClass(ee)) {
                    $(this).removeClass(ee);
                    $(this).parents(cc).next().find(ff).hide();
                }else{
                    $(this).addClass(ee).siblings(bb).removeClass(ee);
                    $(this).parents(cc).next().find(ff).siblings(ff).hide().eq($index).fadeIn();
                }
                event.preventDefault();
                /* Act on the event */
            });
        },
        tab3:function(aa,bb,cc,dd,ee,ff,gg){
            $(aa).find(bb).on(dd, function(event) {
                $(ff).stop();
                var $index = $(aa).find(bb).index(this);
                $(this).addClass(ee).siblings(bb).removeClass(ee);
                $(ff).animate({left:-gg*$index+"px"},'fast');
                event.preventDefault();
                /* Act on the event */
            });
        }
    };
    return f;
});