import * as fs from "fs-extra";

export async function readTxtMatrix(path): Promise<number[][]> {
  const file = await fs.readFile(path, { encoding: "utf-8" });
  const processedFile = file.split("\n").map((line) => line.split(" ").map((item) => Number.parseInt(item, 10)));
  const size = { x: processedFile[0][0], y: processedFile[0][1] };

  const matrix = processedFile.slice(1).filter((line) => line.length === size.x);
  if (matrix.length !== size.y) {
    throw new Error(`Expected matrix size (${size.y}) differs from its real size (${processedFile.length})`);
  }

  return matrix;
}
