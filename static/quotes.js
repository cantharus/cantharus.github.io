(function() {
    const quotes = [
        "Good morning!",
        "It&rsquo;s a wonderful day today, or at least I hope so!",
        "<code>from __future__ import timetravel</code>",
        "I&rsquo;m ready for another day!",
        "The sky is your limit, unless you&rsquo;ve already left the atmosphere.",
        "Neither being, nor not being, but rather a secret third thing&hellip;",
        "<small>Have you heard of the critically acclaimed MMORPG <a href=\"https://secure.square-enix.com/account/app/svc/ffxivregister\" target=\"new\"><i>Final Fantasy XIV</i></a> and its free trial, which includes the entirety of <i>A Realm Reborn</i> and the award-winning <i>Heavensward</i> expansion up to level 60 with no restrictions on playtime?<small>",
        "There&rsquo;s no harm in asking for help if you need it.",
        "<a href=\"game.html\">Want to play a game?</a>",
        "When in doubt, go with the flow.",
        "What will you do?",
        "I have seen many things, some of which were flies.",
        "Another day, another opportunity to make friends!",
        "You&rsquo;re telling me a fry riced this shrimp? Wait&hellip;",
        "You&rsquo;ve been eggbugged! <img alt=\"a rotating eggbug, the rotund purple mascot of cohost dot org\" src=\"https://cohost.org/static/41454e429d62b5cb7963.png\" style=\"animation:2s linear infinite rotate-hack-for-quotes;width:1.25em;display:inline;\">",
        "<em>&ldquo;There&rsquo;s a time and place for everything, but not now!&rdquo;</em>",
        "I can&rsquo;t tell if you&rsquo;re joking, because I&rsquo;m a static webpage.",
        "Hire me! I&rsquo;ll do whatever you want!",
        "Shout-outs to SimpleFlips!",
        "Check <a href=\"https://upload.wikimedia.org/wikipedia/commons/d/d2/Eisvogel_kingfisher.jpg\" target=\"new\">this bird</a> out!",
        "Play <a href=\"https://www.nomanssky.com/\" target=\"new\"><i>No Man&rsquo;s Sky</i></a>!",
        "Go read an article by <a href=\"https://fasterthanli.me/\" target=\"new\">Amos &lsquo;fasterthanlime&rsquo; Wenger</a>, you won&rsquo;t regret it!",
        "I am eternally indebted to Luna for hosting my stuff!",
        "Please remember to wash your hands after using the toilet!",
        "<a class=\"ks-funny-link\" href=\"#\" onclick=\"this.innerText=Math.floor(Math.random()*20)+1;this.onclick=undefined;this.classList.add('ks-funny-link-disabled');this.tabIndex=-1;\">Roll for initiative!</a>"
    ];

    // funny
    if (quotes.length > 1)
    {
        quotes.push(`Did you know? There are ${quotes.length + 1} different quotes that you can see here!`);
    }

    // done with the quotes
    let currentQuoteQueue = quotes.slice();
    shuffleArray(currentQuoteQueue);

    const placeholder = document.getElementById("ks-identity-wittyquote-inner");
    const selector = document.getElementById("ks-identity-wittyquote-selector")

    selector.addEventListener("click", changeQuote)
    changeQuote();

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function nextQuote() {
        let result = currentQuoteQueue.shift();

        if (currentQuoteQueue.length == 0) {
            currentQuoteQueue = quotes.slice();
            shuffleArray(currentQuoteQueue);
        }

        // To avoid repetition, if the next quote would be the same as the current one, push it to the end of the queue.
        if (currentQuoteQueue[0] == result) {
            console.log("shift time");
            currentQuoteQueue.shift();
            currentQuoteQueue.push(result);
        }

        return result;
    }

    function changeQuote() {
        placeholder.innerHTML = nextQuote();
    }
})();

