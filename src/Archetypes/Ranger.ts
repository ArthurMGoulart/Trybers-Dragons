import Archetype from './Archetype';
import { EnergyType } from '../Energy';
import ArchetypeEnergyType from './Enums';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(n: string) {
    super(n);
    this._energyType = ArchetypeEnergyType.RANGER;
    Ranger._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;
