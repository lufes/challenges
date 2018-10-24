function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let sumRight = A.reduce((a, b, index) => { return index > 0 ? a + b : 0 }, 0)
    let sumLeft = 0
    let lastIndex = A.length - 1

    let min = null
    
    for (let i = 0; i < lastIndex; i++) {
        sumLeft += A[i]
        let diff = Math.abs(sumLeft - sumRight)
        min = min === null ? diff : Math.min(min, diff)
        if (i + 1 <= lastIndex) sumRight -= A[i + 1]
    }

    return min
}
