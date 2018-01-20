import { MountainMap } from "./";

const map = new MountainMap([[4, 8, 7, 3], [2, 5, 9, 3], [6, 3, 2, 5], [4, 4, 1, 6]]);

test("valueOf() returns the altitude of a given location", () => {
  expect(map.valueOf({ x: 0, y: 1 })).toBe(2);
  expect(map.valueOf({ x: 2, y: 3 })).toBe(1);
});

describe("northOf()", () => {
  test("returns the right location", () => {
    expect(map.northOf({ x: 2, y: 2 })).toEqual({ x: 2, y: 1 });
  });

  test("returns null if passed a location where y <= 0", () => {
    expect(map.northOf({ x: 2, y: 0 })).toBeNull();
  });
});

describe("southOf()", () => {
  test("returns the right location", () => {
    expect(map.southOf({ x: 0, y: 0 })).toEqual({ x: 0, y: 1 });
  });

  test("returns null if passed a location where y >= map.size.y - 1", () => {
    expect(map.southOf({ x: 2, y: 3 })).toBeNull();
  });
});

describe("eastOf()", () => {
  test("returns the right location", () => {
    expect(map.eastOf({ x: 2, y: 2 })).toEqual({ x: 3, y: 2 });
  });

  test("returns null if passed a location where x >= map.size.x - 1", () => {
    expect(map.eastOf({ x: 3, y: 2 })).toBeNull();
  });
});

describe("westOf()", () => {
  test("returns the right location", () => {
    expect(map.westOf({ x: 2, y: 2 })).toEqual({ x: 1, y: 2 });
  });

  test("returns null if passed a location where x <= 0", () => {
    expect(map.westOf({ x: 0, y: 2 })).toBeNull();
  });
});

test("can be iterated", () => {
  expect([...map]).toEqual([
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 3, y: 1 },
    { x: 0, y: 2 },
    { x: 1, y: 2 },
    { x: 2, y: 2 },
    { x: 3, y: 2 },
    { x: 0, y: 3 },
    { x: 1, y: 3 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
  ]);
});
