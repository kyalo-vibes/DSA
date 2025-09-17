// reverse word
export function reverseWord(str: string): string {
    const strArray: string[] = str.trim().split(' ')
    let ans: string = ''
    for(const part of strArray) {
        console.log(part)
        const charArray = part.split('')
        console.log(charArray)
        let left: number = 0
        let right: number = strArray.length - 1
        while (left < right) {
            [charArray[left], charArray[right]] = [charArray[right], charArray[left]]
            left++
            right--
        }
        ans.concat(charArray.join(''))
        ans.concat(' ')
    }
    console.log(ans)
    return ans.trim()
}

console.log(reverseWord("This is a string"))
