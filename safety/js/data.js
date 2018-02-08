

// echarts树状统计
// $(function () {
//
// //树状图
// var myChart = echarts.init(document.getElementById("statistics"));
//
// // 指定图表的配置项和数据
// var dataAxis = ['一月份','二月份','三月份','四月份','五月份','六月份','七月份','八月份','九月份','十月份','十一月份','十二月份',];
// var data = [320, 282, 291, 334, 390, 430, 410, 280, 542, 421,321,521];
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
//         splitLine: {
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
//         },
//         splitLine: {
//             show: false
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


//echarts示例
$(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("statistics"));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: ''
        },
        tooltip: {},
        legend: {
            data:['']
        },
        xAxis: {
            data: ['一月份','二月份','三月份','四月份','五月份','六月份','七月份','八月份','九月份','十月份','十一月份','十二月份']
        },
        yAxis: {},
        series: [{
            name: '数量',
            type: 'bar',
            itemStyle: {
                normal: {color: '#41c763'}
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data: [320, 282, 291, 334, 390, 430, 410, 280, 542, 421,321,521]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

})