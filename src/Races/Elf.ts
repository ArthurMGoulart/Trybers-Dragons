import Race from '.';

class Dwarf extends Race {
  private _maxLifePoints: number;

  constructor(n: string, d: number) {
    super(n, d);
    this._maxLifePoints = 99;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;
