// test.js
const { getData } = require('./googlesheet');

(async () => {
  const resp = await getData('1OizXr06bfW5jJIWec7Gj0moUnmFgXS20BExuSm9Rf8w', '0');
  console.log(resp);
})();
 

