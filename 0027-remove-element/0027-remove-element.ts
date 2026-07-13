function removeElement(nums: number[], val: number): number {
    let result: number[] = [];

    result = nums.filter((itm)=> itm !== val);
    for(let i = 0; i < result.length; i++){
        nums[i] = result[i]
    }

    return result.length
};