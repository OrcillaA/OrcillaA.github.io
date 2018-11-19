// function loader() {
//     const getNamesButton = document.getElementById('getNames');
//     const functionButton = document.getElementById('getFunctionObject');
//     getNamesButton.onclick = function() {
//         const name = myObject.getName();
//         console.log(name);
//         const getNameDisplay = document.getElementById('getNameDisplay');
//         getNameDisplay.textContent = name;

//         const fullName = myObject.getFullName();
//         console.log(fullName)
//         const getFullNameDisplay = document.getElementById('getFullNameDisplay');
//         getFullNameDisplay.textContent = fullName;

//     }

//     const functionObject = new FunctionObject();
//     console.log(functionObject.getFullName());
//     //console.log(functionObject.getName());
//     //functionButton.onclick = functionObject;
        
// }

// window.onload = loader;

// // Key value pairs.
// // comma seperated list of key value pairs.
// // key building blocks for objects(two types of objects)
// const myObject = {
//     firstName: 'fred',
//     lastName: 'smith',
//     getName: function() {
//         return this.firstName + ' ' + this.lastName;
//     }
// };
// // capital letter you must call it with 'new' since you are using a prototype
// function FunctionObject() {
//     const firstName = 'sue';
//     const lastName = 'jones';

//     FunctionObject.prototype.getFullName = () => {
//         return firstName + ' ' + lastName;
//     }
// };

// myObject.middleName = 'barfoo';

// myObject.getFullName = function() {
//     return this.firstName + 
//         ' ' + this.middleName +
//         ' ' + this.lastName
// }

// console.log(myObject.firstName);
// console.log(myObject['firstName']);
// console.log(myObject.getName());
// console.log(myObject.middleName);
// console.log(myObject.getFullName());

// Object Choices Assignment   
window.onload = () => {
    const simpleObjectAction = document.getElementById('simple-object-action');
    const functionObjectAction = document.getElementById('function-object-action');
    const customClassAction = document.getElementById('custom-class-action');

    simpleObjectAction.onclick = () => {
        const simpleDisplay = simpleObject.sayName;
        console.log(simpleDisplay);
        const simpleObjectDisplay = document.getElementById('simple-object-display');
        simpleObjectDisplay.textContent = simpleDisplay;
    };

    functionObjectAction.onclick = () => {
        const name = new FunctionObject();
        name.sayName();
        const functionObjectDisplay = document.getElementById('function-object-display');
        functionObjectDisplay.textContent = name;
    };

    customClassAction.onclick = () => {
        const name = myClass.sayName();
        console.log(name);
        const customClassDisplay = document.getElementById('custom-class-display');
        customClassDisplay.textContent = name;
    };
};
//Simple Object
let simpleObject = {
    sayName: 'Simple Object',
};
simpleObject.dynamicMethod = () => {
    console.log('Dynamic Method');
};

//Function Object
function FunctionObject() {

    function privateFunction() {
        console.log('Private Function');
    };

    FunctionObject.prototype.sayName = () => {
        'use strict'
        privateFunction();
    };
};

//Custom Class
class CustomClass {
    sayName() {
        return 'Custom class'
    }
};
console.log(simpleObject.sayName);
simpleObject.dynamicMethod();
let myObject = new FunctionObject();
myObject.sayName();
let myClass = new CustomClass();
console.log(myClass.sayName());
//console.log(myObject.constructor.toString());

