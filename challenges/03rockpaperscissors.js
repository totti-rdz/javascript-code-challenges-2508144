const rps = (p1, p2) => {
  // Write your code here
  if (p1 === p2) return 0;

  const map = {
    paper: 1,
    scissors: 2,
    rock: 3,
  }

  // in a sequence of paper(1) < scissors(2) < rock(3) 
  // the greater wins as long as the distance is 1, else the smaller wins
  // can be probably solved with modulo in a more elegant way
  if (Math.abs(map[p1] - map[p2]) === 1) {
    return map[p1] > map[p2] ? 1 : 2;
  } else {
    return map[p2] < map[p1] ? 2 : 1;
  }

}

const { assert } = require('chai');
describe('Tests', () => {
  it("tests", () => {
    assert.equal(rps('rock', 'scissors'), 1);
    assert.equal(rps('scissors', 'paper'), 1);
    assert.equal(rps('paper', 'rock'), 1);

    assert.equal(rps('scissors', 'rock'), 2);
    assert.equal(rps('paper', 'scissors'), 2);
    assert.equal(rps('rock', 'paper'), 2);

    assert.equal(rps('rock', 'rock'), 0);
    assert.equal(rps('scissors', 'scissors'), 0);
    assert.equal(rps('paper', 'paper'), 0);
  });
});
