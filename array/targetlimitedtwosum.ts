export function targetLimitedTwoSum(arr: number[], target: number): number {
    arr.sort((a, b) => a - b)
    console.log(arr)
    let left = 0
    let right = arr.length - 1
    let ans: number = 0
    while (left < right) {
        const sum = arr[left] + arr[right]
        if (sum < target && sum > ans) {
            ans = sum
        } else if (sum >= target) {
            right--
        } else {
            left++
        }
    }
    return ans > 0 ? ans : -1
}

console.log(targetLimitedTwoSum([34, 23, 1, 24, 75, 33, 54, 8], 60))