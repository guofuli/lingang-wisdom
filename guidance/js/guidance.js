$(function () {




    /*分栏1 网上办事*/

    $("#pc-left .pc-left-two ").click(function () {
        $(this).css({ "background": "#e3e3e3" }).siblings().css({ "background": "#f6f6f6" });
        $("#pc-right-box #pc-right-two").fadeIn(0);
        $("#pc-right-box #pc-right-two").siblings().fadeOut(0);
    })


    // 在线办理、办理指南、在线查询鼠标移入移出改变图片
    $(".guidance-box .online-ls").mouseover(function () {

        $(this).find("img").attr({ src: "./images/zxbl-hover.png" })

    })

    $(".guidance-box .online-ls").mouseout(function () {

        $(this).find("img").attr({ src: "./images/zxbl.png" })

    })


    $(".guidance-box .instruction-ls").mouseover(function () {

        $(this).find("img").attr({ src: "./images/bszn-hover.png" })

    })

    $(".guidance-box .instruction-ls").mouseout(function () {

        $(this).find("img").attr({ src: "./images/bszn.png" })

    })


    $(".guidance-box .inquire-ls").mouseover(function () {

        $(this).find("img").attr({ src: "./images/zxcx-hover.png" })

    })

    $(".guidance-box .inquire-ls").mouseout(function () {

        $(this).find("img").attr({ src: "./images/zxcx.png" })

    })










    /*分栏2 办事指南*/

    $("#pc-left .pc-left-four ").click(function () {
        $(this).css({ "background": "#e3e3e3" }).siblings().css({ "background": "#f6f6f6" });
        $("#pc-right-box #pc-right-four").fadeIn(0);
        $("#pc-right-box #pc-right-four").siblings().fadeOut(0);
    })

    /*分栏3 表格下载*/

    $("#pc-left .pc-left-five ").click(function () {
        $(this).css({ "background": "#e3e3e3" }).siblings().css({ "background": "#f6f6f6" });
        $("#pc-right-box #pc-right-five").fadeIn(0);
        $("#pc-right-box #pc-right-five").siblings().fadeOut(0);
    })


    /*分栏4 便民服务*/

    $("#pc-left .pc-left-six ").click(function () {
        $(this).css({ "background": "#e3e3e3" }).siblings().css({ "background": "#f6f6f6" });
        $("#pc-right-box #pc-right-six").fadeIn(0);
        $("#pc-right-box #pc-right-six").siblings().fadeOut(0);
    })


    /*分栏5 查询服务*/

    $("#pc-left .pc-left-seven ").click(function () {
        console.log($(this));
        $(this).css({ "background": "#e3e3e3" }).siblings().css({ "background": "#f6f6f6" });
        $("#pc-right-box #pc-right-seven").fadeIn(0);
        $("#pc-right-box #pc-right-seven").siblings().fadeOut(0);
    })







});