arrayToSort = Array.from({length: 999999}, () => Math.floor(Math.random() * 400));

const average = (array) => array.reduce((a, b) => a + b) / array.length;

iterations = 10


function timeMerge(){
    mergeArray = [];
    for (let i = 0; i < iterations; i++) {
    var start = Date.now();
    mergeSortReturnTime(arrayToSort);
    var mergeDuration = Date.now() - start;
    console.log("mergeSort took ", mergeDuration, "milliseconds");
    mergeArray.push(mergeDuration);
    }
    //console.log("The average time it took mergeSort to process was ",average(mergeArray), "milliseconds");
   

}

function timeQuick(){
    quickArray = [];
    for (let i = 0; i < iterations; i++) {
    var start = Date.now();
    quickSortReturnTime(arrayToSort);
    var quickDuration = Date.now() - start;
    console.log("quickSort took ", quickDuration, "milliseconds");
    quickArray.push(quickDuration);

    }
    //console.log("The average Time it took quickSort to process was ", average(quickArray), "milliseconds")
}


function mergeSortReturnTime(arrayToSort){


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
 return[...output, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)];
};

const mergeSort =  array => {

    if (array.length <= 1){
        return array;
    }

    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0,middleIndex);
    const rightArray = array.slice(middleIndex, array.length);

    return merge(
        mergeSort(leftArray),
        mergeSort(rightArray)
    );
};


listToSort = mergeSort(arrayToSort);
console.log("mergeSort Sorted:", listToSort);


}



function quickSortReturnTime(arrayToSort){
    function quickSort(array){
        const start = Date.now();
        if(array.length == 1){
            return array;
    
        }
    
    const pivot = array[array.length - 1];
    const leftArray = [];
    const rightArray = [];
    
    for(let i = 0; i<array.length - 1; i++){
        if (array[i] < pivot) {
            leftArray.push(array[i]);
        }
        else{
    
        rightArray.push(array[i]);
    
        }
    
    }
    if (leftArray.length > 0 && rightArray.length > 0){
        return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
    
    }
    else if (leftArray.length > 0){
        return [...quickSort(leftArray), pivot];
    
    }
    else {
        return [pivot, ...quickSort(rightArray)];
    }
        
    
    }
    
    listToSort = quickSort(arrayToSort);
    console.log("quickSort Sorted:", listToSort);
}

timeMerge();
timeQuick();
console.log("The average time it took mergeSort to process was ",average(mergeArray), "milliseconds");
console.log("The average Time it took quickSort to process was ", average(quickArray), "milliseconds")