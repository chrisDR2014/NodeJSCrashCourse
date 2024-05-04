import url from 'url';

const urlString = 'http://www.google.com/search?q=nodejs';

// URL Object
const urlObject = new URL(urlString);
console.log(urlObject);

// format()
console.log(url.format(urlObject));

// import.meta.url - file URL
console.log(import.meta.url);

// fileUrlToPath()
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObject.search)

const params = new URLSearchParams(urlObject.search)
console.log(params.get('q'))
params.append('limit', '5')
console.log(params)
params.delete('limit')
console.log(params)