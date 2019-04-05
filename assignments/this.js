/* The for principles of "this" - Jared-Parrish;
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When implicit binding is at work, one uses dot notation to invoke a function.  When doing this, one can look to the left of the dot to see what the "this" is referring to.
* 2. Explicit binding using keywords such as call, apply, and bind to explicitly tell the function where "this" is referring to.
* 3. When "new" binding is at work, one must use a class constructor to create a template object that uses "this" keyword to bind to new objects that are created using that class constructor.  
* 4. Window binding refers to the behavior of the "this" keyword to default to refering to everything that is operating in the browser window when it is invoked on a global scope.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function logger(){
    console.log(this);
}

logger();

// Principle 2

const neighbor = {
    "name": "jim",
    "occupation": "landscaper",
    "sayName": function (){
        console.log(this.name);
    }
}

neighbor.sayName();


// Principle 3

const Sandwhich = function (type, size, price) {
    this.type = type,
    this.size = size,
    this.price = price
}

const hoagie = new Sandwhich ("haogie", "large", "cheap");

console.log(hoagie);



// code example for New Binding

// Principle 4

let greet = function(timeOfDay){
    console.log(this.name + ' says good ' + timeOfDay)
} 

const carl = {
    "name": "Carl"
}

greet.call(carl, "morning");

// code example for Explicit Binding