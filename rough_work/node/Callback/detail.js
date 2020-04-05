let detail = [
    {
        name: "bhaiya",
        age: 22,
        roll: 2216202,
        city: "chhapra"
    },
    {
        name: "raj",
        age: 20,
        roll: 2218201,
        city: "chhaprae"
    },
    {
        name: "aniket",
        age: 20,
        roll: 2218201,
        city: "chhapra"
    },
    {
        name: "jerry",
        age: 19,
        roll: 2218219,
        city: "chhapra"
    }
]

//In this by_char provide input to check the matched keyword!!!!

let find = {
    //by_value: "jerry",
    by_char : "20"
};
detail.forEach(x => {
    for(y in x){
        //if(x[y] == find.by_value)console.log("hurray! : %s",x)
        if(x[y]){
            let str = x[y].toString()
            if(str.includes(find.by_char)){
                console.log("root : %s and word : %s and matched str : %s",x,x[y],find.by_char)
                break;
            }
        }
    }
    console.log('----------------')
})
