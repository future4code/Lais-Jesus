
const printArrayRecursive = (arr: number[], index: number=0): any => {
    if(index === arr.length){
            return;
    }
    console.log(arr[index]); 
    printArrayRecursive(arr, index+1);
    
}
const array = [0, 5, 6, 87,58,98]
printArrayRecursive(array)