const fs = require('fs');


/**
 *  --------------------------------------------------------------------
 *    Cartesian product of multiple arrays
 *  -------------------------------------------------------------------- 
 * */ 

const cartesian =
  (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));





/**
 *  --------------------------------------------------------------------
 *    Combine all possible answers into several variations
 *  -------------------------------------------------------------------- 
 * */  

let columnToPatterns = column => {

    //  Possible answers of the current question
    let answers = [];
    for(let question in column) 
        answers.push( column[question] );

    return cartesian(...answers).map( pattern => pattern.join('') )
}






/**
 *  --------------------------------------------------------------------
 *    Save data to a file
 *  -------------------------------------------------------------------- 
 * */

let saveToJSON = (fileName, data) => {
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
}


/**
 *  --------------------------------------------------------------------
 *    Exports
 *  -------------------------------------------------------------------- 
 * */

module.exports = {
    columnToPatterns,
    saveToJSON
}