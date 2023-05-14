function rover(way) {
  // Write your code here
  const directions = ["north", "west", "south", "east"]
  let currentDirIndex = 0;
  const map = {
    north: { x: 0, y: 1 },
    west: { x: 1, y: 0 },
    south: { x: 0, y: -1 },
    east: { x: -1, y: 0 },
  }

  const walk = (currentDirIndex) => map[directions[currentDirIndex]]

  const position = { x: 0, y: 0 }
  way.split("").forEach((elem) => {
    switch (elem) {
      case "r":
        currentDirIndex = ((currentDirIndex + 1) % 4);
        break;
      case "l":
        currentDirIndex = ((currentDirIndex - 1) % 4);
        break;
      case "f":
        position.x += walk(currentDirIndex).x;
        position.y += walk(currentDirIndex).y;
        break;
    }
  });
  return position;
}

const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.deepEqual(rover('rffffr'), { x: 4, y: 0 });
    assert.deepEqual(rover('rfrfrfrfr'), { x: 0, y: 0 });
    assert.deepEqual(rover('ffrfrflflfrf'), { x: 3, y: 2 });
    assert.deepEqual(rover('rfffrfffrf'), { x: 2, y: -3 });
  });
});
