//echarts企业管理总数
$(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("statistics"));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '数量（家）'
        },
        tooltip: {},
        legend: {
            data:['']
        },
        xAxis: {
            data: [ "工商及危险化学品","商贸及服务","交通运输","工程建设","待分类"]
        },
        yAxis: {},
        series: [{
            name: '数量',
            type: 'bar',
            itemStyle: {
                normal: {color: '#48d5af'}
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data: [27, 36, 29, 43, 66]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

})

// 企业管理总数 
$(function(){
     // 基于准备好的dom，初始化echarts实例
     var myChart = echarts.init(document.getElementById("total-statistics"));
    option = {
        title : {
            text: '',
            subtext: '',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: []
        },
        series : [
            {
                name: '',
                type: 'pie',
                radius : '55%',
                center: ['50%', '40%'],
                data:[
                    {value:10, name:'C级（十个）'},
                    {value:4, name:'D级（四个）'},
                    {value:2, name:'B级（二个）'},
                    {value:8, name:'A级（八个）'}
                    
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    // 使用指定的配置项和数据显示图表。
    myChart.setOption(option);

})

/* 危化品（折线) */
$(function(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("chemical-statistics"));
    option = {
        title : {
            text: '',
            subtext: ''
        },
        tooltip : {
            trigger: 'axis'
        },
        // legend: {
        //     data:['最高气温','最低气温']
        // },
        toolbox: {
            show : true,
            feature : {
                // mark : {show: true},
                // dataView : {show: true, readOnly: false},
                // magicType : {show: true, type: ['line', 'bar']},
                // restore : {show: true},
                // saveAsImage : {show: true}
            }
        },
        calculable : true,
        // 分类
        xAxis : [
            {
                type : 'category',
                boundaryGap : true,
                data : ['生产许可证','经营许可证','运输许可证','使用许可证','废弃处置许可证','许可证预警','许可证超期']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value}'
                },
                min : 0 ,     //修改y坐标的最小值
                max : 100  //修改y坐标的最大值
            }
        ],
//以下是测试数据
        series : [
            {
                name:'数量',
                type:'line',
                itemStyle: {
                    normal: {color: '#ff9867'}
                },
                data:[12, 21, 45, 66, 42, 53, 77],
                markPoint : {
                    data : [
                        {type : ' ', name: ''},
                        {type : ' ', name: ''}
                    ]
                },
                // markLine : {
                //     data : [
                //         {type : 'average', name: '平均值'}
                //     ]
                // }
            }
           
        ]
    };

   // 使用指定的配置项和数据显示图表。
   myChart.setOption(option);

//    var myChartContainer = function () {
//     myChart.style.width = document.getElementById("chemical-statistics").innerWidth+'px';
//     myChart.style.height =document.getElementById("chemical-statistics").innerHeight+'px';
// };
// myChartContainer();

//  //浏览器大小改变时重置大小
//  window.onresize = function () {
//     myChartContainer();
    myChart.resize();
// };

})


