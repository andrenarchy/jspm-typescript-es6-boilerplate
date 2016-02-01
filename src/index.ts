// import 'angular';
// import 'pdfjs';

import {num, sleep} from './utils';

const name: string = 'schlömi';

console.log('lol', name, num);

(async function() {
  console.log('before');
  await sleep(3000);
  console.log('after');
})();

console.log('lol', name, num);
