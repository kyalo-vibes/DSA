export function reverseSegments(s: string, k: number): string {
    const charArray: string[] = s.split('')
    let end: number = 2 * k
    let start:number = 0
    let segments: string[] = []
    let ans: string = ''
    // console.log(charArray.slice(start,end))
    // abcdefghij
    while (start < charArray.length) {
        segments = charArray.slice(start,end)
        let left: number = 0
        let right: number = k - 1
        console.log("left: {}", left)
        console.log("right: {}", right)
        while (left < right) {
            [segments[left], segments[right]] = [segments[right], segments[left]]
            left++
            right--
        }
        ans += segments.join('')
        console.log(ans)
        start = end
        end = 2 * end
    }
    return ans
    // const charArray: string[] = s.split('')
    // let ans: string = ''
    // let left: number = 0
    // let right: number = charArray.length - 1
    // let check: number = k
    // if (charArray.length < k) {
    //     while(left < right) {
    //         [charArray[left], charArray[right]] = [charArray[right], charArray[left]]
    //         left++
    //         right--
    //     }
    // }
    // else if (charArray.length / k <= 2) {
    //     right = k - 1
    //     while(left < right) {
    //         [charArray[left], charArray[right]] = [charArray[right], charArray[left]]
    //         left++
    //         right--
    //     }
    // }
    // else {
    //     right = k - 1
    //     while(left < right) {
    //         [charArray[left], charArray[right]] = [charArray[right], charArray[left]]
    //         console.log("left: {}", left)
    //         console.log("right: {}", right)
    //         console.log("loop stopper: {}", check + k)
    //         left++
    //         right--
    //         if (left == right || left > right && check + k < charArray.length) {
    //             left = 2 * check
    //             right = left + k - 1
    //             check = left
    //         }
    //     }
    // }
    // ans = charArray.join('')
    // return ans
}

console.log(reverseSegments("qwerty", 3))

// reverse k characters of string for every 2k characters from the start
// fewer than k characters reverse them all[DONE]
// at least k but fewer than 2k, reverse only first k characters and leave rest
// abcdefghij, 2 -> bacdfeghji
// dfgh, 5 -> hgfd
// qwerty, 3 -> ewqrty
