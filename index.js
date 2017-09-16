
// Positive Numbers
var nums = [0, -1, 3, 5, -1, -3, 4, 8];

var newArr = nums.filter(function(num){
  return num > 0;
});

console.log(newArr);


// Even Numbers

var nums = [0, -1, 3, 5, -1, -3, 4, 8]

var newArr = nums.filter(function(num){
  return num % 2 === 0;
});

console.log(newArr);


// Square the  Numbers

var nums = [0, -1, 3, 5, -1, -3, 4, 8]

var newArr = nums.map(function(num){
  return num * num;
});

console.log(newArr);

// City Temps less than 70 degrees

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

var newArr = cities.filter(function(city) {
  return city.temperature < 70;
});

console.log(newArr);

// City - array of ciy names

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

var newArr = cities.map(function(city) {
  return city.name;
});

console.log(newArr);



var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

 people.forEach(function(name){
  console.log("Good Job, " + name + "!");
 });

// Sort an array of people alphabetically

 var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

var newArray = people.sort(function(firstPerson, secondPerson) {
  if (firstPerson < secondPerson) {
    return -1;
  } else if (firstPerson > secondPerson) {
    return 1;
  } else {
    return 0;
  }
});
 console.log(newArray);

//Sort an array of people by name length

 var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

 var newArray = people.sort(function(firstPerson, secondPerson) {
  return firstPerson.length - secondPerson.length;
 });

 console.log(newArray);


// Sum of an array

var sum = [1, 2, 3].reduce(function (a, b) {
  return a + b;
});

console.log(sum);

// Acronym Generator

function acronym(text) {
  return text
    .split(/\s/)
    .reduce(function(accumulator, word) {
      return accumulator + word.charAt(0);
    }, '');
}

console.log(acronym('Very Important Person'));
