
const getIterativeSum = (num:number): number => {
    
    let result = 0
    for (let i= 0; i <= num; i++) {
        result = i*((i+1)/2)
        
    }
    
    return result
}

console.log(getIterativeSum(6))
