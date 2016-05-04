/**
 * Created by yy on 2016/4/29.
 */
var myFun = {
    dofun: function () {
        this.paly();
    },
    paly: function () {
        var timer;
        $(window).on("scroll", function () {
            console.log("可视窗口高度："+$(window).height());
            console.log("文档高度："+$(document).height());
            console.log("距离顶端："+$(document).scrollTop());
            if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
                $(".load-img").css("display", "block");
                clearTimeout(timer);
                timer = setTimeout(function () {
                    $(".load-img").css("display", "none");
                    $(".txt ul").append($(".txt li").clone(true));
                }, 2000);
            }
        });
    }
}