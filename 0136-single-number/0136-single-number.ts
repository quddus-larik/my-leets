function singleNumber(nums: number[]): number {
    let temp: number = 0;

    for(const num of nums){
        temp ^= num
    }

    return temp;
};