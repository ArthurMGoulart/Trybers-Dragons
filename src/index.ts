import reader from './Reader';

reader.question('Is this example useful? [y/n] ', (answer) => {
  switch (answer.toLowerCase()) {
    case 'y':
      console.log('Super!');
      break;
    case 'n':
      console.log('Sorry! :(');
      break;
    default:
      console.log('Invalid answer!');
  }
  reader.close();
});
