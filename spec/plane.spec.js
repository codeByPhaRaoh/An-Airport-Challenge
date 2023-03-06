const { assertEquals } = require(`../test-framework`);
const Plane = require(`../src/plane`);

let plane;
let expected;
let actual;
let result;

// Test P1
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`Test P1 - Valid Plane IDs - The id parameter that is run through the new plane becomes the plane's ID`);

// Arrange
plane = new Plane(`S117`);
expected = `S117`;

// Act
plane.returnId();
actual = plane.id;

// Assert
result = assertEquals(expected, actual);
console.log(`Test P1 Result. The plane called with "S117" has the id "S117": ${result}`);

// Cleanup
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test P2
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`Test P2 - Invalid Plane IDs - If the id parameter of the plane is invalid an error shows `);

// Arrange
plane = new Plane();
// expected = to throw an error which says `This is not a valid Plane ID`

// Act
// actual = did calling a new Plane without a parameter throw an error?;

// Assert
result = assertEquals(expected, actual);
console.log(`Test P2 Result. Calling a plane without an ID will throw an error: ${result}`);

/* This does succeed in throwing an error when the id parameter === undefined */

// Next time do error catching

// Cleanup
plane = null;
expected = undefined;
actual = undefined;
result = undefined;