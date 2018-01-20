import { Location, MountainMap } from "../MountainMap";

export type Path = Location[];

export function calculatePaths(map: MountainMap): Path[] {
  const posibilities: Path[] = [];

  for (const location of map) {
    const paths = recursive(map, [location]);
    posibilities.push(...paths);
  }

  posibilities.sort((a: Path, b: Path) => {
    const deltaLength = b.length - a.length;
    if (deltaLength !== 0) return deltaLength;
    const dropA = map.valueOf(a[0]) - map.valueOf(a[a.length - 1]);
    const dropB = map.valueOf(b[0]) - map.valueOf(b[b.length - 1]);
    return dropB - dropA;
  });

  return posibilities;
}

function recursive(map: MountainMap, path: Path, paths: Path[] = []): Path[] {
  const isThereAnyFurtherPath = [
    testPath("east", map, path, paths),
    testPath("west", map, path, paths),
    testPath("north", map, path, paths),
    testPath("south", map, path, paths),
  ].reduce((previous, current) => previous || current, false);
  if (!isThereAnyFurtherPath) {
    paths.push(path);
  }

  return paths;
}

function testPath(
  move: "east" | "west" | "north" | "south",
  map: MountainMap,
  path: Path,
  paths: Path[] = [],
): boolean {
  const lastLocation = path[path.length - 1];
  const lastAltitude = map.valueOf(lastLocation);
  const newLocation: Location | null = map[`${move}Of`](lastLocation);
  if (newLocation && map.valueOf(newLocation) < lastAltitude) {
    recursive(map, [...path, newLocation], paths);
    return true;
  }

  return false;
}
