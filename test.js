//radix sort 
const getDigit = (num, digit)=> Math.floor(num/(Math.pow(10, digit))%10); 
const digitCount = num => Math.floor(Math.log10(num)+1);
const maxDigit = arr=>{
    let max=0;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, digitCount(arr[i]))        
    }
    return max;
}

function radixSort(arr){
    let maxDigitElement = maxDigit(arr) ;
    let digitBucket;

    for (let i = 0; i < maxDigitElement; i++) {  
        digitBucket = Array.from({length:10}, () =>[]); 
        for (let j = 0; j < arr.length; j++) {   
            digitBucket[getDigit(arr[j], i)].push(arr[j]);       
        }   
        arr= [].concat(...digitBucket) 
    }
    return arr;
}

const mergeArr =(arr1, arr2)=>{
    if(!arr1.length) return arr2;
    if(!arr2.length) return arr1;
    let result =[];
    let i=0, j=0; 
    while(arr1.length>i && arr2.length > j){
        if(arr2[j]>arr1[i]){
            result.push(arr1[i]); 
            i++; 
        } else{
            result.push(arr2[j]);
            j++;
        }
    }
    while(arr1.length>i){
        result.push(arr1[i]);
        i++;
    }
    while(arr2.length>j){
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function merSort(arr){
    if(arr.length===1) return arr; 
    let mid = Math.floor(arr.length/2); 
    let leftArr = merSort(arr.slice(0,mid)); 
    let rightArr = merSort(arr.slice(mid));
    console.log(mid)
    return mergeArr(leftArr, rightArr);
}

function pivot(arr, start=0, end=arr.length){
    let swapIdx = start; 
    const swap = (arr, i, j) => {
        let temp = arr[i]; 
        arr[i] = arr[j]; 
        arr[j] = temp; 
    }
    for(let i = start+1; i<arr.length; i++){
        if(arr[start]>arr[i]){
            swapIdx++; 
            swap(arr, i, swapIdx)
        }
    }
    // for(let i=start+1; i<arr.length; i++){
    //     if(arr[start]>arr[i]){
    //      swapIdx++;
    //      swap(arr, i, swapIdx)
    //     }
    // }
    swap(arr, swapIdx, start); 
    return swapIdx;
}

function quickSort(arr, start = 0, end = arr.length){
    if(start < end){
        let pivotIndex = pivot(arr, start, end); 
        quickSort(arr, start, pivotIndex-1); 
        quickSort(arr, pivotIndex+1, end); 
        return arr;
    }
}

// console.log(radixSort([34,5454,25545,2, 954]))
console.log(quickSort([2,41,5,61,7]))