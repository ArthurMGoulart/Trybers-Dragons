import Race from './Race';
import { MaxLifePoints } from './Enums';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(n: string, d: number) {
    super(n, d);
    this._maxLifePoints = MaxLifePoints.DWARF;
    Dwarf._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;
