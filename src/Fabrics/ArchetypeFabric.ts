/* eslint-disable max-lines-per-function */
import Archetype, { Mage, Necromancer, Ranger, Warrior } from '../Archetypes';
import { Archetypes } from '../Archetypes/Enums';

class ArchetypeFabric {
  static createArchetype(n: string, a: string): Archetype {
    let archetype;
    switch (a) {
      case Archetypes.MAGE:
        archetype = new Mage(n);
        break;
      case Archetypes.NECROMANCER:
        archetype = new Necromancer(n);
        break;
      case Archetypes.WARRIOR:
        archetype = new Warrior(n);
        break;
      case Archetypes.RANGER:
        archetype = new Ranger(n);
        break;
      default:
        archetype = new Mage(n);
    }
    return archetype;
  }
}

export default ArchetypeFabric;
