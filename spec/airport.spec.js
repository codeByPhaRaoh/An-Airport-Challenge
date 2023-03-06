const { assertEquals } = require(`../test-framework`);
const Airport = require(`../src/airport`);
const Plane = require(`../src/plane`);
const Weather = require(`../src/weather`);

let airport;
let plane;
let expected;
let actual;
let result;
let weather;

// Test A1a
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`Test A1a - Landing a Plane - landPlane pushes plane into apron`);

// Arrange
airport = new Airport;
plane = new Plane(`S117`);
weather = `clear`;
expected = airport.apronPlanes.length + 1;

// Act
airport.landPlane(plane, weather);
actual = airport.apronPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test A1a Result. A plane has landed and made it to the apron: ${result}`);

// Cleanup
airport = null;
plane = null;
weather = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test A1b
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`Test A1b - Landing a Plane - landPlane only pushes instances of Plane into the apron`);

// Arrange
airport = new Airport;
plane = `343GS`;
weather = `clear`;
expected = 0;

// Act
airport.landPlane(plane, weather);
actual = airport.apronPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test A1b Result. The Not a Plane was unable to land: ${result}`);

// Cleanup
airport = null;
plane = null;
weather = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test A1c
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`Test A1c - Landing a Plane - landPlane only lands planes if they have not landed before`);

// Arrange
airport = new Airport;
plane = new Plane('S117');
weather = `clear`;
expected = airport.apronPlanes.length + 1;

// Act
airport.landPlane(plane, weather);
airport.landPlane(plane, weather);
actual = airport.apronPlanes.length;
// here the plane is only supposed to land once, hence the use of .length on the array to test

// Assert
result = assertEquals(expected, actual);
console.log(`Test A1c Result. The landed plane was not able to land again: ${result}`);

// Cleanup
airport = null;
plane = null;
weather = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test A1d.i
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`Test A1d.i - Landing a Plane - landPlane lands a plane if the weather is clear`);

// Arrange
airport = new Airport;
plane = new Plane(`S117`);
weather = `clear`;
expected = airport.apronPlanes.length + 1;

// Act
airport.landPlane(plane, weather);
actual = airport.apronPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test A1d.i Result. The plane has landed because the weather was clear: ${result}`);

// Cleanup
airport = null;
plane = null;
weather = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test A1d.ii
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`Test A1d.ii - Landing a Plane - landPlane does not land a plane if the weather is stormy`);

// Arrange
airport = new Airport;
plane = new Plane(`S117`);
weather = `stormy`;
expected = airport.apronPlanes.length;

// Act
airport.landPlane(plane, weather);
actual = airport.apronPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test A1d Result. The plane did not land because the weather was stormy: ${result}`);

// Cleanup
airport = null;
plane = null;
weather = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test A2a
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`Test A2a - Plane Takeoff - A plane that takes off leaves the apron`);

// Arrange
airport = new Airport;
plane = new Plane(`S117`);
weather = `clear`;
expected = airport.apronPlanes.length;

// Act
airport.landPlane(plane, weather);
console.log(`There are currently ${airport.apronPlanes.length} plane(s) in the apron`);
airport.takeoffPlane(plane, weather);
actual = airport.apronPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test A2a Result. The plane that took off did leave the apron: ${result}`);

// Cleanup
airport = null;
plane = null;
weather = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test A2b
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`Test A2b - Plane Takeoff - takeoffPlane only allows instances of Plane to take off`);

// Arrange
airport = new Airport;
plane = `343GS`;
let realPlane = new Plane(`S117`);
weather = `clear`;
expected = airport.apronPlanes.length + 1;

// Act
airport.landPlane(realPlane, weather);
airport.takeoffPlane(plane, weather);
actual = airport.apronPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test A2b Result. The Not a Plane was unable to take off: ${result} `);

// Cleanup
airport = null;
plane = null;
realPlane = null;
weather = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test A2c
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`Test A2c - Plane Takeoff - takeoffPlane only allows planes that are on the apron to take off`);

// Arrange
airport = new Airport;
plane1 = new Plane(`S117`);
plane2 = new Plane(`S034`);
weather = `clear`;
expected = airport.apronPlanes.length + 1;

