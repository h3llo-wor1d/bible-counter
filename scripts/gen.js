function createBlock(shows, density, item) {
    return `
        <div>
            <div class="wordContainer tooltip">
                <span class="tooltiptext">
                    Most prominent verses:<br>
                    ${
                        showInline(shows)
                    }
                    <br>
                    <p style="font-size: 11pt; margin-top: 0px;">
                        This word has a density of ${density === 100 ? "100%, making it the most dense word in the bible!" : `${density}%`}
                    </p>
                </span>
                <div class="wordInside tooltip">
                    ${item}<br/>
                    <p>Appears: ${bible[item.toLowerCase()].total} times</p>
                </div>
            </div>
            <div class="tipbottom"></div>
        </div>
    `
}