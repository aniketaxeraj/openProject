var array = [1,2,3,4,5,6,7]
let j = 0
function check(value,callback) {
   function call(i){
       callback(array[j],array.indexOf(array[j]),array)
       j++
       if(j > array.length - 1)return 0
       call(i++)
   }
   call(0)
}

check(array,(x,y,z) => {
    console.log(z)
})


