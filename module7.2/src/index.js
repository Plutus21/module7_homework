function check(obj, string) {
    let flag = false;

    for (let prop in obj) {
        if (obj.hasOwnProperty(string)) {
            flag = true;
        }
    }
    return flag;
}

const car = {
    whels: 4,
    steringWheel: 1,
}

console.log(check(car, "wh"))