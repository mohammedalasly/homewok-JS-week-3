//1.String!

//1.1

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);

//1.2

console.log("hello,this,is,a,difficult,to,read,sentence");

//1.3

let myNewString = "hello " + "this " + "is " + "a " + "difficult " + "to " + "read " + "sentence"

console.log("hello " + "this " + "is " + "a " + "difficult " + "to " + "read " + "sentence");

//1.4

console.log(myNewString);



//2.Array!


//2.1

let MaurofavoriteAnimals = ['blowfish', 'capricorn', 'turtle', 'giraffe'];

//2.2

console.log('turtle');

//2.3

let JimfavoriteAnimals = ['blowfish', 'meerkat', 'capricorn', 'turtle', 'giraffe'];

//2.4

console.log("I think the new value of the array is", 5);

//2.5

console.log('meerkat');

//2.6

console.log('The array has a length of:', JimfavoriteAnimals.length);

//2.7

let JasonfavoriteAnimals = ['blowfish', 'meerkat', 'capricorn', 'turtle', 'giraffe'];
JasonfavoriteAnimals.pop();
console.log(JasonfavoriteAnimals);

//2.8

console.log(JasonfavoriteAnimals);

//2.9

let myfavoriteAnimals = ['blowfish', 'meerkat', 'capricorn', 'turtle', 'giraffe'];
let index = myfavoriteAnimals.indexOf('meerkat');

//2.10

console.log('The item you are looking for is at index:', index);




//More JavaScript:

//1.
function sum(x, y, z) {
    return x + y + z;
}
console.log("the sum of the these arguments is: " + sum(1, 2, 3));


//2.

function colorCar(color) {
    return "a " + color + " car";
}
console.log("print out " + colorCar("red"));

//3.

var object = new Function('a', 'b', 'return a + b');

console.log(object(2, 6));


//4.


function vehicleType(color, code) {
    let string = "a " + color + " ";

    if (code === 1) {
        string += "car";
    } else if (code === 2) {
        string += "motorbike";
    }

    return string;
}
console.log("print out all of its properties and value " + vehicleType("blue", 2));


//5.

console.log("single line", 3 === 3);

//6.

function vehicleType(color, code) {
    let string = "a " + color + " ";

    if (code === 1) {
        string += "age";
    } else if (code === 2) {
        string += "motorbike";
    }

    return string;
}
console.log("print out all of its properties and value " + vehicleType("blue", 1, 5));


//7.

let list = ["motorbike", "caravan", "bike", "car", "ferry", "plane"];
console.log("you can add more " + list);

//8.

let bike = list[2];
console.log(" The third Item of List is " + bike);

//9.

function vehicle2(color, code, age) {
    let string = "a " + color;

    if (age === 1) {
        string = string + " new ";
    } else if (age > 1) {
        string = string + " used ";
    }

    string = string + list[code];

    return string;
}
console.log("a green new bike " + vehicle2("green", 3, 1));

//10.

function advert() {
    let string = "Amazing Joe's Garage, we service, cars, motorbikes, caravans and bikes.";

    for (let i = 0; i < list.length; i++) {
        if (i === list.length - 1) {
            string += "and " + list[i] + "s.";
        } else {
            string += list[i] + "s, ";
        }
    }

    return string;
}
console.log("This is print something like: " + advert());

//11.

list.push("bicycle");
console.log("add one more vehicle to the list " + list);
console.log("added to the advertisement without changing the previous code " + advert());

//12.

var objectA = {}
var objectB = new Object()
console.log({});

//13.

var teachers = {
    teacher1: "Ahmed",
    teacher2: "George",
    models: "webdevelopment",
    teachers: function () {
        return this.teachers + " " + this.models;
    }
};

//14.

var teachers = {
    teacher1: "Ahmed",
    teacher2: "George",
    models: "webdevelopment",
    languageOfTeaching: "english",
    teachers: function () {
        return this.teachers + " " + this.models;
    }
};

//15.

var x = [1, 2, 3];
var y = [1, 2, 3];
var z = y;

console.log("I think it's a " + (x == y));
console.log("I think it's a " + (x === y));
console.log("I think it's a " + (z == x));
console.log("I think it's a " + (z === x));
console.log("I think it's a " + (z == y));
console.log("I think it's a " + (z === y));

var array1 = [1, 2, 3];
var array2 = [1, 2, 3];
var array3 = y;

function same(x, y, z) {
    var same = x.length === y.length,
        same = x.length == y.length,
        same = x.length == z.length,
        same = y.length == z.length,
        result,
        len;
    if (!same) { result = false }
    else {
        result = true;
        len = x.length;
        for (var i = 0; result !== false && i < len; i++) {
            if (x[i] !== y[i]) {
                result = false;
            }
        }
    }

    return result;
}

console.log(same(array1, array2, array3));

//16.
function changing() {
    let o2 = { foo: 'bar' };
    let o3 = o2;

    if (o2 = o3) {
    } else {
        return false;
    }
};


//17.





























































