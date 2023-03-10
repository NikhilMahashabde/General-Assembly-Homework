function pluraliser(word, quantity){

    const irregularPlurals = {
        foot: "feet",
        tooth: "teeth",
        goose: "geese",
        mouse: "mice",
        man: "men",
        woman: "women",
        sheep: "sheep",
        fish: "fish",
    };

    if (quantity > 1 || quantity == 0) {
        console.log(irregularPlurals[word] ? `${quantity} ${irregularPlurals[word]}` : `${quantity} ${word}s`);
    } else if (quantity ==  1 ) {
        console.log(`1 ${word}`);
    } else {
        console.log("invalid input");
    }
}

pluraliser("table",0);

