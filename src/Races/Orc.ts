import Race from './Race';
import { MaxLifePoints } from './Enums';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(n: string, d: number) {
    super(n, d);
    this._maxLifePoints = MaxLifePoints.ORC;
    Orc._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;
