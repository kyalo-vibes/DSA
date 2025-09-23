export function reverseWordOrder(s: string): string {
    const strArray: string[] = s.trim().split(/\s+/)
    let left: number = 0
    let right: number = strArray.length - 1
    console.log(strArray)
    // return "test"
    while(left < right) {
        if(!/^[a-zA-Z]+/.test(strArray[left])) {
            strArray.splice(left, 1)
        } else if (!/^[a-zA-Z]+/.test(strArray[right])) {
            strArray.splice(right, 1)
            right--
        } else {
            [strArray[left], strArray[right]] = [strArray[right], strArray[left]]
            left++
            right--
        }

    }
    console.log(strArray)
    return strArray.join(' ')
}

console.log(reverseWordOrder(" Hello   world"))