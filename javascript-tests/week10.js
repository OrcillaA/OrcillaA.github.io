window.onload = () => {
    const objectLiteralAction = document.getElementById('object-literal-action');
    const numbersAction = document.getElementById('numbers-action');

    numbersAction.onclick = () => {
        const numbersDisplay = document.getElementById('numbers-display');
        numbersDisplay.textContent = numbers;
        for (let number of numbers) {
            const li = document.createElement("li"); //creates list item 
            li.appendChild(document.createTextNode(number)); //set text for the list item
            numbersDisplay.appendChild(li); //append it to list (insert it in the array)
        }
    }
    objectLiteralAction.onclick = () => {
        console.log(objectLiteral.getName());
        const objectLiteralDisplay = document.getElementById('object-literal-display');
        objectLiteralDisplay.textContent = objectLiteral.getName();
    }
}
//array of strings
const strings = ['HTML', 'Javascript', 'three'];

// for (let word of strings) {

// }

//array of numbers
const numbers = [2, 1, 3];

const objectLiteral = {
    objectName: 'object literal is my name',
    //below, we are declaring a method and the method "returns" the objectName string.
    getName: function() {
        return this.objectName
    }
}