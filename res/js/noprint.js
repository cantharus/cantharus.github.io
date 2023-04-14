(() => {
    "use strict";
    let printDisclaimer;
    document.addEventListener("DOMContentLoaded", (_) => {
        printDisclaimer = document.createElement("div");
        printDisclaimer.classList.add("print-disclaimer");
        const h1 = document.createElement("h1");
        h1.appendChild(document.createTextNode("Why are you printing this page!?"));
        printDisclaimer.appendChild(h1);
        const p = document.createElement("p");
        p.style.fontStyle = "italic";
        p.appendChild(document.createTextNode("It\u{2019}s not supposed to be printed!!"));
        printDisclaimer.appendChild(p);
        document.body.prepend(printDisclaimer);

        const style = document.createElement("style");
        style.appendChild(document.createTextNode(".print-disclaimer{display:none;color:#000;}@media print{body{color:#fff!important;}body>:not(.print-disclaimer){display:none!important;}.print-disclaimer{display:block!important;}}"));
        document.body.prepend(style);
    });
    window.addEventListener("beforeprint", firstPrintHack);

    // this function is necessary because some browsers will not display the thing properly on the first print for some reason
    function firstPrintHack() {
        window.removeEventListener("beforeprint", firstPrintHack);
        printDisclaimer.style.display = "block";
        setTimeout(() => printDisclaimer.setAttribute("style", ""), 0);
    }
})();
