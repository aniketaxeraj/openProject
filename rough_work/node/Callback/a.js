var array = [10,2,30,4,5,60]
let j = 0
function check(rec,value,callback) {
    callback(value[j],j,value)
    j++
    if(j > value.length - 1)return 0
    check(rec++,value,callback)
}

check(0,array,(x,y,z) => {
    console.log(x)
})


// function call(i){
//     callback(value[j],j,value)
//     j++
//     
//     call(i++)
// }
// call(0)

