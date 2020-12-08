let input = prompt('What do you want to do?');
let list = [];

while (input !== 'quit') {
    if (input === 'new'){
        let item = prompt('What would you like to add?');
        list.push(item);
        console.log(list);
    }
    console.log("still here");
    input = prompt('What do you want to do?');
}
console.log("You quit!");

