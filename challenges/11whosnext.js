function whosnext(persons, now) {
  // Write your code here
  const today = new Date(now);

  persons = persons.map(
    person => {
      const diff = new Date(person.birthday) - today;
      return { 'name': person.name, diff };
    })
    .sort((a, b) => a.diff - b.diff)

  if (persons.some(person => person.diff > 0)) { // at least one positive diff
    persons = persons.filter(person => person.diff > 0); // delete negatives
  }
  
  const result = persons.filter(person => person.diff === persons[0].diff)
  return (result.length === 1) ? result[0].name : result.map(person => person.name).sort()

}

const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {

    const persons = [
      { 'name': 'Thomas', 'birthday': '14 Jan' },
      { 'name': 'Tanja', 'birthday': '27 April' },
      { 'name': 'Marla', 'birthday': '12 June' },
      { 'name': 'Margarete', 'birthday': '25 August' },
      { 'name': 'Anne', 'birthday': '25 August' },
      { 'name': 'Laurin', 'birthday': '17 Nov' },
    ];

    assert.equal(whosnext(persons, '12 April'), 'Tanja');
    assert.equal(whosnext(persons, '1 October'), 'Laurin');
    assert.equal(whosnext(persons, '10 Dec'), 'Thomas');
    assert.deepEqual(whosnext(persons, '1 August'), ['Anne', 'Margarete']);
  });
});
