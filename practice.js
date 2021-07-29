require("core-js");

/**
 * 1.Promise.allSettled() - ES11
 * 2.BigInt - ES11
 * 3.Optional chaining operator - ES11
 * 4.Nullish coalescing - ES11
 * 5.weakref - ES12
 * 6.Public,protect and private - ES11
 */

/**
 * Example 1
 * @description - BigInt - It is a big integer.
 * @Note - Typeof bigint is bigint.
 */

/**
 * function bigInt() {
  const a = BigInt(10);
  console.log(a); //10n
  console.log(typeof a); //bigInt
  //console.log(a + 1); //Error
  console.log(a + 10n); //20n

  //Why - before BigInt there was a property to find the maximum integer that is Number.The problem of MAX_Integer
  //if you add any additional value sometimes gives the correct value and sometime not.so only to overcome
  //We got BigInteger
  const maxInteger = Number.MAX_SAFE_INTEGER;
  console.log(maxInteger); //9007199254740991
}

bigInt();
**/

/**
 * Example 2
 * @description - Optional chaining operator (?.)
 *
 */

/**
function optionalChainingOperatorOldWay() {
  const personDetails = {
    name: {
      fullName: "Dhilip Kumar",
    },
  };

  //How do you do conditional handling for the fullName ?

  if (personDetails && personDetails.name && personDetails.name.fullName) {
    console.log(personDetails.name.fullName);
  }
}

optionalChainingOperatorOldWay();

function optionalChainingOperatorNewWay() {
  const personDetails = {
    name: {
      fullName: "Dhilip Kumar",
    },
  };

  //Optional chaining operator
  if (personDetails?.name?.fullName) {
    console.log(personDetails.name.fullName);
  }
}

optionalChainingOperatorNewWay();
**/

/**
 * Example 3
 * @description - Nullish coalescing operator (??) - In javascript empty string and 0 considered as nullish
 * But actually those are still values inorder to handle that this operator has come in the picture.
 * @Note - empty string with space will be considered as still value in javascript.
 */

/**
 * function nullishOperator() {
  let personDetails = {
    name: "",
    age: 0,
  };

  console.log(personDetails.name || "text"); //Empty string is a value but still output is text.
  console.log(personDetails.age || "28"); //0 is still a valid value but the output is 28.

  console.log(personDetails.name ?? "text"); //Empty string is a value but still output is text.
  console.log(personDetails.age ?? "28"); //0 is still a valid value but the output is 28.
}

nullishOperator();

 */

/**
 * Example 4
 * @description - Weak Ref - watch https://www.youtube.com/watch?v=JDkW4kdByos
 * @Note - Garbage collector and deref for reclaiming the garbagged value
 *
 */

/**
 * Example 5
 * @description - String.replaceAll() - ES12
 * @Note -
 *
 */

/**
 * function stringReplaceAll() {
  const str = `Firstname="abc"&Lastname="pqr"&age=25&Location="Bodi"`;
  //Old way of replacing &
  console.log(str.split("&").join(" "));
  console.log(str.replace(/\&/g, " "));
  //New
  //   console.log(str.replaceAll("&", " "));
}

stringReplaceAll();

 */

/**
 * Example 6
 * @description - static methods in class
 * @Note - if some property or function is not needed with the object
 * then it can be declared as static
 */

//Example 6.1 - static keyword using static method creation
// class User {
//   static staticMethod() {
//     if (this === User) {
//       console.log("true");
//     }
//   }
// }

//Only with className static methods can be accessible
//User.staticMethod();

//With object reference we cant access the static method
// let newUser = new User();
// newUser.staticMethod(); //Static method is not a function
//newUser.__proto__.staticMethod()  //Static method is not a function

//User.prototype.staticMethod(); //Static method is not a function

//Example 6.2 - without static keyword using static method creation

/**
 * class User {}

User.staticMethod = function () {
  console.log(this === User);
};

User.staticMethod();
 */

//Example 6.3 - How to make static method to make available with object reference.

// class User {}

// User.prototype.normalMethod = function () {
//   console.log(this === newUser);
// };

//User.normalMethod(); //User.staticMethod is not a function

// let newUser = new User();

// newUser.normalMethod();

