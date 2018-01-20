import { MountainMap } from "../MountainMap";
import { calculatePaths } from "./";

const map = new MountainMap([[4, 8, 7, 3], [2, 5, 9, 3], [6, 3, 2, 5], [4, 4, 1, 6]]);

test("returns a sorted list of locations down the mountain per initial location", () => {
  expect(calculatePaths(map)).toEqual([
    [{ x: 2, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
    [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
    [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
    [{ x: 3, y: 3 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
    [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
    [{ x: 1, y: 3 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
    [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
    [{ x: 2, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 1 }],
    [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }],
    [{ x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }],
    [{ x: 2, y: 1 }, { x: 2, y: 0 }, { x: 3, y: 0 }],
    [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }],
    [{ x: 3, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
    [{ x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }],
    [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
    [{ x: 2, y: 1 }, { x: 3, y: 1 }],
    [{ x: 3, y: 3 }, { x: 2, y: 3 }],
    [{ x: 0, y: 2 }, { x: 0, y: 1 }],
    [{ x: 2, y: 0 }, { x: 3, y: 0 }],
    [{ x: 1, y: 1 }, { x: 0, y: 1 }],
    [{ x: 1, y: 3 }, { x: 2, y: 3 }],
    [{ x: 0, y: 0 }, { x: 0, y: 1 }],
    [{ x: 3, y: 2 }, { x: 3, y: 1 }],
    [{ x: 0, y: 2 }, { x: 0, y: 3 }],
    [{ x: 2, y: 2 }, { x: 2, y: 3 }],
    [{ x: 0, y: 3 }],
    [{ x: 2, y: 3 }],
    [{ x: 0, y: 1 }],
    [{ x: 3, y: 0 }],
    [{ x: 3, y: 1 }],
  ]);
});
