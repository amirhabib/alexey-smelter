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

    //  Possible patterns of the current question
    let patterns = [];
    for(let question in column) 
        patterns.push( column[question] );

    return cartesian(...patterns).map( pattern => pattern.join('') )
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