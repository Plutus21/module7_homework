function objectProps(obj) {
    for (let prop in obj) {
        if(obj.hasOwnProperty(prop)) {
            console.log(prop, obj[prop])
        }
    }
}

const testObj = {
    a: 1,
    b: 2,
    c: 3
}

objectProps(testObj)

