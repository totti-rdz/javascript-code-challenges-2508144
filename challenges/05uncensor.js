function uncensor(infected, remedy) {
  // Write your code here
  let result = "";
  let remedyIndex = 0;
  for (let i = 0; i < infected.length; i++) {
    if (infected[i] === "*") {
      result += remedy[remedyIndex];
      remedyIndex++;
    } else {
      result += infected[i]
    }
  }
  return result
}


const { assert } = require('chai');
describe("Tests", function () {
  it("tests", () => {
    assert.deepEqual(uncensor('H*l** W*l*', 'aloet'), 'Hallo Welt');
    assert.deepEqual(uncensor('G*h*im*r T*xt', 'eeee'), 'Geheimer Text');
    assert.deepEqual(uncensor('J*v**c*ipt r*l*z*', 'aaSrue!'), 'JavaScript rulez!');
  });
});
