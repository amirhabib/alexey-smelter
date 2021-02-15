import cartesian from './cartesian.js'

/**
 *  --------------------------------------------------------------------
 *    Map a given column into all possible pattern varriations
 *  -------------------------------------------------------------------- 
 * */  

export default column => {

    //  Possible answers of the current question
    let answers = [];
    for(let question in column) 
        answers.push( column[question] )

    return cartesian(...answers).map( pattern => pattern.join('') )
};