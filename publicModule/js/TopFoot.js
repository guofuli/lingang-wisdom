// 上部导航栏点击高亮
// $("nav .nav span").on("click",function (e) {
//     $(this).addClass("nav-highlight")
//
// })



// 小屏nav隐藏切换
$("#navbar-header").on("click",function(){
    $("#nav-tog").slideToggle();
})



$(function () {

    $(".head-search input").focus(function(){
         $(this).val("")
     });
   $(".head-search input").blur(function(){
       $(this).val("输入关键字");
    });


})