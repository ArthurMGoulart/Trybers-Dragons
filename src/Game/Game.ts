/* eslint-disable max-lines-per-function */
/* eslint-disable class-methods-use-this */
import Character from '../Character';
import { RaceFabric, ArchetypeFabric } from '../Fabrics';

class Game {
  private _characters: Character[] = [];

  createCharacter(n: string, r: string, a: string) {
    const race = RaceFabric.createRace(n, r);
    const archetype = ArchetypeFabric.createArchetype(n, a);
    const newCharacter = new Character(n, race, archetype);
    this._characters.push(newCharacter);
  }
}

export default Game;
