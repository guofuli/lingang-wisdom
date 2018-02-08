/**
 * Created by clq on 2017/12/25.
 */
$(function () {
    $(".ct-box .ep-left ul .ep-left-two .show-title ").on("click", function () {
        $("#menu-hid").slideToggle(200);
        $(this).toggleClass("tog-class");
        $(".ct-box .ep-left ul .ep-left-three .show-title ").removeClass("tog-class");
        $(".echartsContent").css({ "display": "block" });
    });

    $("  #menu-hid a").on("click", function () {
        $(this).children("p").addClass("tog-class");
        $(this).siblings().children("p").removeClass("tog-class")
    });

    $(".ct-box .ep-left ul .ep-left-three .show-title ").on("click", function () {
        $("#menu-hid").slideUp(200);
        $(this).addClass("tog-class");
        $(".ct-box .ep-left ul .ep-left-two .show-title").removeClass("tog-class");
        $(".echartsContent").css({ "display": "none" });
    });



    // 手机端点击三级菜单后，二级菜单隐藏
    console.log(window.screen.width) 

    if (window.screen.width <= 768) {

        $(".menu-list").on("click", function () {
            $("#menu-hid").slideUp(200);
        });
    }




});