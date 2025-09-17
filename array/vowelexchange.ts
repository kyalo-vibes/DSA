export function vowelExchange(s: string): string {
    const charArray: string[] = s.split('')
    const vowels: string[] = ['a','e','i','o','u','A','E','I','O','U']
    let ans: string = ''
    console.log(charArray)
    let left = 0
    let right = charArray.length - 1
    while (left < right) {
        if (vowels.includes(charArray[left]) && vowels.includes(charArray[right])) {
            [charArray[left], charArray[right]] = [charArray[right], charArray[left]]
            left++
            right-- 
        }
        else if (!vowels.includes(charArray[left])) {
            left++
        }
        else if (!vowels.includes(charArray[right])) {
            right--
        }
    }
    ans = charArray.join('')
    console.log(ans)
    return ans
}

vowelExchange("hello")