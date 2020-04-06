let detail = [
    {
        name: "bhaiya",
        age: 22,
        roll: 2216202,
        city: "chhapraz",
    },
    {
        name: "raj",
        age: 20,
        roll: 2218201,
        city: "chhapraz"
    },
    {
        name: "aniket",
        age: 20,
        roll: 2218201,
        city: "chhapra",
        home : "boney",
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
    by_char : "boney"
};

let array = []

    detail.filter(x => {
        Object.keys(x).forEach(y => {
            if(x[y]){
                let str = x[y].toString()
                if(str.includes(find.by_char) && !array.includes(x)){
                    array.push(x)
                }
            }
        })
    })

    console.log(array)


