import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor(l = 85, s = 63) {
    this._lifePoints = l;
    this._strength = s;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }
  
  get strength(): number {
    return this._strength;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    if (attackPoints > 0) { 
      this._lifePoints -= attackPoints;
    }
    // Check if Monster died
    if (this._lifePoints <= 0) { 
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }
}

export default Monster;
