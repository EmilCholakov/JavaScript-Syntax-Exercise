function storingObjects(arr) {
    let array = new Array();
    for (let string of arr) {
        let token = string.split('->');
        let name = token[0].trim();
        let age = token[1].trim();
        let grade = token[2].trim();

        array.push({
            Name: name,
            Age: age,
            Grade: grade
        });
    }
    for(let student of array) {
        for(let key of Object.keys(student)) {
            console.log(`${key}: ${student[key]}`)
        }
    }
}

let arr = [
    'Pesho -> 13 -> 6.00',
    'Gosho -> 15 -> 5.00'];

storingObjects(arr);