import { ReadLine } from 'readline';
import Game from '../Game';
import reader from '../Reader';

class Writer {
  private _reader: ReadLine = reader;
  private _controller: Game = new Game();

  get reader() {
    return this._reader;
  }

  menu() {
    this.reader.question(`1 - Create Character 2
    - Play 3 - Create Dragon`, (answer) => {
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
          console.log('Invalid answer!');
      }
      reader.close();
    });
  }

  createCharacter() {
    this.reader.question('', (answer) => {
      
    });
  }

  play() {
    this.reader.question('Ply', (answer) => {
      
    });
  }

  createDragon() {
    this.reader.question('Dragon', (answer) => {
      
    });
  }
}

export default Writer;
