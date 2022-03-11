import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  private _player: Fighter;
  private _enviroment: (Fighter | SimpleFighter)[];

  constructor(
    p: Fighter,
    e: (Fighter | SimpleFighter)[] = [new Monster()],
  ) {
    super(p);
    this._player = p;
    this._enviroment = e;
  }
}

export default PVE;
