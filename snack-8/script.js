const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'
// const classeMarcoLanci = students.find(function (studente) {
//   if (studente.name = "Marco Lanci") {
//     return studente.class
//   }
// })
// console.log(classeMarcoLanci);
const classeMarcoLanci = students.find(function ({ name }) {
  return name === "Marco Lanci"
})
console.log(classeMarcoLanci.class);
