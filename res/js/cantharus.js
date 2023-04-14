(() => {
    // visit count :)
    localStorage.setItem("visitcount", Number(localStorage.getItem("visitcount")) + 1);
    const visitCountRequiredForFunny = 5;
    const chanceForFunny = 0.2;

    const cantharus = {};
    window.cantharus = cantharus;

    cantharus.setQuote = setQuote;
    cantharus.setQuotes = (quotes) => {
        cantharus.quotes = quotes;
        refreshQuotePool();
    };
    cantharus.addQuote = (...quotes) => {
        for (const quote of quotes) {
            cantharus.quotes.push(quote);
        }
    }
    cantharus.changeQuote = changeQuote;
    cantharus.refreshQuotePool = refreshQuotePool;

    const informalGreetings = [
        "What\u{2019}s up?",
        "How\u{2019}s it hanging?",
        "Hey there, friend, is the world treating you well?",
        "Any plans for the day?",
        "You\u{2019}re always welcome here!",
        "I hope you\u{2019}re having a wonderful day today!",
        "It\u{2019}s so nice to see you here again!",
        "Welcome back!",
        "Ready for another day?",
        "Hiiii!"
    ];
    
    // quotes that show on page load go here
    const pageLoadQuotes = [
        "Welcome to my humble abode!",
        "Greetings!",
        "Hello there!",
        "Hey, how are you?",
        "What will you do today?",
        "So, how are you holding up?",
        // informal greetings
        (el) => {
            if (getVisitCount() > 3) {
                el.innerText = sampleArray(informalGreetings);
            } else {
                el.innerText = "How are things going for you today?";
            }
        },
        // time of day
        (el) => {
            const date = new Date();
            const hour = date.getHours();

            let text;
            if (hour < 6) {
                text = "Hey, shouldn\u{2019}t you be asleep?"
            } else if (hour < 12) {
                text = "Good morning!"
            } else if (hour === 12 && date.getMinutes() === 0 && date.getSeconds() === 0) {
                text = "Good\u{2026} noon!"
            } else if (hour < 18) {
                text = "Good afternoon!"
            } else {
                text = "Good evening!"
            }
            el.innerText = text;
        },
    ];
    
    const numberFormat = new Intl.NumberFormat();
    const repoUrl = "https://github.com/cantharus/cantharus.github.io";
    const prUrl = `${repoUrl}/pulls`;
    let otherQuotes = [];

    // the other quotes go here
    // these are my quotes! scroll down for the contributedQuotes array
    const myQuotes = [
        //// generic
        "There\u{2019}s a whole world out there for you to explore.",
        "Another day, another dollar.",
        "Is this enough for you?",
        "Greetings, traveller. Do you bring good tidings?",
        "So much to do, so much to see\u{2026}",
        "Hm\u{2026} I think I\u{2019}ve run out of glue\u{2026}",
        "Is there any juice left in that?",
        "Pretty neat, huh?",
        "Treasure what you have now. You\u{2019}ll never know when you\u{2019}ll miss it.",
        "Speak freely with me!",
        "There are so many things to do on the computer!",
        "Slow day, huh?",
        `Please don\u{2019}t look at the <a href=\"${repoUrl}\" target=\"_blank\">source code</a>, it sucks\u{2026}`,
        `Want to add a quote here? <a href=\"${prUrl}\" target=\"_blank\">Submit a pull request!</a>`,
        "I have 99 problems. <small>Actually, I have way more than that!</small>",
        "Some things just take getting used to. You\u{2019}ll get there eventually.",
        "Quote <span style=\"font-style:italic;text-decoration:underline;\">all</span> the things!",
        "Awesomesauce!",
        "Put a smile into your works!",
        "I occasionally dispense unsolicited advice. <small>Deal with it.</small>",
        "It smells like updog in here\u{2026} <small title=\"Nothing much, and you?\" style=\"text-decoration:underline dotted;\">(What\u{2019}s updog?)</small>",
        "Time flies like a banana. Fruit flies like an arrow. <small>\u{2026}Wait, what?</small>",
        "You wouldn\u{2019}t download a car. <small><a class=\"hidden\" href=\"https://www.turbosquid.com/3d-models/3d-dutch-bicycle-1916069\" target=\"_blank\">But maybe you\u{2019}d download a bike\u{2026}</a></small>",
        "&#x0054;&#x0072;&#x0061;&#x006E;&#x0073;&#x0020;&#x0072;&#x0069;&#x0067;&#x0068;&#x0074;&#x0073;&#x0021;&#x0020;&#x1F3F3;&#xFE0F;&#x200D;&#x26A7;&#xFE0F;",
        "Women fear me. Men fear me. Fish fear me. <small>I fear myself.</small>",
        "Don\u{2019}t do evil. Do funny!",
        "Would you still love me if I were a worm? <small>Oh, you don\u{2019}t love me\u{2026}</small>",
        "<em>Perchance!</em>",
        "The sky is your limit! <small>Unless you\u{2019}ve already left the atmosphere.</small>",
        "Please remember to wash your hands after using the toilet!",
        "Have you ever tried landscape painting?",
        "Why do I hear boss music? <small>Please help\u{2026}</small>",
        "Check the links below if you haven\u{2019}t already!",
        "<em>YUMP!</em>",
        "It\u{2019}s your time to shine!",
        [
            "Bazinga. \u{1F4A5}",
            "Bazingain\u{2019}t. \u{274C}"
        ],
        [
            "You\u{2019}re telling me a fry riced this shrimp? <small>Wait\u{2026}</small>",
            "You\u{2019}re telling me a rice fried this shrimp? <small>Wait\u{2026}</small>",
            "You\u{2019}re telling me a shrimp riced this fry? <small>Wait\u{2026}</small>",
            "You\u{2019}re telling me a rice shrimped this fry? <small>Wait\u{2026}</small>",
            "You\u{2019}re telling me a fry shrimped this rice? <small>Wait\u{2026}</small>",
        ],
        [
            "<span lang=\"pt-PT\">Podes falar comigo em portugu\u{EA}s!</span>",
            "<span lang=\"es-ES\">\u{A1}Puedes hablar conmigo en castellano!</span>",
            "<span lang=\"nl\">Je kunt met me praten in het Nederlands!</span>",
            "<span lang=\"pl\">Mo\u{17C}esz ze mn\u{105} m\u{F3}wi\u{107} po polsku!</span>",
        ],

        //// source engine
        // partial contribution by zydras
        [
            "<code>] sv_cheats 1</code>",
            "<code>] sv_cheats 0</code>"
        ],
        
        //// corru.observer
        "Psst! Check this out: <a href=\"https://corru.observer\" target=\"_blank\">a whole game you can play in your browser!</a>",
        "<code>INHERITED CONTEXT::'a wonderful page of secret and mystery'</code>",
        "<code>NOTICE::'memory stream terminated'</code>",

        //// ace attorney
        [
            "<p>Haven\u{2019}t played a Phoenix Wright game yet?</p><p><span style=\"font-weight:bold;font-style:italic;\">Hold it!</span> <a class=\"hidden\" href=\"https://www.ace-attorney.com/trilogy\" target=\"_blank\">You should try <em>Phoenix Wright: Ace Attorney Trilogy</em>!</a></p>",
            "<p>Haven\u{2019}t played a Phoenix Wright game yet?</p><p><span style=\"font-weight:bold;font-style:italic;\">Hold it!</span> <a class=\"hidden\" href=\"https://www.ace-attorney.com/great1-2\" target=\"_blank\">You should try <em>the Great Ace Attorney Chronicles</em>!</a></p>",
        ],

        //// d&d
        (el) => {
            let span1 = document.createElement("span");
            let span2 = document.createElement("span");
            span2.style.border = "2px solid var(--fg-color)";
            span2.style.visibility = "hidden";
            span2.style.borderRadius = "0.5em";
            span2.style.padding = "0.2em";
            span2.style.fontSize = "0.7em";
            span2.style.fontFamily = "var(--font-family)";
            let a = document.createElement("a");
            a.innerText = "Roll for initiative! ";
            let rolled;
            a.addEventListener("click", (ev) => {
                if (!rolled) {
                    rolled = true;
                    a.classList.add("disabled");
                    a.style.userSelect = "none";
                    const roll = rand(20) + 1;
                    span2.innerText = roll.toString();
                    span2.style.visibility = "initial";
                    if (roll === 20) {
                        span2.style.color = "#5c5";
                    } else if (roll === 1) {
                        span2.style.color = "#c55";
                    }
                }
                ev.preventDefault();
            });
            span1.appendChild(a);
            el.appendChild(span1);
            el.appendChild(span2);
        },

        //// other games
        "Thank you Mario! <a class=\"hidden\" href=\"https://nightshade.network/\" target=\"_blank\">But our princess is in another castle!</a>",

        //// meta
        // quote counter
        (el) => {
            let count = 0;
            for (const quote of cantharus.quotes.concat(pageLoadQuotes)) {
                if (Array.isArray(quote))
                {
                    count += quote.length;
                } else {
                    count++;
                }
            }

            let text;
            if (count === 0) {
                text = "Logic bomb!";
            } else if (count == 1) {
                text = "So, I was going to give you a fun fact about how many quotes there are, but apparently this is the only quote\u{2026}"
            } else {
                text = `Fun fact: there are ${numberFormat.format(count)} quotes for you to find!`;
                if (count < 10) {
                    text = text.concat(" <small>Well, that\u{2019}s not that many\u{2026}</small>");
                }
            }
            el.innerHTML = text;
        },
        // chance
        (el) => {
            const count = cantharus.quotes.length;
            let text;
            if (count < 2 || getVisitCount() < visitCountRequiredForFunny) {
                text = "Nothing to see here, move along\u{2026}";
            } else {
                const chance = (chanceForFunny * 100 / count).toPrecision(3).replace(/(?<!0)0+$/, "");
                text = `Fun fact: there is a ${chance}% chance of getting this quote as your first one.`;
                if (!lastQuote) {
                    text = text.concat(" <small>Looks like RNG is in your favour today!</small>");
                }
            }
            el.innerHTML = text;
        }
    ];

    //// CONTRIBUTED QUOTES
    // put your username after four slashes to create your section
    const contributedQuotes = [
        //// TheDustyBunny
        "\u{1F5FF}",
    ]

    otherQuotes = myQuotes.concat(contributedQuotes);
    cantharus.quotes = otherQuotes;

    let quotePool = [];
    let lastQuote;

    document.addEventListener("DOMContentLoaded", (ev) => {
        // TODO: remove when portfolio is made
        const portfolioLink = document.getElementById("link-portfolio");
        if (portfolioLink !== undefined) portfolioLink.addEventListener("click", (ev) => {
            alert("no portfolio yet... sorry...");
            ev.preventDefault();
        });
    
        // TODO: remove when games page is made
        const gamesLink = document.getElementById("link-games");
        if (gamesLink !== undefined) gamesLink.addEventListener("click", (ev) => {
            alert("no games yet... sorry...");
            ev.preventDefault();
        });

        const quoteElement = document.getElementById("quote");
        if (!quoteElement) {
            console.error("hey... i kinda need the #quote element to work properly...");
            return;
        }
    
        const quoteChangerAnchor = document.getElementById("quote-changer-anchor");
        if (!quoteChangerAnchor) {
            console.error("hey... i kinda need the #quote-changer-anchor element to work properly...");
            return;
        }
        // add text to the quote changer
        quoteChangerAnchor.innerText = "\u{2026}";
    
        // change the quote when the "new quote" button is clicked
        quoteChangerAnchor.addEventListener("click", (ev) => {
            changeQuote();
            ev.preventDefault();
        });

        // set up page load quote
        if (pageLoadQuotes.length === 0) {
            // this should never happen
            pageLoadQuotes.push("this should never happen :(");
        }
        let pageLoadQuote;
        const pageLoadQuotePool = cantharus.quotes.slice();
        if (sessionStorage.getItem("visited")) {
            if (Math.random() >= chanceForFunny) {
                pageLoadQuote = sampleArray(pageLoadQuotes);
            } else {
                if (pageLoadQuotePool.length > 0) {
                    pageLoadQuote = popRandom(pageLoadQuotePool);
                } else {
                    pageLoadQuote = sampleArray(pageLoadQuotes);
                }
            }
        } else {
            pageLoadQuote = sampleArray(pageLoadQuotes);
            sessionStorage.setItem("visited", "yeag");
        }
        
        quotePool = pageLoadQuotePool;
        setQuote(pageLoadQuote);
    });

    function getQuoteElement() {
        let el = document.getElementById("quote");

        if (el === undefined) {
            console.error("where did the #quote element go?? :(");
        } else {
            return el;
        }
    }

    function replaceQuoteInternal(el) {
        for (const child of el.children) {
            el.removeChild(child);
        }

        let newInternal = document.createElement("div");
        el.appendChild(newInternal);
        return newInternal;
    }

    function setQuote(quote) {
        let el = getQuoteElement();
        if (el === undefined) return;

        let newInternal = replaceQuoteInternal(el);
        if (typeof(quote) === "function") {
            quote(newInternal);
        } else if (Array.isArray(quote)) {
            quote = sampleArray(quote);
            setQuote(quote);
        } else {
            newInternal.innerHTML = quote;
        }
    }

    function changeQuote() {
        if (quotePool.length === 0) {
            refreshQuotePool();
        }

        if (quotePool.length == 0) {
            console.error("apparently there aren't any quotes?");
            return;
        }

        let quote = popRandom(quotePool);
        if (quotePool.length > 0 && quote === lastQuote) {
            quote = popRandom(quotePool);
            quotePool.push(lastQuote);
        }
        lastQuote = quote;
        setQuote(quote);
    }

    function refreshQuotePool() {
        quotePool = cantharus.quotes.slice();
    }

    function rand(max) {
        return Math.floor(Math.random() * max);
    }

    function sampleArrayIndex(array) {
        return rand(array.length);
    }

    function sampleArray(array) {
        return array[sampleArrayIndex(array)];
    }

    function popAt(array, index) {
        return array.splice(index, 1)[0];
    }

    function popRandom(array) {
        return popAt(array, sampleArrayIndex(array));
    }

    function getVisitCount() {
        return Number(localStorage.getItem("visitcount"));
    }
})();