function divider(title) {
    console.log("=====================================");
    console.log(title);
    console.log("=====================================");
}

divider('Person');

var person = {
    firstName: "Andrew",
    lastName: "Orcilla",
    fullName: function() { 'use strict';
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());

divider('Calculator');

var calculator = {
    operand01: -1,
    operand02: -1,
    addMe: function() {
        'use strict';
        return this.operand01 + this.operand02;
    },
    subtractMe: function() { 
        'use strict';
        return this.operand01 - this.operand02;
    },
};
calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;
calculator.multiply = function() {
    'use strict';
    return this.operand01 * this.operand02;
};

console.log('operand01 =', calculator.operand01);
console.log('operand02 =', calculator.operand02);
console.log('Add =', calculator.addMe());
console.log('Subtract =', calculator.subtractMe());
console.log('Multiply =', calculator.multiply());

