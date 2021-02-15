/**
 *  --------------------------------------------------------------------
 *    Cartesian product of multiple arrays
 *  -------------------------------------------------------------------- 
 * */ 

const cartesian =
  (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())))


export default cartesian
