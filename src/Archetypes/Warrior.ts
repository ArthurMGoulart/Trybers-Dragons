import Archetype from './Archetype';
import { EnergyType } from '../Energy';
import { ArchetypeEnergyType } from './Enums';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(n: string) {
    super(n);
    this._energyType = ArchetypeEnergyType.WARRIOR;
    Warrior._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;
