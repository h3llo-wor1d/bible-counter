function genCharts() {
    let labels = [];
    let values = [];
    Object.keys(window.currentStat).forEach(stat => {
        labels.push(stat);
        values.push(window.currentStat[stat]);
    })
    console.log(values);
    console.log(labels)
    new Chart("charts", {
        type: "pie",
        data: {
            labels: labels,
            datasets: {
                backgroundColor: ["red"],
                data: values
            }
        },
        options: {
            title: {
              display: true,
              text: "Stuff and things..."
            }
        }
    });
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