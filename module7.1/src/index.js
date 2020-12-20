function objectProps(obj) {
    if(obj.hasOwnProperty()) {
        console.log(obj)
    }
    return obj
}

const testObj = {
    a: 1,
    b: 2,
    c: 3,
}

console.log(objectProps(testObj));

