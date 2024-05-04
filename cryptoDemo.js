import crypto from 'crypto';

/* 
// createHash()
const hash = crypto.createHash('SHA256');
hash.update('Hello World');
const hashText = hash.digest('hex');

const checkHash = crypto.createHash('SHA256');
checkHash.update('Hello World');
const checkHashText = checkHash.digest('hex');


if (checkHashText === hashText) {
    console.log('Hashes are equal!');
}

// randomBytes()
crypto.randomBytes(16, (err, buf) => {
    if (err) throw err;
    console.log(buf.toString('hex'));
});
*/

// createCipheriv & createDecipheriv
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello World', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);