data = [
    898.25, 894.75, 867.5, 872.25, 857.75, 857.5, 861.75, 874.5, 867, 868.5,
    868.25, 865.25, 859, 865.5, 855, 868.25, 872.5, 868.5, 865.5, 879,
    870.75, 878.5, 890.25, 878.75, 893.08, 884, 867.25, 866, 867.75, 870,
    866.25, 880.25, 894.75, 904, 899.25, 899.5, 906.75, 903.25, 905.5, 919.25,
    900.5, 900, 905.5, 920.25, 931.5, 926.5,
]

function renderChart(data, labels) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Preço soja',
                data: data,
                pointBackgroundColor: 'green'
            }]
        },
        options: {
            animation: {
                duration: 0,
            },
        }
    });

    // Data de compra:
    myChart.getDatasetMeta(0).data[4].custom = { backgroundColor: 'black' };

    // Pontos notáveis:
    myChart.getDatasetMeta(0).data[10].custom = { backgroundColor: 'red' };
    myChart.getDatasetMeta(0).data[20].custom = { backgroundColor: 'red' };

    // Data de hoje:
    myChart.getDatasetMeta(0).data[45].custom = { backgroundColor: 'blue' };

    myChart.update();

}

setInterval(function () {
    horarios = ['12/04', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', ''];
    renderChart(data, horarios);
}, 8000);
