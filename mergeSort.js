//https://www.youtube.com/watch?v=x_Z9FcAPmbk
//O(nlog(n))

arrayToSort = Array.from({length: 9999999}, () => Math.floor(Math.random() * 400));
//console.log(arrayToSort);

//start timer
const start = Date.now();


const merge = (leftArray, rightArray) => {
const output = [];
let leftIndex = 0;
let rightIndex = 0;

while(leftIndex < leftArray.length && rightIndex < rightArray.length){
const leftEl = leftArray[leftIndex];
const rightEl = rightArray[rightIndex];

if(leftEl < rightEl) {
    output.push(leftEl);
    leftIndex++;
}
    else{
        output.push(rightEl);
        rightIndex++;

    
}
 }
//spread into comma separated values
 return[...output, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)];
};


//arrow function is fun
const mergeSort =  array => {

    if (array.length <= 1){
        return array;
    }

    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0,middleIndex);
    const rightArray = array.slice(middleIndex, array.length); //guy said array.length not necessary

    return merge(
        mergeSort(leftArray),
        mergeSort(rightArray)
    );
};


listToSort = mergeSort(arrayToSort);

const duration = Date.now() - start;
console.log("Sorted Array in ", duration, "milliseconds", listToSort);




/* array is going to be split in half over and over

eventually, all are separate arrays

once they are separated, they are compared to each other to determine if switch

then, those arrays are merged into each other / swapped until all are sorted

*/