// Act
airport.landPlane(plane1, weather);
console.log(`There are currently ${airport.apronPlanes.length} plane(s) in the apron`);
airport.takeoffPlane(plane2, weather);
actual = airport.apronPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test A2c Result. A plane that is not on the apron cannot take off: ${result} `);

// Cleanup
airport = null;
plane1 = null;
plane2 = null;
weather = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test A2d.i
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`Test A2d.i - Plane Takeoff - Planes take off in clear weather`);

// Arrange
airport = new Airport;
plane = new Plane(`S117`);
weather = `clear`;
expected = airport.apronPlanes.length;

// Act
airport.landPlane(plane, weather);
console.log(`There are currently ${airport.apronPlanes.length} plane(s) in the apron`);
airport.takeoffPlane(plane, weather);
actual = airport.apronPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test A2d.i Result. The plane took off because the weather was clear: ${result}`);

// Cleanup
airport = null;
plane = null;
weather = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test A2d.ii
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`Test A2d.ii - Plane Takeoff - Planes don't take off in stormy weather`);

// Arrange
airport = new Airport;
plane = new Plane(`S117`);
weather = `clear`;
expected = airport.apronPlanes.length + 1;

// Act
airport.landPlane(plane, weather);
console.log(`There are currently ${airport.apronPlanes.length} plane(s) in the apron`);
weather = `stormy`;
airport.takeoffPlane(plane, weather);
actual = airport.apronPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test A2d.ii Result. The plane did not take off because the weather was stormy: ${result}`);

// Cleanup
airport = null;
plane = null;
weather = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test A3a
console.log(`-----------------------------------------------------------------------------------------------------------------------`)
console.log(`Test A3a - Capacity Control - Can create airports with different capacities`)

// Arrange
smallAirport = new Airport(3);
airport = new Airport();
largeAirport = new Airport(50);
let expected1 = 3;
let expected2 = 10;
let expected3 = 50;

// Act
let actual1 = smallAirport.returnApCap();
let actual2 = airport.returnApCap();
let actual3 = largeAirport.returnApCap();

// Assert
let result1 = assertEquals(expected1, actual1);
let result2 = assertEquals(expected2, actual2);
let result3 = assertEquals(expected3, actual3);
console.log(`Test A3a Result 1. An airport created with a parameter of 3 has a capacity of 3: ${result1}`);
console.log(`Test A3a Result 2. An airport created without a parameter has a capacity of 10: ${result2}`);
console.log(`Test A3a Result 3. An airport created with a parameter of 50 has a capacity of 50: ${result3}`);

// Cleanup
smallAirport = null;
airport = null;
largeAirport = null;
expected1 = undefined;
expected2 = undefined;
expected3 = undefined;
actual1 = undefined;
actual2 = undefined;
actual3 = undefined;
result1 = undefined;
result2 = undefined;
result3 = undefined;


// Test A3b.i
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`Test A3b.i - Capacity Control - setApCap is able to decrease the capacity of an airport`);

// Arrange
airport = new Airport;
expected = 5;

// Act
airport.setApCap(5)
actual = airport.apCap;

// Assert
result = assertEquals(expected, actual);
console.log(`Test A3b.i Result. When setApCap is called on an airport with a parameter of 5 the new capacity is set to 5: ${result}`)

// Cleanup
airport = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test A3b.ii
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`Test A3b.ii - Capacity Control - setApCap is able to increase the capacity of an airport`);

// Arrange
airport = new Airport;
expected = 15;

// Act
airport.setApCap(15);
actual = airport.apCap;

// Assert
result = assertEquals(expected, actual);
console.log(`Test A3b.ii Result. When setApCap is called on an airport with a parameter of 15 the new capacity is set to 15: ${result}`);

// Cleanup
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test A4
console.log(`-----------------------------------------------------------------------------------------------------------------------`)
console.log(`Test A4 - Landing and Capacity - landPlane does not allow a plane to land if the apron is full`)

// Arrange
airport = new Airport;
plane = new Plane(`343GS`);
weather = `clear`;
airport.apronPlanes = [`S117`, `S038`, `K087`, `G093`, `F104`, `A111`, `M120`, `J052`, `O129`, `SB312`];
expected = airport.apronPlanes.length;

// Act
airport.landPlane(plane);
actual = airport.apronPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test A4 Result. A plane cannot land when the apron is at maximum capacity: ${result}`);

// Cleanup
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
