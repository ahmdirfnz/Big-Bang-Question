const arr = []

for (let i = 1; i < 101; i++) {
    const isDivisibleByThree = i % 3 === 0
    const isDivisibleByFive = i % 5 === 0

    if (isDivisibleByThree && isDivisibleByFive) {
        arr.push("BIGBANG")
    } else if (isDivisibleByThree) {
        arr.push("BIG")
    } else if (isDivisibleByFive) {
        arr.push("BANG")
    } else {
        arr.push(`${i}`)
    }
}
console.log(arr)

