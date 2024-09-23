/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    
let largest = -999999;
if(numbers.length === 0){
    return undefined
}
    for(let i = 0;i<numbers.length;i++){

       
        if(numbers[i] > largest){
            largest = numbers[i];
        }
    }

    return largest;


}

module.exports = findLargestElement;