function handleText() {
    let value = document.getElementById("textArea").value
    if (value === "") {
        document.getElementById("doesItAppear").innerHTML = ""
    }
}

function calcValue(o, n){
    var keys = Object.keys(o);
    keys.sort(function(a,b){
        return o[b] - o[a];
    })
    let sliced = keys.slice(0,n);
    let out = [];
    for (var val of sliced) {
        out.push([val, o[val]]);
    }
    return out;
}

function calculateShows(word) {
    try {
        let dens = bible[word.toLowerCase()].density;
        let calc = calcValue(dens, 3);
        return calc;
    } catch {
        return null;
    }
}

function getHighest(obj) {
    return obj[Object.keys(obj).reduce(function(a, b){ return obj[a].total > obj[b].total ? a : b })].total;
}

function round(num, places) {
    var multiplier = Math.pow(10, places);
    return Math.round(num * multiplier) / multiplier;
}

const showInline = (shows) => {
    let out = ""
    for (var show of shows) {
        out += (
            `<span>
                <abbr title="${window.verses[show[0]]}">${show[0]}</abbr> - appears ${show[1]} times.
            </span><br>`
        );
    }
    return out;
}

const interpolateBetweenColors = (
fromColor,
toColor,
percent
) => {
    // Source: https://stackoverflow.com/a/61141364
    const delta = 1-(percent / 100);
    const r = Math.round(toColor.r + (fromColor.r - toColor.r) * delta);
    const g = Math.round(toColor.g + (fromColor.g - toColor.g) * delta);
    const b = Math.round(toColor.b + (fromColor.b - toColor.b) * delta);

    return `rgb(${r}, ${g}, ${b})`;
};