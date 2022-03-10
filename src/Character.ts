import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter/Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _dexterity: number;
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;

  constructor(n: string) {
    this._name = n;
    this._race = new Elf(n, 20);
    this._archetype = new Mage(n);
    this._maxLifePoints = Math.floor(this._race.maxLifePoints / 2);
    this.lifePoints = this._maxLifePoints;
    this.strength = getRandomInt(1, 10);
    this.defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this.energy = {
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

  getLifePoints(): number {
    return this.lifePoints;
  }

  getStrength(): number {
    return this.lifePoints;
  }
  
  getDefense(): number {
    return this.defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  getEnergy(): Energy | undefined {
    return this.energy;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.getStrength());
  }

  special(enemy: Fighter): void {
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

  levelUp(): void {
    this.upAttributes();
    this.fullEnergyAmount();
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.getDefense();
    if (damage > 0) {
      this.lifePoints -= damage;
      // check if Character died!
      if (this.lifePoints <= 0) {
        this.lifePoints = -1;
      }
    }
    return this.lifePoints;
  }

  upAttributes(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    // check if maxLifePoints exceeded raceMaxLifePoints
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this.strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this.defense += getRandomInt(1, 10);
    this.lifePoints = this._maxLifePoints;
  }

  fullEnergyAmount(): void {
    this.energy = {
      type_: this._archetype.energyType,
      amount: 10,
    };
  }
}

export default Character;
