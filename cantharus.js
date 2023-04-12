document.addEventListener("DOMContentLoaded", (ev) => {
    const quoteChangerAnchor = document.getElementById("quote-changer-anchor");
    if (!quoteChangerAnchor) {
        // what the hell are you doing??
        console.error("hey... i kinda need an element #quote-changer-anchor to work properly...");
        return;
    }

    // change the quote when the "new quote" button is clicked
    quoteChangerAnchor.addEventListener("click", (ev) => {
        alert("no quotes yet... sorry...");
        ev.preventDefault();
    });

    // TODO: remove when about me page is made
    const aboutLink = document.getElementById("link-about");
    if (aboutLink) aboutLink.addEventListener("click", (ev) => {
        alert("no information about me yet... sorry...");
        ev.preventDefault();
    });

    // TODO: remove when portfolio is made
    const portfolioLink = document.getElementById("link-portfolio");
    if (portfolioLink) portfolioLink.addEventListener("click", (ev) => {
        alert("no portfolio yet... sorry...");
        ev.preventDefault();
    });

    // TODO: remove when games page is made
    const gamesLink = document.getElementById("link-games");
    if (gamesLink) gamesLink.addEventListener("click", (ev) => {
        alert("no games yet... sorry...");
        ev.preventDefault();
    });
});
