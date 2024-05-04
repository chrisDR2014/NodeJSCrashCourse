/* import fs from 'fs'

// readFile () - callback
fs.readFile('./data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// readFileSync() - Synchronous version
const data = fs.readFileSync('./data.txt', 'utf8');
console.log(data);
*/

import fs from 'fs/promises'

// readFile() - Promise .then()
//fs.readFile('./data.txt', 'utf8').then((data) => console.log(data)).catch((err) => console.log(err));

// readFile() - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile('./data.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}


// writeFile()

const writeFile = async () => {
  try {
    await fs.writeFile('./data.txt', 'Hello World, I am writing to this file...');
    console.log('File written to..')
  } catch (err) {
    console.log(err);
  }
}

// appendFile()

const appendFile = async () => {
  try {
    await fs.appendFile('./data.txt', '\nHello World, I am appending to this file...');
    console.log('File appended to..')
  } catch (err) {
    console.log(err);
  }
}

writeFile();
appendFile();
readFile();
