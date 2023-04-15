(() => {
    "use strict";
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
    
    // quotes that show on page load go here
    const pageLoadQuotes = [
        "Welcome to my humble abode!",
        "Greetings!",
        "Hello there!",
        "Hey, how are you?",
        "What will you do today?",
        "So, how are you holding up?",
        quote_informalGreetings,
        quote_clock,
    ];

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
        "Hiiii!",
    ];

    function quote_informalGreetings(el) {
        if (getVisitCount() > 3) {
            el.innerText = sampleArray(informalGreetings);
        } else {
            el.innerText = "How are things going for you today?";
        }
    }

    function quote_clock(el) {
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
    }
    
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
        "My favourite drink is peach iced tea.",
        `Want to add a quote here? <a href=\"${prUrl}\" target=\"_blank\">Submit a pull request!</a>`,
        "I have 99 problems. <small>Actually, I have way more than that!</small>",
        "Some things just take getting used to. You\u{2019}ll get there eventually.",
        "Quote <span style=\"font-style:italic;text-decoration:underline;\">all</span> the things!",
        "<em>Awesomesauce!</em>",
        "Put a smile into your works!",
        "I occasionally dispense unsolicited advice. <small>Deal with it.</small>",
        "It smells like updog in here\u{2026} <small title=\"Nothing much, and you?\" style=\"text-decoration:underline dotted;\">(What\u{2019}s updog?)</small>",
        "Time flies like a banana. Fruit flies like an arrow. <small>\u{2026}Wait, what?</small>",
        "You wouldn\u{2019}t download a car. <small><a class=\"secret\" href=\"https://www.turbosquid.com/3d-models/3d-dutch-bicycle-1916069\" target=\"_blank\">But maybe you\u{2019}d download a bike\u{2026}</a></small>",
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
        "Best of luck in your endeavours future and present!",
        "Statistically speaking, I don\u{2019}t exist.",
        "Fish.",
        "Heh, it says \u{201C}<span style=\"font-variant-caps:small-caps;\">GULLIBLE</span>\u{201D} on the ceiling.",
        "So long, and thanks for all the fish.",
        "What would you do with \u{A3}1,000,000? <small>Personally, I would buy lots of weird computers.</small>",
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
            "<code>] sv_cheats 0</code>",
            "<code>] cl_showpos 1</code>",
            "<a class=\"secret\" href=\"#\" onclick=\"window.history.go();\"><code>] retry</code></a>",
            "<code>] net_graph 1</code>",
            "<code>] mat_wireframe 1</code>",
            "<code>] god</code>",
            "<code>] noclip</code>",
            "<code>] disconnect</code>",
        ],
        
        //// corru.observer
        quote_cobMoth,
        "<code>INHERITED CONTEXT::'a wonderful page of secret and mystery'</code>",
        [
            "<code>NOTICE::'memory stream located'</code>",
            "<code>NOTICE::'memory stream terminated'</code>",
        ],

        //// ace attorney
        [
            "<p>Haven\u{2019}t played a Phoenix Wright game yet?</p><p><span style=\"font-weight:bold;font-style:italic;\">Hold it!</span> <a href=\"https://www.ace-attorney.com/trilogy\" target=\"_blank\">You should try <em>Phoenix Wright: Ace Attorney Trilogy</em>!</a></p>",
            "<p>Haven\u{2019}t played a Phoenix Wright game yet?</p><p><span style=\"font-weight:bold;font-style:italic;\">Hold it!</span> <a href=\"https://www.ace-attorney.com/great1-2\" target=\"_blank\">You should try <em>the Great Ace Attorney Chronicles</em>!</a></p>",
        ],

        //// d&d
        quote_rollForInitiative,

        //// other games
        "Thank you Mario! <a class=\"secret\" href=\"https://nightshade.network/\" target=\"_blank\">But our princess is in another castle!</a>",
        "Stout Shako for 6 refined! <small>(Blame inflation for that one.)</small>",
        "\u{26A0} Something is creating script errors",
        "Would you kindly click the \"change the quote\" button?",
        "I used to be an adventurer like you, until the guild struck my name out for accusations of fraud. <small>I didn\u{2019}t do anything wrong, I swear!</small>",
        "Wake up and smell the ashes.",
        "About that beer I owed ya\u{2026} <small>Oops, I drank it\u{2026}</small>",
        "Tell me. For whom do you fight? <small>\u{2026}Hmph. How very\u{2026} respectable.</small>",
        "Gotta go fast!",

        //// programming
        "<code>while (true)</code>? Give me a <code>break<code>\u{2026}",
        "99 bottles of grape juice on the wall, 99 bottles of grape juice. <small>A Prohibitionist wrote this one.</small>",

        //// meta
        quote_quoteCounter,
        quote_rng,
    ];

    function quote_rollForInitiative(el) {
        // create virtual parent
        const parent = document.createElement("div");
        // this is such a dirty hack
        {
            const parentStyle = document.createElement("style");
            parentStyle.appendChild(document.createTextNode("a.stop-it, a.stop-it:hover { color: #999; text-decoration: none; }"));
            parent.appendChild(parentStyle);
        }

        // create link
        const link = document.createElement("a");
        link.appendChild(document.createTextNode("Roll for initiative!"));
        link.classList.add("secret");
        link.style.fontStyle = "italic";
        link.style.cursor = "pointer";
        parent.appendChild(link);

        link.addEventListener("click", handleRollClick);

        el.appendChild(parent);

        function handleRollClick(ev) {
            // make sure you can't click it twice
            ev.preventDefault();
            link.removeEventListener("click", handleRollClick);
            link.classList.add("stop-it");
            link.style.cursor = "not-allowed";

            const anim = link.animate([{opacity: "initial"}, {opacity: "0"}], 500);
            anim.addEventListener("finish", (_) => {
                if (!link.parentElement) {
                    return;
                }
                link.remove();

                // create roll
                const roll = rand(20) + 1;
                let rollColor;
                switch (roll) {
                    case 20:
                        rollColor = "#4c4";
                        break;
                    case 1:
                        rollColor = "#c44";
                        break;
                    default:
                        rollColor = "var(--foreground-color)";
                        break;
                }

                const rollOuter = document.createElement("div");
                rollOuter.style.display = "flex";
                rollOuter.style.width = rollOuter.style.height = "1.5em";
                rollOuter.style.alignItems = "center";
                rollOuter.style.justifyContent = "center";
                rollOuter.style.fontFamily = "var(--sans-serif-font-family)";
                rollOuter.style.fontSize = "0.8rem";
                rollOuter.style.borderWidth = "2pt";
                rollOuter.style.borderStyle = "solid";
                rollOuter.style.borderColor = rollColor;
                rollOuter.style.borderRadius = "10%";
                
                const rollInner = document.createElement("div");
                rollInner.appendChild(document.createTextNode(roll.toString()));
                rollInner.style.color = rollColor;
                rollInner.style.lineHeight = "0";
                
                rollOuter.appendChild(rollInner);
                parent.appendChild(rollOuter);

                rollOuter.animate([{opacity: "0"}, {opacity: "initial"}], 500);
            });
        }
    }

    // stylesheets adapted from the source: https://corru.observer/css/corru.css
    function quote_cobMoth(el) {
        const fonts = document.createElement("style");
        fonts.appendChild(document.createTextNode(`
        @font-face {
            font-family: 'corru-barcodetext';
            src: url('https://corru.observer/fonts/LibreBarcode128Text-Regular.woff2') format('woff2'),
                url('https://corru.observer/fonts/LibreBarcode128Text-Regular.woff') format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        @font-face {
            font-family: 'corru-spacemono';
            src: url('https://corru.observer/fonts/SpaceMono-Regular.woff2') format('woff2'),
                url('https://corru.observer/fonts/SpaceMono-Regular.woff') format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        @font-face {
            font-family: 'corru-spacemono';
            src: url('https://corru.observer/fonts/SpaceMono-Bold.woff2') format('woff2'),
                url('https://corru.observer/fonts/SpaceMono-Bold.woff') format('woff');
            font-weight: bold;
            font-style: normal;
            font-display: swap;
        }`));
        el.appendChild(fonts);
        const shadow = el.attachShadow({ mode: "open" });

        const style = document.createElement("style");
        style.appendChild(document.createTextNode(`
        * {box-sizing: border-box}
        a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}  
        ::selection {
            background-color: transparent;
            color: inherit;
        }
        a, a:hover {
            text-decoration: none;
        }
        .corru-root { 
            --dark-color: black;
            --friend-color: #00ffff;
            --rem: 16px;
            width: 384px;
            padding: 15vh calc(0.5 * var(--rem)) 0;
            font-family: corru-spacemono;
            font-size: 12px;
            image-rendering: pixelated;
            text-align: left;
            user-select: none;
        }
        .corru-root .message {
            overflow: hidden;
            background: var(--dark-color);
            border: 1px solid;
            border-color: inherit;
            padding: calc(0.75 * var(--rem)) calc(0.5 * var(--rem));
            margin-bottom: calc(0.75 * var(--rem));
            line-height: 1.25em;
            border-color: var(--friend-color);
            color: var(--friend-color);
        }
        .corru-root .message p {
            width: 100%;
        }
        .corru-root .message h2 {
            font-size: 2.5em;
            line-height: 1em;
            margin-bottom: calc(0.3 * var(--rem));
            border-bottom: 1px solid;
            padding-bottom: 0.15em;
            width: 102%;    
            font-family: corru-barcodetext;
            text-transform: uppercase;
            white-space: nowrap;
            letter-spacing: normal !important;
        }
        .corru-root .message img {
            float: left;
            width: calc(3.5 * var(--rem));
            height: calc(3.5 * var(--rem));
            margin-right: calc(0.5 * var(--rem));
            border: 1px solid;
            border-color: inherit;
            background-color: black;
            object-fit: none;
        }
        `));
        shadow.appendChild(style);

        const link = document.createElement("a");
        link.href = "https://corru.observer/";
        link.target = "_blank";
        link.title = "click here to play corru.observer";
        shadow.appendChild(link);

        const corruRoot = document.createElement("div");
        corruRoot.classList.add("corru-root");
        link.appendChild(corruRoot);

        const corruMessage = document.createElement("div");
        corruMessage.classList.add("message");
        corruRoot.appendChild(corruMessage);

        const messageImg = document.createElement("img");
        messageImg.setAttribute("src", "https://corru.observer/img/blank.gif");
        messageImg.setAttribute("style", "background:url(https://corru.observer/img/sprites/moth/mothman.gif) white;background-size:165%;background-position:center top;");
        corruMessage.appendChild(messageImg);

        const messageH2 = document.createElement("h2");
        messageH2.appendChild(document.createTextNode("!!__moth__!!"));
        corruMessage.appendChild(messageH2);

        const messageP = document.createElement("p");
        messageP.appendChild(document.createTextNode("hey buddy, wanna play a game?"));
        corruMessage.appendChild(messageP);
    }

    function quote_quoteCounter(el) {
        const count = countQuotes();
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
    }

    function quote_rng(el) {
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

    function countQuotes() {
        let count = 0;
        for (const quote of cantharus.quotes.concat(pageLoadQuotes)) {
            if (Array.isArray(quote))
            {
                count += quote.length;
            } else if (quote === quote_informalGreetings) {
                count += informalGreetings.length;
            } else if (quote === quote_clock) {
                count += 5;
            } else if (quote === quote_rng) {
                count += 2;
            } else {
                count++;
            }
        }
        return count;
    }

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

    document.addEventListener("DOMContentLoaded", (_) => {
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

        // show the quote changer
        quoteChangerAnchor.classList.remove("hidden");
    
        // change the quote when the "new quote" button is clicked
        quoteChangerAnchor.addEventListener("click", (ev) => {
            ev.preventDefault();
            changeQuote();
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
