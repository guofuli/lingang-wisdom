$( function() {

// alert("hehe")
//信息公开右边栏三级菜单

    //二级菜单显示
    $("#pc-left .pc-left-two .show-title").click(function () {
        $("#pc-left .pc-left-two .hid").slideToggle(200);
        $(this).parent().siblings().find(".hid").slideUp(200);
        // $(this).toggleClass("tog-class");
        // $("#pc-left .pc-left-three .show-title").removeClass("tog-class");
        // $("#pc-left .pc-left-four  .show-title").removeClass("tog-class");
    })
    $("#pc-left .pc-left-three .show-title").click(function () {
        $("#pc-left .pc-left-three .hid").slideToggle(200);
        $(this).parent().siblings().find(".hid").slideUp(200);
        // $(this).toggleClass("tog-class");
        // $("#pc-left .pc-left-two .show-title").removeClass("tog-class");
        // $("#pc-left .pc-left-four  .show-title").removeClass("tog-class");
    })
    $("#pc-left .pc-left-four .show-title").click(function () {
        $("#pc-left .pc-left-four .hid").slideToggle(200);
        $(this).parent().siblings().find(".hid").slideUp(200);
        // $(this).toggleClass("tog-class");
        // $("#pc-left .pc-left-three .show-title").removeClass("tog-class");
        // $("#pc-left .pc-left-two  .show-title").removeClass("tog-class");
    })



   // 手机端点击三级菜单后，二级菜单隐藏
   // console.log(window.screen.width) 
  
    if(window.screen.width<=768){

 
    $(".hid p").on("click",function () {
        $(".hid ").slideUp(200);
    });

   }


  
    // 申请公开页面显示

    $("#apply-form").on("click",function () {
        $("#pablic_sort").fadeOut(20);
        $("#apply_pablic").fadeIn(20);
    });

    $(".hid p.apply_hid").on("click",function () {
        $("#pablic_sort").fadeIn(20);
        $("#apply_pablic").fadeOut(20);
    });








} );