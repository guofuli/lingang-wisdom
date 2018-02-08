






// 轮播图
$(".safe-carousel .carousel").carousel({
    interval: 3000
})


//echars树状图
// $(function () {
//
//
// var myChart = echarts.init(document.getElementById("statistics"));
//
// // 指定图表的配置项和数据
// var dataAxis = ['行政执法', '隐患信息', '道路安全', '工地安全', '旅游安全', '特种设备', '天气安全', '防台防汛', '食品药品', '消防安全'];
// var data = [320, 282, 291, 334, 390, 430, 410, 280, 542, 421];
// var yMax = 600;
// var dataShadow = [];
//
// for (var i = 0; i < data.length; i++) {
//     dataShadow.push(yMax);
// }
//
// option = {
//     title: {
//         text: '',
//         subtext: ''
//     },
//     xAxis: {
//         data: dataAxis,
//         axisLabel: {
//             // inside: true,
//             textStyle: {
//                 color: '#4c4c4c'
//             }
//         },
//         axisTick: {
//             show: false
//         },
//         axisLine: {
//             show: false
//         },
//         z: 10
//     },
//     yAxis: {
//         axisLine: {
//             show: false
//         },
//         axisTick: {
//             show: false
//         },
//         axisLabel: {
//             textStyle: {
//                 color: '#4c4c4c'
//             }
//         }
//     },
//     dataZoom: [
//         {
//             type: 'inside'
//         }
//     ],
//     series: [
//         { // For shadow
//             type: 'bar',
//             itemStyle: {
//                 normal: {color: '#EBEBEB'}
//             },
//             barGap:'-100%',
//             barCategoryGap:'50%',
//             data: dataShadow,
//             animation: false
//         },
//         {
//             type: 'bar',
//             itemStyle: {
//                 normal: {
//                     color: new echarts.graphic.LinearGradient(
//                         0, 0, 0, 1,
//                         [
//                             {offset: 1, color: '#41c763'}
//                         ]
//                     )
//                 },
//                 emphasis: {
//                     color: new echarts.graphic.LinearGradient(
//                         0, 0, 0, 1,
//                         [
//                             // {offset: 0, color: '#2378f7'},
//                             {offset: 0.7, color: '#2378f7'},
//                             // {offset: 1, color: '#83bff6'}
//                         ]
//                     )
//                 }
//             },
//             data: data
//         }
//     ]
// };
//
// // Enable data zoom when user click bar.
// var zoomSize = 6;
// myChart.on('click', function (params) {
//     console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
//     myChart.dispatchAction({
//         type: 'dataZoom',
//         startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
//         endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
//     });
// });
//
// // 使用刚指定的配置项和数据显示图表。
// myChart.setOption(option);
//
// });



//文字滚动

jQuery(".txtMarquee-top").slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:5,interTime:50,trigger:"click"});


