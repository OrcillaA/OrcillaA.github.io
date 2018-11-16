function loader() {
    const getNamesButton = document.getElementById('getNames');
    const functionButton = document.getElementById('getFunctionObject');
    getNamesButton.onclick = function() {
        const name = myObject.getName();
        console.log(name);
        const getNameDisplay = document.getElementById('getNameDisplay');
        getNameDisplay.textContent = name;

        const fullName = myObject.getFullName();
        console.log(fullName)
        const getFullNameDisplay = document.getElementById('getFullNameDisplay');
        getFullNameDisplay.textContent = fullName;

    }

    const functionObject = new FunctionObject();
    console.log(functionObject.getFullName());
    //console.log(functionObject.getName());
    //functionButton.onclick = functionObject;
        
}

window.onload = loader;

// Key value pairs.
// comma seperated list of key value pairs.
// key building blocks for objects(two types of objects)
const myObject = {
    firstName: 'fred',
    lastName: 'smith',
    getName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};
// capital letter you must call it with 'new' since you are using a prototype
function FunctionObject() {
    const firstName = 'sue';
    const lastName = 'jones';

    FunctionObject.prototype.getFullName = () => {
        return firstName + ' ' + lastName;
    }
};

myObject.middleName = 'barfoo';

myObject.getFullName = function() {
    return this.firstName + 
        ' ' + this.middleName +
        ' ' + this.lastName
}

console.log(myObject.firstName);
console.log(myObject['firstName']);
console.log(myObject.getName());
console.log(myObject.middleName);
console.log(myObject.getFullName());

// Object Choices Assignment (I dont understand at all)
var simpleObject = {
    sayName: 'Simple Object'
};

simpleObject.dynamicMethod = 'Dynamic method';

function FunctionObject(sayName) {
    this. 

    FunctionObject.prototype.getName = () => {
        return sayName;
    };


}

console.log(simpleObject.sayName);
console.log(simpleObject.dynamicMethod);


