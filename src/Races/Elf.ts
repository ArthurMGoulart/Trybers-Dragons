import Race from './Race';
import MaxLifePoints from './Enums';

class Elf extends Race {
  private _maxLifePoints: number;

  constructor(n: string, d: number) {
    super(n, d);
    this._maxLifePoints = MaxLifePoints.ELF;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
