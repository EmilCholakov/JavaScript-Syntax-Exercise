function parseJSONObjects(object) {
    for (let line of object) {
        let obj = JSON.parse(line);
        console.log(`Name: ${obj.name}`);
        console.log(`Age: ${obj.age}`);
        console.log(`Date: ${obj.date}`);
    }
}

let object = {"name":"Pesho", "age":10, "date":"10/01/1993"};
parseJSONObjects(object);