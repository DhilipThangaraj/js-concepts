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
