import * as readline from 'readline';

class Reader {
  private _reader: readline.Interface;

  constructor() {
    this._reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  get reader(): readline.Interface {
    return this._reader;
  }
}

export default Reader;
