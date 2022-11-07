(function () {
    // Quotes that are allowed to show on page load
    const initialQuotes = [
        ["Welcome to my website!", "Welcome to my humble abode!"],
        "It&rsquo;s a wonderful day today, or at least I hope it is!",
        "How&rsquo;s life been treating you?",
        "Hi there!",
        [
            "Care for a coffee?",
            "Want some tea?",
            "Care for a drink?",
            "Would you like some hot chocolate?",
            "What&rsquo;s your favourite drink?"
        ],
        "You&rsquo;ve got this!",
        "Thanks for checking in!",
        "I&rsquo;m ready for another day!",
        [
            "What will you do today?",
            "Are you doing anything exciting later?"
        ],
    ];

    // Time-based greetings
    initialQuotes.push(function (placeholder) {
        let hours = (new Date()).getHours();

        let text;
        if (hours >= 6 && hours < 12) {
            text = "Good morning!"
        }
        else if (hours >= 12 && hours < 19) {
            text = "Good afternoon!"
        }
        else if (hours >= 19) {
            text = "Good evening!"
        }
        else {
            text = "Good heavens, would you look at the time?"
        }

        placeholder.innerText = text;
    });

    // Other quotes and easter eggs
    const quotes = [
        "🗿",
        "<code>from __future__ import timetravel</code>",
        "It is a tradition for me to have a bunch of useless fluff on my personal website. Thank you for taking the time to read this! <small>(There&rsquo;s no prize for doing that. Sorry.)</small>",
        "The sky is your limit, unless you&rsquo;ve already left the atmosphere.",
        "Neither being, nor not being, but rather a secret third thing&hellip;",
        "<small>Have you heard of the critically acclaimed MMORPG <a href=\"https://secure.square-enix.com/account/app/svc/ffxivregister\" target=\"_blank\"><i>Final Fantasy XIV</i></a> and its free trial, which includes the entirety of <i>A Realm Reborn</i> and the award-winning <i>Heavensward</i> expansion up to level 60 with no restrictions on playtime?<small>",
        "There&rsquo;s no harm in asking for help if you need it.",
        "<a href=\"game.html\">Want to play a game?</a>",
        "When in doubt, go with the flow.",
        "I have seen many things, some of which were flies.",
        "Another day, another opportunity to make friends!",
        [
            "You&rsquo;re telling me a fry riced this shrimp? <small>Wait&hellip;</small>",
            "You&rsquo;re telling me a rice fried this shrimp? <small>Wait&hellip;</small>",
            "You&rsquo;re telling me a shrimp riced this fry? <small>Wait&hellip;</small>",
            "You&rsquo;re telling me a rice shrimped this fry? <small>Wait&hellip;</small>",
            "You&rsquo;re telling me a fry shrimped this rice? <small>Wait&hellip;</small>",
        ],
        "<em>&ldquo;There&rsquo;s a time and place for everything, but not now!&rdquo;</em>",
        "I can&rsquo;t tell if you&rsquo;re joking, because I&rsquo;m a static webpage.",
        "Hire me! I&rsquo;ll do whatever you want!",
        "Shout-outs to SimpleFlips!",
        "Check <a href=\"https://upload.wikimedia.org/wikipedia/commons/d/d2/Eisvogel_kingfisher.jpg\" target=\"_blank\">this bird</a> out!",
        "Play <a href=\"https://www.nomanssky.com/\" target=\"_blank\"><i>No Man&rsquo;s Sky</i></a>!",
        "Go read an article by <a href=\"https://fasterthanli.me/\" target=\"_blank\">Amos &lsquo;fasterthanlime&rsquo; Wenger</a>, you won&rsquo;t regret it!",
        "I am eternally indebted to Luna for hosting my stuff!",
        "Please remember to wash your hands after using the toilet!",
        "I specialize in glorified motivational posters.",
        "I like trains.",
        "I&rsquo;m not a moogle, kupo!",
        "You are now manually breathing.",
        "<em>Perchance!</em>",
        "<code>] sv_cheats 1</code>",
        "This is a triumph. I&rsquo;m making a note here.",
        "Would you still love me if I were a worm? <small>Oh, you don&rsquo;t love me&hellip;?</small>",
        "&#x1F648; &#x1F649; &#x1F64A;",
        "<span style=\"font-style:italic;\">Reticulating splines&hellip;</span>",
        "<code>while (true)</code> ? Give me a <code>break</code>&hellip;",
        "<a class=\"ks-funny-link\" href=\"https://xkcd.com/641/\" target=\"_blank\">100% Asbestos-Free!</a>",
        "Don&rsquo;t do evil. Do funny.",
        [
            "<span lang=\"pt\">Voc&#x00EA; pode falar comigo em portugu&#x00EA;s!</span>",
            "<span lang=\"es\">&#x00A1;Puedes hablar conmigo en castellano!</span>",
            "<span lang=\"nl\">Je kunt Nederlands met mij praten!</span>",
            "<span lang=\"ja\">&#x65E5;&#x672C;&#x8A9E;OK&#xFF01;&#x3000;<small>&#x3067;&#x3082;&#x3001;&#x3042;&#x3093;&#x307E;&#x308A;&#x4E0A;&#x624B;&#x306B;&#x8A71;&#x305B;&#x307E;&#x305B;&#x3093;&#x2026;&#x2026;</small></span>"
        ],
        "Have you ever tried landscape painting?",
        "<a class=\"ks-funny-link\" href=\"https://www.skillshare.com/\" target\"_blank\">This website is <small>(not)</small> sponsored by Skillshare!</a>",
        "Place your bets! <small>But only if you&rsquo;re 18 or older.</small>",
        "<span style=\"font-style:italic;font-weight:bold;\">Ka-chow!</span>",
        "It&rsquo;s a good idea to regularly test your fire alarm. You don&rsquo;t want to lose your house to a fire. <small>Or any non-house object.</small>",
        "&#x0054;&#x0072;&#x0061;&#x006E;&#x0073;&#x0020;&#x0072;&#x0069;&#x0067;&#x0068;&#x0074;&#x0073;&#x0021;&#x0020;&#x1F3F3;&#xFE0F;&#x200D;&#x26A7;&#xFE0F;",
        "How did you stumble upon my website?",
        "Not many people will see this! <small>They&rsquo;re not missing out on much&hellip;</small>",
        "Honestly quite incredible!",
        "<a class=\"ks-funny-link\" href=\"https://shrekyourself.tumblr.com/post/67116150608\" target=\"_blank\">can u fEel it&#x201E; <span style=\"font-style:italic;font-weight:bold;\">b a n an ba ?</span></a>"
    ];

    // Hack to merge the two quote pools together
    Array.prototype.push.apply(quotes, initialQuotes);

    // eggbug
    quotes.push(function (placeholder) {
        placeholder.innerHTML = "You&rsquo;ve been eggbugged!&nbsp;"

        let anchor = document.createElement("a");
        anchor.href = "https://cohost.org/rc/welcome";
        anchor.target = "_blank";
        placeholder.appendChild(anchor);

        for (let n = 0; n < 8; n++) {
            let eggbug = document.createElement("img");
            eggbug.style.width = "1em";
            eggbug.src = "https://cohost.org/static/41454e429d62b5cb7963.png";
            eggbug.alt = "a rotating eggbug, the rotund purple mascot of cohost.org";

            anchor.appendChild(eggbug);

            let rotateDuration = 2500 + (Math.floor(Math.random() * 1000) - 500);
            let rotateKeyframes = new KeyframeEffect(eggbug, [
                { transform: "rotate(0deg)" },
                { transform: "rotate(360deg)" }
            ], { duration: rotateDuration, fill: "forwards", iterations: Infinity, easing: "linear", iterationStart: Math.random() });

            let rotateAnimation = new Animation(rotateKeyframes, document.timeline);
            rotateAnimation.play();
        }
    })

    // roll for initiative
    quotes.push(function (placeholder) {
        let a = document.createElement("a");
        a.innerText = "Roll for initiative!";
        a.href = "#";
        a.classList.add("ks-funny-link");
        a.addEventListener("click", function () {
            let span = document.createElement("span");
            let roll = Math.floor(Math.random() * 20) + 1;
            let text;

            if (roll == 1) {
                text = `${roll} <small>(rekt)</small>`;
            }
            else if (roll == 20) {
                text = `${roll} <small>Your <em>Quick Claw</em> activated!</small>`
            }
            else {
                text = roll.toString();
            }

            span.innerHTML = text;
            a.replaceWith(span);
        });
        placeholder.replaceChildren(a);
    })

    // gaslight
    let timesClicked = 0;
    let funnyOccurred = false;
    quotes.push(function (placeholder) {
        if (Math.random() <= 0.25) {
            if (funnyOccurred || timesClicked >= 100) {
                placeholder.innerHTML = `Wow, you clicked the next quote button ${timesClicked} times. Good job! I&rsquo;m proud of you.`;
            }
            else if (timesClicked > 1) {
                setQuote(nextQuote());
            }
            else {
                let chance = 25 / (quotes.length - 1);
                if (chance <= 0 || chance > 100) {
                    placeholder.innerHTML = "Go home, you&rsquo;re drunk.";
                } else {
                    let an = (chance >= 8 && chance < 9) || (chance >= 11 && chance < 12) ? "an" : "a";
                    placeholder.innerHTML = `<em>HUH?</em> This is the first quote you rolled&hellip; There&rsquo;s only ${an} ${chance.toPrecision(3)}% chance of that happening! RNG is on your side today!`;
                }
                funnyOccurred = true;
            }
        }
        else {
            setQuote(nextQuote());
        }
    })

    // quote counter
    quotes.push(function (placeholder) {
        if (quotes.length > 1) {
            placeholder.innerHTML = `Did you know? There are ${quotes.length} different quotes that you can see here!`;
        }
        else {
            placeholder.innerHTML = "<span style=\"font-size:xx-large;\">You shouldn&rsquo;t be seeing this quote, oops!</span>";
        }
    });

    // Done with the quotes
    let currentQuoteQueue = quotes.slice();
    shuffleArray(currentQuoteQueue);

    const placeholder = document.getElementById("ks-identity-wittyquote-inner");
    const selector = document.getElementById("ks-identity-wittyquote-selector");
    initializeQuote();

    selector.addEventListener("click", changeQuote);

    function nextQuote() {
        let result = currentQuoteQueue.shift();

        if (currentQuoteQueue.length == 0) {
            currentQuoteQueue = quotes.slice();
            shuffleArray(currentQuoteQueue);
        }

        // To avoid repetition, if the next quote would be the same as the current one, push it to the end of the queue.
        if (currentQuoteQueue[0] == result) {
            currentQuoteQueue.shift();
            currentQuoteQueue.push(result);
        }

        return result;
    }

    function initializeQuote() {
        let quote = initialQuotes[Math.floor(Math.random() * initialQuotes.length)];

        currentQuoteQueue.splice(currentQuoteQueue.indexOf(quote), 1);

        setQuote(quote);
    }

    function changeQuote() {
        setQuote(nextQuote());
        timesClicked++;
    }

    function setQuote(quote) {
        if (typeof (quote) === "function") {
            quote(placeholder);
        } else if (Array.isArray(quote)) {
            placeholder.innerHTML = quote[Math.floor(Math.random() * quote.length)];
        } else {
            placeholder.innerHTML = quote;
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
})();
