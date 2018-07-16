import echarts from 'echarts'
import 'echarts-gl'

function charts(){
    // 创建一个高斯分布函数
var gaussian = makeGaussian(50, 0, 0, 20, 20);

var data = [];
for (var i = 0; i < 1000; i++) {
    // x, y 随机分布
    var x = Math.random() * 100 - 50;
    var y = Math.random() * 100 - 50;
    var z = gaussian(x, y);
    data.push([x, y, z]);
}

var myChart = echarts.init(document.getElementById('chart2'))

var option={
    grid3D: {},
    xAxis3D: {},
    yAxis3D: {},
    zAxis3D: {max:100},
    series: [{
        type: 'scatter3D',
        data: data
    }]
}
myChart.setOption(option)
}

function makeGaussian(amplitude, x0, y0, sigmaX, sigmaY) {
    return function (amplitude, x0, y0, sigmaX, sigmaY, x, y) {
        var exponent = -(
                ( Math.pow(x - x0, 2) / (2 * Math.pow(sigmaX, 2)))
                + ( Math.pow(y - y0, 2) / (2 * Math.pow(sigmaY, 2)))
            );
        return amplitude * Math.pow(Math.E, exponent);
    }.bind(null, amplitude, x0, y0, sigmaX, sigmaY);
}
module.exports=charts