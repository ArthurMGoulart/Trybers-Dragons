import Race from './Race';
import MaxLifePoints from './Enums';

class Halfling extends Race {
  private _maxLifePoints: number;

  constructor(n: string, d: number) {
    super(n, d);
    this._maxLifePoints = MaxLifePoints.HALFLING;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
