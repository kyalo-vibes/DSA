export function duplicateAwareTwoSum(arr: number[], target: number): number[][] {
    arr.sort((a, b) => a - b)
    let used: number[] = []
    let ans: number[][] = []
    let left: number = 0
    let right: number = arr.length - 1
    while (left < right) {
        const sum:number = arr[left] + arr[right]
        if (sum > target || used.includes(arr[right])) {
            right--
        } else if (sum < target || used.includes(arr[left])) {
            left++
        } else {
            used.push(arr[left], arr[right])
            ans.push([arr[left], arr[right]])
            left++
            right--
        }
    }
    console.log(ans)
    return ans
}

console.log(duplicateAwareTwoSum([1, 2, 2, 3, 4, 5], 6))

//[[1, 5], [2, 4]]