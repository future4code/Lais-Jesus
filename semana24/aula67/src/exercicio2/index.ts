
const getRecursiveSum = (num:number): number => {
    if (num < 0) {
        return 0;
    }
    const result = num + getRecursiveSum(num - 1)
    
    return result
}

console.log(getRecursiveSum(5))

