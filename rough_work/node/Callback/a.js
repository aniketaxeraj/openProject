var array = [1,2,3,4,5,6,7]

function check(item,callback) {
    ((value) => {
        for(i of value){
            var index = value.indexOf(i)
            callback(i,index,value)
        }
    })(item)
}

check(array,(x,y,z) => {
console.log(z)
})