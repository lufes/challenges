function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let len = A.length
    
    if (!len) return 1
    if (len === 1) return A[0] === 1 ? 2 : 1

    let biggest = len + 1
    let idealTotal = biggest * (biggest + 1) / 2
    let actualTotal = A.reduce((x, y) => x + y)
    
    let missing = idealTotal - actualTotal
    return missing
}
