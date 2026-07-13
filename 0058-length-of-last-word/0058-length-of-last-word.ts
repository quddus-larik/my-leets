function lengthOfLastWord(s: string): number {
    let result: string[] = [];
    result = s.split(" ").filter((itm)=> itm.trim() !== "")
    
    return result[result.length - 1].length;
};