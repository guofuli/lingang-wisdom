$(function () {

    // alert("hehe")


    /*分栏1 领导信箱*/

    $("#pc-left .pc-left-two ").click(function () {
        $(this).css({ "background": "#e3e3e3" }).siblings().css({ "background": "#f6f6f6" });
        $("#pc-right-box #pc-right-two").fadeIn(0);
        $("#pc-right-box #pc-right-two").siblings().fadeOut(0);
    })


    //性别 
    $("#sex_man").click(function () {
        $(this).addClass(" checked");
        $("#sex_woman").removeClass("checked").addClass("");
        $("#sex-1").attr("checked","true");
        $("#sex-0").removeAttr("checked");
        console.log("男");
    })
    $("#sex_woman").click(function () {
        $(this).addClass(" checked");
        $("#sex_man").removeClass("checked");
        $("#sex-0").attr("checked","true");
        $("#sex-1").removeAttr("checked");
        console.log("女");
    })

    // 公开意愿
    $("#public_y").click(function () {
        $(this).addClass(" checked");
        $("#public_n").removeClass("checked").addClass("");
        $("#pui-0").attr("checked","true");
        $("#pui-1").removeAttr("checked");
    })
    $("#public_n").click(function () {
        $(this).addClass("checked");
        $("#public_y").removeClass("checked");
        $("#pui-1").attr("checked","true");
        $("#pui-0").removeAttr("checked");
    })


    
    /*分栏2 监督投诉*/
    $("#pc-left .pc-left-three ").click(function () {
        $(this).css({ "background": "#e3e3e3" }).siblings().css({ "background": "#f6f6f6" });
        $("#pc-right-box #pc-right-three").fadeIn(0);
        $("#pc-right-box #pc-right-three").siblings().fadeOut(0);
    })

    //性别 
    $("#spv_sex_man").click(function () {
        $(this).addClass("checked");
        $("#spv_sex_woman").removeClass("checked").addClass("");
        $("#spv-sex-1").attr("checked","true");
        $("#spv-sex-0").removeAttr("checked");
        console.log("男");
    })
    $("#spv_sex_woman").click(function () {
        $(this).addClass("checked");
        $("#spv_sex_man").removeClass("checked");
        $("#spv-sex-0").attr("checked","true");
        $("#spv-sex-1").removeAttr("checked");
        console.log("女");
    })

    // 公开意愿
    $("#spv_public_y").click(function () {
        $(this).addClass("checked");
        $("#spv_public_n").removeClass("checked").addClass("");
        $("#spv-pui-0").attr("checked","true");
        $("#spv-pui-1").removeAttr("checked");
    })
    $("#spv_public_n").click(function () {
        $(this).addClass("checked");
        $("#spv_public_y").removeClass("checked");
        $("#spv-pui-1").attr("checked","true");
        $("#spv-pui-0").removeAttr("checked");
    })





    /*分栏3 在线留言*/

    $("#pc-left .pc-left-four ").click(function () {
        $(this).css({ "background": "#e3e3e3" }).siblings().css({ "background": "#f6f6f6" });
        $("#pc-right-box #pc-right-four").fadeIn(0);
        $("#pc-right-box #pc-right-four").siblings().fadeOut(0);
    })

    //性别 
    $("#msg_sex_man").click(function () {
        $(this).addClass("checked");
        $("#msg_sex_woman").removeClass("checked").addClass("");
        $("#msg-sex-1").attr("checked","true");
        $("#msg-sex-0").removeAttr("checked");
        console.log("男");

    })
    $("#msg_sex_woman").click(function () {
        $(this).addClass("checked");
        $("#msg_sex_man").removeClass("checked");
        $("#msg-sex-0").attr("checked","true");
        $("#msg-sex-1").removeAttr("checked");
        console.log("女");
      
    })

    // 公开意愿
    $("#msg_public_y").click(function () {
        $(this).addClass("checked");
        $("#msg_public_n").removeClass("checked").addClass("");
        $("#msg-pui-0").attr("checked","true");
        $("#msg-pui-1").removeAttr("checked");
    })
    $("#msg_public_n").click(function () {
        $(this).addClass("checked");
        $("#msg_public_y").removeClass("checked");
        $("#msg-pui-1").attr("checked","true");
        $("#msg-pui-0").removeAttr("checked");
    })






    /*分栏4 便民问答*/

    $("#pc-left .pc-left-five ").click(function () {
        $(this).css({ "background": "#e3e3e3" }).siblings().css({ "background": "#f6f6f6" });
        $("#pc-right-box #pc-right-five").fadeIn(0);
        $("#pc-right-box #pc-right-five").siblings().fadeOut(0);
    })


    /*分栏5 在线访谈*/

    $("#pc-left .pc-left-six ").click(function () {
        $(this).css({ "background": "#e3e3e3" }).siblings().css({ "background": "#f6f6f6" });
        $("#pc-right-box #pc-right-six").fadeIn(0);
        $("#pc-right-box #pc-right-six").siblings().fadeOut(0);
    })


    /*分栏6 在线调查*/

    $("#pc-left .pc-left-seven ").click(function () {
        console.log($(this));
        $(this).css({ "background": "#e3e3e3" }).siblings().css({ "background": "#f6f6f6" });
        $("#pc-right-box #pc-right-seven").fadeIn(0);
        $("#pc-right-box #pc-right-seven").siblings().fadeOut(0);
    })





});