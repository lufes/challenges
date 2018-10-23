function solution(A) {
    A = A.filter(item => item >= 0).sort((a, b) => a - b)
    let smallest = 0
    
    for (num of A) {
        if (num - smallest > 1) return smallest + 1
        if (num - smallest === 1) smallest = num
    }
    
    return smallest + 1
}

