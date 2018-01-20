import * as commandLineArgs from "command-line-args";
import * as path from "path";
import { calculatePaths } from "./calculatePaths";
import { MountainMap } from "./MountainMap";
import { readTxtMatrix } from "./readTxtMatrix";

const options = commandLineArgs([{ name: "mapFile", defaultOption: true }]);

(async () => {
  const map = new MountainMap(await readTxtMatrix(path.resolve(options.mapFile)));
  const bestPath = calculatePaths(map)[0];
  const altitudes = bestPath.map((position) => map.valueOf(position));
  const solution = {
    altitudes,
    drop: altitudes[0] - altitudes[altitudes.length - 1],
    length: bestPath.length,
    route: bestPath,
  };
  process.stdout.write(`${JSON.stringify(solution, null, 2)}\n`);
})();
