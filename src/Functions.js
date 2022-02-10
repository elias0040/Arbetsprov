
/** getCityBanner
 * 
 * @param {*} population Population for given city 
 * @returns Address for banner depending on city population
 */

export function getCityBanner(population){
    if(population < 20000) return require('./assets/pop1.png');

    if(population < 100000) return require('./assets/pop2.png');

    if(population < 500000) return require('./assets/pop3.png');

    if(population < 1000000) return require('./assets/pop4.png');

    if(population < 5000000) return require('./assets/pop5.png');

    if(population > 5000000) return require('./assets/pop6.png');
}