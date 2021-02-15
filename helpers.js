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
 *    Cominate all possible answers into severa variations
 *  -------------------------------------------------------------------- 
 * */  

let columnToPatterns = option => {

    //  Possible patterns of the current question
    let patterns = [];
    for(let question in option) 
        patterns.push( option[question] );

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