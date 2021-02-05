for (let i = 0; i < 100; i++) {
    let newButton = document.createElement("button");
    newButton.textContent = "I am a button!";
    document.querySelector('div').appendChild(newButton);
}