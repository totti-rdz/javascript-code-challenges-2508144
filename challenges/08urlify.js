function urlify(s) {
  // Write your code here
  const map = {
    " ": "%20",
    "ö": "%C3%B6"
  }

  return s.split("").map((elem) => (Object.keys(map).includes(elem)) ? map[elem] : elem).join("")

}

const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.equal(urlify('Hallo Welt'), 'Hallo%20Welt');
    assert.equal(urlify('Vielen Dank, Thomas'), 'Vielen%20Dank,%20Thomas');
    assert.equal(urlify('Schöne Bilder!'), 'Sch%C3%B6ne%20Bilder!');
  });
});
