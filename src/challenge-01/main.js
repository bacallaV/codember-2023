import fs from 'fs';

const words = Array();
fs.readFile('src/challenge-01/data/data.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log(`${new Date()}\tData loaded successfully ✅`);
    data.toLowerCase();
    words.push( ...data.split(' ') );

    const wordsAccumulation = getWordsAccumulation( words );
    const result = getResult( wordsAccumulation );

    console.log(`${new Date()}\t${result}`);
})

function getWordsAccumulation( data ) {
    const wordsAccumulation = Array();
    for (const word of words) {
        const indexWordCoincidence = wordsAccumulation.findIndex( wordAccumulated => wordAccumulated.name == word );

        if( indexWordCoincidence === -1 ) {
            wordsAccumulation.push({
                name: word,
                quantity: 1,
            });

            continue;
        }

        wordsAccumulation[ indexWordCoincidence ].quantity++;
    }

    return wordsAccumulation;
}

function getResult( wordsAccumulation ) {
    return wordsAccumulation.reduce( (accumulation, wordAccumulated) => accumulation += `${wordAccumulated.name}${wordAccumulated.quantity}`, '' );
}