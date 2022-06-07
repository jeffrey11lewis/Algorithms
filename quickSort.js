//https://www.youtube.com/watch?v=P6XGSKO2RzI
//O(nlog(n))
const start = Date.now();
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
arrayToSort = Array.from({length: 99999}, () => Math.floor(Math.random() * 400));

listToSort = quickSort(arrayToSort);

const duration = Date.now() - start;
console.log("Sorted Array in ", duration, "milliseconds", listToSort);

/* take pivot number

divide one side vs other side


*/
