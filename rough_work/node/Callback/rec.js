let j = 0
function check(i) {
    j++
    console.log(j)
    if (j > 20)return 0
    check(i++)
}
check(0)