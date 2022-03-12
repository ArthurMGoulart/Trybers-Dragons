/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import Game from '../Game';
import { Archetypes } from '../Archetypes/Enums';
import { Races } from '../Races/Enums';
import Reader from '../Reader';

const INVALID_OPTION = 'Invalid Option';

class Writer {
  private _reader: Reader = new Reader();
  private _controller: Game = new Game();

  get reader() {
    return this._reader.reader;
  }

  start() {
    this.menu();
  }

  menu() {
    this.reader.question(`------ Menu Trybers&Dragons ------
       1 - Create Character\n       2 - Play\n       3 - Create Dragon\n`, (answer) => {
      switch (answer.toLowerCase()) {
        case '1':
          this.createCharacter();
          break;
        case '2':
          this.play();
          break;
        case '3':
          this.createDragon();
          break;
        default:
          console.log(INVALID_OPTION);
          this.reader.close();
      }
    });
  }

  async createCharacter() {
    const name = await this.askName();
    const race = await this.chooseRace();
    const archetype = this.chooseArchetype();
    this._controller.createCharacter(name, race, archetype);
  }

  async askName(): Promise<string> {
    let name = '';
    await this.reader.question('What is your name?', (answer) => { 
      name = answer;
    });
    return name;
  }

  chooseRace(): string {
    let race = '';
    this.reader.question(`Choose your Race:
    1 - Dwarf \n 2 - Elf \n 3 - Halfling \n 4 - Orc`, (answer) => {
      switch (answer.toLowerCase()) {
        case '1':
          race = Races.DWARF;
          break;
        case '2':
          race = Races.ELF;
          break;
        case '3':
          race = Races.HALFLING;
          break;
        case '4':
          race = Races.ORC;
          break;
        default:
          console.log(INVALID_OPTION);
          this.chooseRace();
      }
    });
    return race;
  }

  chooseArchetype(): string {
    let archetype = '';
    this.reader.question(`Choose your Archetype:
    1 - Mage /n 2 - Necromancer /n 3 - Warrior /n 4 - Ranger`, (answer) => {
      switch (answer.toLowerCase()) {
        case '1':
          archetype = Archetypes.MAGE;
          break;
        case '2':
          archetype = Archetypes.NECROMANCER;
          break;
        case '3':
          archetype = Archetypes.WARRIOR;
          break;
        case '4':
          archetype = Archetypes.RANGER;
          break;
        default:
          console.log(INVALID_OPTION);
          this.chooseArchetype();
      }
    });
    return archetype;
  }

  play() {
    this.reader.question('Play', (answer) => answer);
  }

  createDragon() {
    this.reader.question('Dragon', (answer) => answer);
  }
}

export default Writer;
