/* eslint-disable max-lines-per-function */
import { Races } from '../Races/Enums';
import Race, { Dwarf, Elf, Halfling, Orc } from '../Races';
import getRandomInt from '../utils';

class RaceFabric {
  static createRace(n: string, r: string): Race {
    let race;
    const dexterity = getRandomInt(1, 10);
    switch (r) {
      case Races.DWARF:
        race = new Dwarf(n, dexterity);
        break;
      case Races.ELF:
        race = new Elf(n, dexterity);
        break;
      case Races.HALFLING:
        race = new Halfling(n, dexterity);
        break;
      case Races.ORC:
        race = new Orc(n, dexterity);
        break;
      default:
        race = new Dwarf(n, dexterity);
    }
    return race;
  }
}

export default RaceFabric;
