export function twoSum(arr: number[], target: number): number[] {
    arr.sort((a, b) => a - b)
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        const sum: number = arr[left] + arr[right]
        if (sum < target) {
            left++
        } else if (sum > target) {
            right --
        } else {
            return [arr[left], arr[right]]
        }
    }
    return []
}

console.log(twoSum([2, 8, 3, 6, 4], 7))