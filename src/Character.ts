import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  public name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _dexterity: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;

  constructor(
    n: string,
    race: Race = new Elf(n, 2),
    archetype: Archetype = new Mage(n),
  ) {
    this.name = n;
    this._race = race;
    this._archetype = archetype;
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }
  
  get archetype(): Archetype {
    return this._archetype;
  }
  
  get lifePoints(): number {
    return this._lifePoints;
  }
  
  get strength(): number {
    return this._strength;
  }
  
  get defense(): number {
    return this._defense;
  }
  
  get dexterity(): number {
    return this._dexterity;
  }
  
  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) { 
      this._lifePoints -= damage;
    }
    // Check if Character died
    if (this._lifePoints <= 0) { 
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }
  
  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    // check if maxLifePoints exceeded raceMaxLifePoints
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: SimpleFighter): void {
    // All in 50/50
    const flip = getRandomInt(1, 2);
    if (flip === 1) {
      this.receiveDamage(99999);
    } else {
      for (let i = 0; i < 20; i += 1) {
        this.attack(enemy);
      }
    }
  }
}

export default Character;
