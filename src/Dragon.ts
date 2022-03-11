import Monster from './Monster';

class Dragon extends Monster {
  constructor(s = 63) {
    super(undefined, s);
    this._lifePoints = 999;
  }
}

export default Dragon;
