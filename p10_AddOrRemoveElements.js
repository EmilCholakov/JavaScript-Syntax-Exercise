function addOrRemoveElements(arr) {
    let arrayCollectingDone = new Array();

    for (let command of arr) {
        let tokens = command.split(' ');
        let action = tokens[0];
        let element = Number(tokens[1]);

        switch (action) {
            case 'add':
                arrayCollectingDone.push(element);
                break;
            case 'remove':
                arrayCollectingDone.splice(element, 1);
                break;
        }
    }
        for (let i of arrayCollectingDone) {
            console.log(i);
    }
}
let arr = ['add', 3, 'add', 5, 'remove', 6];
addOrRemoveElements(arr);