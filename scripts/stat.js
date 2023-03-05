function getColor(){ 
    return "hsl(" + 360 * Math.random() + ',' +
               (25 + 70 * Math.random()) + '%,' + 
               (85 + 10 * Math.random()) + '%)'
}

function genCharts() {
    document.getElementById("chart").remove();
    var loading = document.createElement('div');
    loading.style = "text-align: center;"
    loading.innerHTML = "loading chart...";
    document.getElementById("chartContainer").appendChild(loading);
    setTimeout(() => {
        var el = document.createElement("canvas");
        el.id = "chart";
        let labels = [];
        let values = [];
        Object.keys(window.currentStat).forEach(stat => {
            labels.push(stat);
            values.push(window.currentStat[stat]);
        })
        let fixed = fixData(labels, values);
        var colors = genColors(fixed[0].length);
        colors = paletteGenerator.diffSort(colors, 'Default');
        Chart.defaults.global.defaultFontFamily = "main";
        Chart.defaults.global.defaultFontColor="#fff";
        Chart.defaults.global.defaultFontSize="18";
        Chart.defaults.global.defaultFontStyle="normal";
        new Chart(el.getContext("2d"), {
            type: "bar",
            data: {
                labels: fixed[0],
                datasets: [{
                    backgroundColor: colors,
                    data: fixed[1]
                }]
            },
            options: {
                aspectRatio: 1,
                title: {
                    display: true,
                    text: "Most Shared Verses Across All Words",
                    font: {
                        style: "normal"
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        },
                        gridLines: {
                            display: false
                        },
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        },
                    }]
                },
                legend: {
                    display: false
                },
                events: []
            }
        });
        loading.remove();
        document.getElementById("chartContainer").appendChild(el);  
    })
    
}

function calcStats(shows) {
    try {
        for (var item of shows) {
            let verse = item[0];
            if (Object.keys(window.currentStat).indexOf(verse) !== -1) {
                window.currentStat[verse] += item[1];
            } else {
                window.currentStat[verse] = item[1];
            }
        }
    } catch {}
}