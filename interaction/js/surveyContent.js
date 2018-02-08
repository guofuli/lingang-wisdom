$(function(){

$("#survey_div .pro_btn button").on("click",function(){

// alert("投票成功！")
// 投票后改变当前状态，禁止点击事件
$(this).css({"background":"#c0c0c0"}).attr({"disabled":"disabled"});

// 其它选项禁止点击并改变点击样式
$(this).parent().parent().siblings().children().children("button").css( {"cursor":"not-allowed"}).attr({"disabled":"disabled"});

})




})