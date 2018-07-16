import echarts from 'echarts'

export default ()=>{

let chart=echarts.init(document.getElementById('chart'))

let option={
    title:{
        text:'myChart example'
    },
    tooltip:{},
    legend:{
        data:['age']
    },
    xAxis:{
        data:['father','mother','me','sister']
    },
    yAxis:{},
    series:[{
        name:'age',
        type:'bar',
        data:[40,30,20,18]
    }]
}
chart.setOption(option)
return chart
}