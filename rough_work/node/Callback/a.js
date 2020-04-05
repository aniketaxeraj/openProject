var array = [1,2,3,4,5,6,7]

function check(item,callback) {
    
        for(i of item){
            var index = item.indexOf(i)
            callback(i,index,item)
        }
}

check(array,(x,y,z) => {
console.log(y)
})