window.onload = () => {
// Part I
    const listButton = document.getElementById('add-to-list');  
    const userInput = document.getElementById('list-data');    
    const setTextButton = document.getElementById('set-text');
//Part II
    setTextButton.onclick = () => {
        userInput.value = 'The first item for my list';
     }
//Part III
     listButton.onclick = () => {
        const myList = document.getElementById('my-list');
        elfCode.appendToList(myList, userInput.value);
    }
}
