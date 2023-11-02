/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * initial color list 1 and give the value  red, blud, green
 *  initial color list 2 and give the value white and black
 * initial color and combine the color list 1 and color list 2
 * console log the result and wirte the result.
 */
var colorList1 = ['red', 'blue', 'green'];
var colorList2 = ['white', 'black'];
var color = colorList1.concat(colorList2);
console.log(color); // 'red', 'blue', 'green', 'white', 'black'



/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * initial the 2 dimensions array, and put follow information
 *  Hong Kong       China       Asia
 *  Vancouver       Canada      North American
 * 
 * console log the sentence like '__Hong Kong__ is in the __China__ and __China__ in the __Asia__'
 */

var city = [
    ['Hong Kong', 'China', 'Asia'],
    ['Vancouver', 'Canada', 'North American']
];
console.log(`%s is in the %s and %s in the %s`, city[0][0], city[0][1], city[0][1], city[0][2]); //Hong Kong is in the China and China in the Asia
