let nums = [5,4,3,2,1];
let sorted = [...nums].sort((a,b) => b-a);
if(JSON.stringify(nums) === JSON.stringify(sorted)) {
    console.log(nums.reverse());
} else {
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > nums[i-1]) {
            console.log(i);
            break;
        }
    }
}