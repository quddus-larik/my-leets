function singleNumber(nums: number[]): number {
    let temp: number = 0;

    for(let i = 0; i <= nums.length; i++){
        temp ^= nums[i]
    }

    return temp;
};