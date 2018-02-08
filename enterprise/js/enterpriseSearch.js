$(function () {


    // 分頁js

    if(window.screen.width<=768){

        $("#page_modul  ul").removeClass("pagination-lg");

       }

    //    默认1页选中
       $(".pages-box  ul li:nth-child(2)").addClass("active");

    // 选中样式
        $(".pages-box  ul li.page-num a").on("click",function () {
           
            $(this).parent().addClass("active").siblings().removeClass("active");

            
        })

      
    
    })