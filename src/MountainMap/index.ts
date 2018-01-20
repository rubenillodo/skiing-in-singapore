export interface Location {
  x: number;
  y: number;
}

export class MountainMap implements Iterable<Location> {
  private matrix: number[][];
  private size: { x: number; y: number };

  constructor(matrix) {
    this.matrix = matrix;
    this.size = { x: matrix[0].length, y: matrix.length };
  }

  public valueOf(location: Location): number {
    return this.matrix[location.y][location.x];
  }

  public northOf(location: Location): Location | null {
    return this.move(location, 0, -1);
  }

  public southOf(location: Location): Location | null {
    return this.move(location, 0, 1);
  }

  public westOf(location: Location): Location | null {
    return this.move(location, -1, 0);
  }

  public eastOf(location: Location): Location | null {
    return this.move(location, 1, 0);
  }

  public [Symbol.iterator]() {
    const size = this.size;

    return {
      x: 0,
      y: 0,
      next(): IteratorResult<Location> {
        if (this.x >= size.x) {
          this.x = 0;
          this.y += 1;
        }

        return {
          done: this.y >= size.y,
          value: { x: this.x++, y: this.y },
        };
      },
    };
  }

  private move(location: Location, deltaX: number, deltaY: number): Location | null {
    const newPosition = { x: location.x + deltaX, y: location.y + deltaY };
    if (!this.isLocationValid(newPosition)) return null;
    return newPosition;
  }

  private isLocationValid(location: Location): boolean {
    return location.x >= 0 && location.x < this.size.x && location.y >= 0 && location.y < this.size.y;
  }
}
