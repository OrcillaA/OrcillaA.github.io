window.onload = () => {
// Part I
    const userInput = document.getElementById('list-data');    
    const setTextButton = document.getElementById('set-text');
    
    setTextButton.onclick = () => {
        userInput.value = 'The first item for my list';
    }
//Part II
    listButton.onclick = () => {
        const myList = document.getElementById('my-list');
        elfCode.appendToList(myList, userInput.value);
    }
    const listButton = document.getElementById('add-to-list');
    
    const setTextButton = document.getElementById('set-text');
const userInput = document.getElementById('list-data');
const listButton = document.getElementById('add-to-list');

}