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


function goodJob(arr) {
  arr.forEach(function(name) {
    console.log("Good Job, " + name + "!")
  })
}

goodJob(people)
