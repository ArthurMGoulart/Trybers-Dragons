import Battle from './Battle';
import getRandomInt from '../utils';
import Fighter from '../Fighter';

class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;
  private _end: boolean;

  constructor(c1: Fighter, c2: Fighter) {
    super(c1);
    this._player1 = c1;
    this._player2 = c2;
    this._end = false;
  }

  fight(): number {
    const start = getRandomInt(1, 2) === 1;
    while (!this._end) {
      this.turnFlip(start);
    }
    if (this._player1.lifePoints !== -1) {
      return 1;
    }
    return -1;
  }

  turnFlip(iniciative: boolean): void {
    if (iniciative) {
      this.turn(this._player1, this._player2);
    } else {
      this.turn(this._player2, this._player1);
    }
  }

  turn(first: Fighter, second: Fighter): void {
    first.attack(second);
    if (this.checkDead(second)) return;
    second.attack(first);
    this.checkDead(first);
  }

  checkDead(player: Fighter): boolean {
    if (player.lifePoints === -1) {
      this._end = true;
      return true;
    }
    return false;
  }
}

export default PVP;