//Example 6.4 - How to pass values ?

/**
 * class Greet {
  static details(msg) {
    console.log("The message is", msg);
    return `${msg}`;
  }
}

Greet.details("welcome");
// let g = new Greet();
// g.details("hi"); //since static not able to access the function
 */

//Example 6.5 - Object passing

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   static details(user1) {
//     console.log(`Name =${user1.name} Age=${user1.age}`);
//   }
// }

// let user1 = new User("abc", 25);
// User.details(user1);

//Example 6.6 - is class extends Object ?

// Object.prototype.location = "india";
// class User extends Object {
//   constructor(name, age) {
//     super();
//     this.name = name;
//     this.age = age;
//   }
// }

// let Users = [
//   new User("Dhilip", 28),
//   new User("Vishva", 29),
//   new User("Erode", 27),
// ];

// Users.forEach((value) => {
//   console.log(
//     `**USER DETAILS** NAME= ${value.name} AGE=${value.age} Location=${value.location}`
//   );
// });

/**
 * Example 7
 * @description - Map and weak map
 */

//Map - its a object that can be iterable.Map only accepts the unique value. you can give key as array of object,primitive data and object

//Example 7.1 - Problem using key as object inside the object.
/**
 * let a = {
  name: "dhilip",
};

let b = {
  name: "kumar",
};

let c = {};

c[a] = "welcome1";
c[b] = "welcome2";

console.log(c); //{ '[object Object]': 'welcome2' } // never prints the first object and even if you expand object object property you wont be seen the key of a object and b object as well.

 */

//Example 7.2 - To overcome the above problem we use map

// let a = {
//   name: "Dhilip",
// };

// let b = {
//   name: "kumar",
// };

// let c = {
//   name: "DK",
// };

// let map = new Map();
// map.set(a, "welcome1");
// map.set(b, "welcome2");
// map.set(c, "welcome3");
//console.log(map); //Map {{ name: 'Dhilip' } => 'welcome1',{ name: 'kumar' } => 'welcome2' }
//map.set(a, "Hello World"); //It just overrides the value.it wont create the new one.map only give the result as unique.
//console.log(map);
//map.delete(b);
//console.log(map); //Which deletes the b object.
//console.log(map.size); //since we have one object so the result would be 1
//console.log(map.has(a)); //if the object is presented in the map which will return true if not false.
//console.log(map.clear()); //Which clears the map
//console.log(map.get(a)); //Hello World - which returns the object's value

//map.keys() - pull out all the keys from map and give you the result.
// for (let i of map.keys()) {
//   console.log(i);
// }

//If i want to pull out key and value also.

// map.forEach((values, keys) => {
//   return console.log(`Name = ${keys.name} Value = ${values}`);
// });

//key can be object,array of object,array and primitive etc...
// map.set(10, "Number");
// map.set("Hello", "String");
// map.set([1, 2, 3, 4, 5], "Array");
// console.log(map);

/**
 * @description - Weak map
 */

/**
 * Example - 8
 * @description - apply(),call(),bind() - This concept is basically borrowing object's properties and functions
 * @Note - More than one arguments can be passed as the second arguments
 *
 */

/**
 * var obj1 = {
  num: 1,
};
var obj2 = {
  f1: function (a, text) {
    console.log(this.num + a + ` ${text}`);
  },
};

//call()
//console.log(obj2.f1.call(obj1, 3, "This is the result."));

//apply()
// let arr = [3, "This is the result."];
// console.log(obj2.f1.call(obj1, arr));

//bind() - will create a new function that created function should be saved as variable and called as the function call.

let newlyCreatedFunction = obj2.f1.bind(obj1, 2, "Hello");
newlyCreatedFunction();
 */

/**
 * Example 9
 * @description - Array.flat - ES10 - If you have nested array by using array.flat() method you can flat as a single array.
 */

/**
const abc = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]; //[ 1, 2, 3, [ 4, 5, 6, [ 7, 8, 9, [Array] ] ] ]

console.log(abc);

console.log("To flat the array ::: ", abc.flat().flat().flat());
console.log("To flat the array ::: ", abc.flat(Infinity));
**/

/**
 * Example 10
 * @description - Closure.
 */
