//frequency counter in string

// function freq(str){
// let result ={};
// for(let char of str){
//     result[char]>0?result[char]++:
//      result[char]=1;
// }
// return result;
// }

//check if values of array1([4,81,36,121]) are matched with square values of array2([9,2,6,11])

// function matchPattern(arr1, arr2) {
//     if(arr1.length!==arr2.length) return 'invalid array';
//     for (let i = 0; i < arr1.length; i++) {
//         let x=arr1.iOf(arr2[i]*arr2[i]);
//      if(x<0){
//          return 'not matched';
//      } 
//      arr1.splice(x, 1)
//      console.log(arr1)
//     }
//   return true;
// }

// function matchPattern(arr1, arr2){
//     var store={}
//     for (let i = 0; i < arr2.length; i++) {
//         let x =arr2[1]*arr2[i];
//         store[x]=1;
//         // console.log(store)
//     }
//     for (let i = 0; i < arr1.length; i++) {
//      if(store[i]){
//          store[i]--;
//         } else{
//             return false;
//         }
         
//     }
//     return true;
// }

// function sum0(arr){
//     var left= 0; 
//     var right= arr.length-1;
//     while(left<right){
//       let sum=arr[left]+arr[right];
//       if(sum==0){
//         return [arr[left], arr[right]];
//       }else if(sum >0)  {
//         right --;
//       } else{
//         left ++;
//       }
//     }
//   }

// function uniqueCounter(array){
// let result ={};
// for (let i = 0; i < array.length; i++) {
//     let char = array[i];
// result[char]?result[char]++:result[char]=1;  
// }
// newArray = Object.keys(result)
// }

// function maxsubarr(arr, n){
//     let max=0;
//     let tempMax = 0;
//     for (let i = 0; i<n; i++) {
//         max= max+arr[i];
//     }
//     tempMax=max;
//    for (let i = n; i < arr.length; i++) {
//        tempMax = tempMax + arr[i] -arr[i-n];
//        max=Math.max(tempMax, max)
//    }
//    return max;
  
// }

//odd values in array using recursion
// function odd(arr){
    // var newArray = []
    // function oddHelper(arrHelper) {
    //     if(arrHelper.length==0) return ;
    //     if(arrHelper[0]%2 ==1){
    //         newArray.push(arrHelper[0])
    //     } 

    //      oddHelper(arrHelper.slice(1))
    //     return newArray
    // }
//     oddHelper(arr);
//     return newArray;
// }

//swap array value
// function swapValue(arr, index1, index2){
//     // let temp = arr[index1];
//     // arr[index1]=arr[index2];
//     // arr[index2]=temp;
//    [arr[index1], arr[index2]]=[arr[index2], arr[index1]]
//     return arr;
// }
// console.log(swapValue([3,7, 2,10], 1, 3))

//bubble sort [3,5,1,8,0]
// function bubbleSort(arr){
//     for (let i = arr.length; i>0; i--) {
//         for (let j = 0; j < i-1; j++) {
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] =arr[j+1];
//                 arr[j+1]= temp; 
//             }
//         }
//     }
//     return arr;
// }

//selection sort [3,0, 5,1,8]
// function selectionSort(array){
// const swapValue=(arr, i, j)=>[arr[i], arr[j]]=[arr[j], arr[i]];
// for (let i = 0; i < array.length; i++) {
//    var lowest =i;
//    for (let j = i+1; j < array.length; j++) {
//       if(array[j]<array[lowest]){
//           lowest=j; //lowest=0,1,1,1,1
//       }
     
//    }  
//    swapValue(array, lowest, i);
// }
// return array;
// }

//merge sort [3,0,5,1,8]
// function mergeArr(arr1, arr2){
//     let i=0, j=0, result=[];
//     while(i<arr1.length&&j<arr2.length){
//         if (arr1[i]<arr2[j]) {
//             result.push(arr1[i]);
//             i++;
//         } else {
//             result.push(arr2[j]);
//             j++;
//         }
//     }
//     while(i<arr1.length){
//         result.push(arr1[i]);
//         i++;
//     }
//     while(j<arr2.length){
//         result.push(arr2[j]);
//         j++;
//     }
//     return result;
// }

// function mergerSort(arr){
//     if(arr.length<=1) return arr;
//     let mid= Math.floor(arr.length/2);
//     let leftArr=mergerSort(arr.slice(0, mid));
//     let rightArr=mergerSort(arr.slice(mid))
//     return mergeArr(leftArr, rightArr);
// }

//quick sort [3,0,5,1,8] 

function pivot(arr,start=0){ 
    let swapidx = start;;
    let swap = (arr, idx1, idx2) => [arr[idx1],arr[idx2]]= [arr[idx2],arr[idx1]];
    for(let i=start+1; i<arr.length; i++){
        if(arr[start]>arr[i]){
         swapidx++;
        //  swap(arr, i, swapidx)
        }
    }
    swap(arr, start, swapidx);
   return swapidx;
}
function quickSort(arr,start=0, end=arr.length){
    if(start<end){
    let pivotIndex = pivot(arr, start);
    console.log(pivotIndex)
    quickSort(arr,start,pivotIndex-1); 
    quickSort(arr,pivotIndex+1, end);
    }
    return arr;
}

//->[5,0,3,1,8]->[1,0,3,5,8]->[0,1,3,5,8]
console.log(quickSort([3,0,5,1,8]))

