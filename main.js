const statuses = require('./statuses');
const fs = require('fs');

console.log('Generating matrix...');

//  Define answers array for all possible options
const patterns = {};

let combinate = option => {

    let answers = [];
    let variations = [];

    for(let question in option) 
        answers.push( option[question] );

     for(let q1 of answers[0])
        for(let q2 of answers[1]) 
            for(let q3 of answers[2])
                for(let q4 of answers[3])
                    for(let q5 of answers[4])
                        for(let q6 of answers[5])
                            for(let q7 of answers[6])
                                for(let q8 of answers[7])
                                    for(let smelter of answers[8])
                                        variations.push(q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + smelter);

    return variations;
}

let getStatus = pattern => patterns[pattern];

for(let status in statuses) {

    //  Go through options
    let options = [];

    for(let option of statuses[status]) {
        let options = combinate(option);    
        for(let key of options)
            patterns[key] = status;
    }
        
}

//  Export Data to a file
fs.writeFileSync('./patterns.json', JSON.stringify(patterns, null, 2));
