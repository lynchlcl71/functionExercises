
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

 people.sort()

 console.log(people);












































