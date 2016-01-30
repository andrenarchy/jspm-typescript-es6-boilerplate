import 'babel-polyfill';
import * as jquery from 'jquery';
import {module, element} from 'angular';

// wrap setTimeout as promise
function wait(milliseconds: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, milliseconds);
  });
}

(async function () {
  const foo = 'bar';
  console.log(foo);

  console.log(jquery);
  console.log(module);
  console.log(element);

  console.log('before');
  await wait(5000);
  console.log('after');
})();
