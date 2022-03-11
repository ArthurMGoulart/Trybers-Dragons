import Fighter, { Enviroment, SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  private _player: Fighter;
  private _enviroment: Enviroment;
  private _end: boolean;

  constructor(
    p: Fighter,
    e: Enviroment = [new Monster()],
  ) {
    super(p);
    this._player = p;
    this._enviroment = e;
    this._end = false;
  }

  fight(): number {
    while (!this._end) {
      this.turn();
    }
    if (this._player.lifePoints !== -1) {
      return 1;
    }
    return -1;
  }

  turn(): boolean {
    const enemy = this._enviroment[this._enviroment.length - 1];
    this._player.attack(enemy);
    if (this.checkDeadEnemy(enemy)) return true;
    this.enviromentAttacks();
    return false;
  }

  enviromentAttacks(): void {
    this._enviroment.forEach((enemy: Fighter | SimpleFighter) => {
      enemy.attack(this._player);
      if (this.checkDeadPlayer()) return true;
    });
  }

  checkDeadPlayer(): boolean {
    if (this._player.lifePoints === -1) {
      this._end = true;
      return true;
    }
    return false;
  }

  checkDeadEnemy(enemy: Fighter | SimpleFighter): boolean {
    if (enemy.lifePoints === -1) {
      // Kills monster from enviroment and checks if enviroment is undefined
      const popped = this._enviroment.pop();
      if (!popped) {
        this._end = true;
        return true;
      }
    }
    return false;
  }
}

export default PVE;
