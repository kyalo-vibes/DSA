export function test() {
    const str: string = "This is a string"
    const strArray = str.split(' ')
    let result: string[] = []
    let ans: string = ''
    console.log(strArray)
    for (const word of strArray) {
        const charArray: string[] = word.split('')
        console.log(charArray)
        let left: number = 0
        let right: number = charArray.length - 1
        while (left < right) {
            [charArray[left], charArray[right]] = [charArray[right], charArray[left]]
            left++
            right--
        }
        result.push(charArray.join(''))
        console.log(result)
    }
    ans = result.join(' ')
    console.log(ans)
}

test()