var idx = 0

var joinbt = {
    event:function(){
        var bt = function(){
            idx = $(this).parent().index();
            console.log(idx)
            $('.join_bt li').eq(idx).addClass('on').siblings().removeClass();
            if(idx == 0 ){
                $('.phone').css({
                    'display':'block'
                }).siblings().css({
                    'display':'none'
                })
            }
            if(idx == 1 ){
                $('.email').css({
                    'display':'block'
                }).siblings().css({
                    'display':'none'
                })
            }
        }

        $('.join_bt li a').on({
            'click': bt
        })
    }
}

var agree = {
    event:function(){
        var pop = function(){
            $(this).toggleClass("arrow_on").parent().next().slideToggle();
        }

        $('.terms li a div').on({
            'click':pop
        })
    }
}




$(function(){
    joinbt.event();
    agree.event();
})
