import http from 'http';
const PORT = process.env.PORT || 3000;
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const server = http.createServer(async (req, res) => {
  /*res.setHeader('Content-Type', 'text/html');
  res.statusCode = 404; 
  console.log(req.url);
  console.log(req.method);*/

  try 
  {
    if (req.method === 'GET') {
      let filePath;
      if(req.url === '/'){
        filePath = path.join(__dirname, 'public', 'index.html');
      } else if(req.url === '/about'){
        filePath = path.join(__dirname, 'public', 'about.html');
      } else {
        throw new Error('Not found');
      }
      
      const data = await fs.readFile(filePath);
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    } else {
      throw new Error('Method not allowed');
    }

  } catch (error) {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 500;
    res.end('Server Error')
  }
  
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});