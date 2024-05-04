import path from 'path'
import url from 'url'

const filePath = './dir1/dir2/dir3/file.txt';

// basename()
console.log(path.basename(filePath));

// dirname()
console.log(path.dirname(filePath));

// extname()
console.log(path.extname(filePath));

// parse()
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

// join()
console.log(path.join(__dirname, 'dir1', 'dir2', 'dir3', 'file.txt'));

// resolve()
console.log(path.resolve(__dirname, 'dir1', 'dir2', 'dir3', 'file.txt'));