const matrix = require('./matrix');
const { columnToPatterns, saveToJSON } = require('./helpers');

console.log('Generating matrix...');

//  Define an object for all possible patterns according to matrix
const allPatternsAndStatuses = {};

//  Loop through status in matrix and create possible patterns for each status
for(let status in matrix) 
    for(let column of matrix[status]) 
        columnToPatterns(column).forEach( pattern =>  allPatternsAndStatuses[pattern] = status );

//  Export Data to a file
saveToJSON('./patterns.json', allPatternsAndStatuses);