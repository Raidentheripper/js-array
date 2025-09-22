// З масива людей(people) Вам потрібно знайти людину за іменем(name)
function findByName(people, name) {
  for (const person of people) {
    if (person.name === name) {
      return person;
    }
  }
  return undefined;
}

module.exports = findByName;