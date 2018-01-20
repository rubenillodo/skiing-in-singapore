import * as path from "path";
import { readTxtMatrix } from "./";

const matrix = [[4, 8, 7, 3], [2, 5, 9, 3], [6, 3, 2, 5], [4, 4, 1, 6]];

test("returns matrix", async () => {
  expect(await readTxtMatrix(path.join(__dirname, "./mapTest1.txt"))).toEqual(matrix);
});

test("allows empty final line", async () => {
  expect(await readTxtMatrix(path.join(__dirname, "./mapTest2.txt"))).toEqual(matrix);
});

test("throws if matrix does not have proper height", () => {
  expect(readTxtMatrix(path.join(__dirname, "./mapTest3.txt"))).rejects.toThrow();
});

test("throws if matrix does not have proper width", () => {
  expect(readTxtMatrix(path.join(__dirname, "./mapTest4.txt"))).rejects.toThrow();
});
