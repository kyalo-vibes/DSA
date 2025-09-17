// palindrome
export function isPalindrome(s: string): boolean {
    const charArray: string[] = s.toLowerCase().split('')
    console.log(charArray)
    let left: number = 0
    let right: number = charArray.length - 1
    while (left < right) {
        if(!/^[a-z0-9]+$/.test(charArray[left])){
            left++
            continue
        }
        if(!/^[a-z0-9]+$/.test(charArray[right])){
            right--
            continue
        }
        if (charArray[left] != charArray[right]) {
            console.log(charArray[left])
            console.log(charArray[right])
            return false
        }
        left++
        right--
    }
    return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))

