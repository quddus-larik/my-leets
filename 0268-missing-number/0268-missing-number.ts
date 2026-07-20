function missingNumber(nums: number[]): number {
    let n: number = nums.length;
    let Sum: number = nums.reduce((acc,num)=> acc + num,0);
    let expectedSum: number = n * (n + 1) / 2;
    
    return expectedSum - Sum;
};