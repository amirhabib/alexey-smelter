import matrix from './matrix/default.js';
import helpers from './helpers/default.js';

console.log('Generating matrix...');

//  Define an object for all possible patterns according to matrix
const allPatternsAndStatuses = {};

//  Loop through status in matrix and create possible patterns for each status
for(let status in matrix) 
    for(let column of matrix[status]) 
        helpers.mapPatterns(column).forEach( pattern =>  allPatternsAndStatuses[pattern] = status );

//  Export Data to a file
helpers.saveToJSON('./patterns.json', allPatternsAndStatuses);

export default { }