let input = prompt('What do you want to do?');
let list = [];

while (input !== 'quit') {
    if (input === 'new'){
        let item = prompt('What would you like to add?');
        list.push(item);        
    }
    if (input === 'list') {
        console.log("list loop");
        for (let item of list) {
            console.log(`${list.indexOf(item)} : ${item}`);
        }
    }

    if (input === 'delete') {
        list.splice(prompt('type the index of the item that you would like to remove'), 1);
        console.log(list);
    }
    input = prompt('What do you want to do?');
}
console.log("You quit!");

