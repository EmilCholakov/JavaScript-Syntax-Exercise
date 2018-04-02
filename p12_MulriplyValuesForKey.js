function multiplyValuesForKey(arr) {
    let object = {};
    for (let i = 0; i < arr.length - 1; i++) {
        let tokens = arr[i].split(' ');
        let key = tokens[0];
        let value = tokens[1];

        if (!object.hasOwnProperty(key)) {
            object[key] = new Array();
        }
        object[key].push(value);
    }
    let key = arr[arr.length - 1];
    if (object.hasOwnProperty(key)) {
        for (let val of object[key]) {
            console.log(val);
        }
    }
    else {
        console.log("None");
    }
}

let arr = ['3 test', '3 test1', '4 test', '4 test1', '4'];
multiplyValuesForKey(arr);