const quotes = [
    "hello!",
    "doing the things that can be done",
    "eats breakfast for dinner",
    "adrenaline is pumping",
    "hey there! how’re you doing?",
    "no aliens in space keeps the status quo in place",
    "i have many things to say, yet i will not say them",
    "never gonna give you up",
    "why do they call it oven when you of in…",
    "hey, ho, let’s go",
    "the height bug connoisseur",
    "modern art is certainly appreciable",
    "comprehension is not my fortissimo",
    "green ovum and meat substitute",
    "what’s the difference between a lemon and a melon?",
    "no snitching, please",
    "cat cafés and restaurants",
    "i hope you have a great day today",
    "i’m allergic to yaml",
    "System.Console.WriteLine(\"hire me, i need a job\");",
    "R.I.P. grandma. i’ll miss you dearly",
    "this page has an extreme lack of finesse",
    "“pack a punch”? how does one pack the nonphysical?",
    "don’t forget to write your semicolons",
    "ÿþpardon my byte order mark",
    "it’s been one week since i’ve done anything",
    "cantharus (cantharus)",
    "we stan the unlikely king",
    "wassuuuuuuuup?",
    "the game",
    "some of these quotes are really long. this one is one of those",
    "all new pizza and pasta delivery service",
    "would you like to partake in some Central European cheese age estimating?",
    "with all this knowledge we are still none the wiser",
    "Betamax was a mistake",
    "shoutouts to SimpleFlips",
    "we’re going surfing on the Internet!",
    "i don’t speak Haskell, but i’m working on it",
    "college wasn’t very kind to me",
    "i used to have an elevator here. heh.",
    "world 7 is the best world in New Super Mario Bros. for the Nintendo DS",
    "conspicuously, the topic of this quote is self-referential",
    "from __future__ import timetravel",
    "engineer gaming engineer gaming"
];

let noRepeats = [];

function getRandomQuote() {
    if (noRepeats.length === 0)
        noRepeats = quotes.slice(0);
    let index = Math.floor(Math.random() * noRepeats.length);
    return noRepeats.splice(index, 1);
}

function chooseQuote() {
    let tagline = document.getElementById("tagline");
    tagline.innerText = getRandomQuote();
}

document.getElementById("randomizer").addEventListener("click", chooseQuote);
chooseQuote();
