const getIterativeNumber = (num:number): number => {
    let result = 0
    for (let i=0; i<= num; i++) {
        result = i
        console.log(result);
    } 
    return result
    
}
const printRecursiveNumberCrescent = (num:number) => {
    if (num < 0) {
        return 0;
    }
    const result =  printRecursiveNumberCrescent(num - 1)
    console.log(num)
}

printRecursiveNumberCrescent(4)

const printRecursiveNumberDecrescent = (num:number)=> {
    if (num < 0) {
        return 0;
    }
    console.log(num)
    const result =   printRecursiveNumberDecrescent(num-1)
    
}

printRecursiveNumberDecrescent(4)