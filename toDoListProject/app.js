let input = prompt('What do you want to do?');
let list = [];

while (input !== 'quit') {
    if (input === 'new'){
        let item = prompt('What would you like to add?');
        list.push(item);        
    }
    if (input === 'list') {
        console.log("list loop");
        console.log(list);
    }
    input = prompt('What do you want to do?');
}
console.log("You quit!");

