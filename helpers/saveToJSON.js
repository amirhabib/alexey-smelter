import fs from 'fs';

/**
 *  --------------------------------------------------------------------
 *    Save data to a file
 *  -------------------------------------------------------------------- 
 * */

export default (fileName, data) => {
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2))
};