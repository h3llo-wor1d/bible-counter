function handleNav(el, type) {
    console.log(`Handing navigation for type ${type}`);
    document.getElementsByClassName("nactive")[0].className = "nb";
    el.className = "nactive";

    switch(type) {
        case "github":
            window.open("https://github.com/h3llo-wor1d/bible-counter", '_blank');
            break;
        case "stat":
            document.getElementById("page2").className="visible";
            document.getElementById("page1").className="invisible";
            if (localStorage.getItem("lastSetPhrase") !== localStorage.getItem("lastSetGraph")) {
                console.log('recalculating graph...')
                localStorage.setItem("lastSetGraph", localStorage.getItem("lastSetPhrase"));
                genCharts();
            }
            break;
        case "words":
            document.getElementById("page2").className="invisible";
            document.getElementById("page1").className="visible";
            break;
    }
}