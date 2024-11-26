const http = require('http');
const fs = require('fs/promises');
countStudents = require('./3-read_file_async')

const app = http.createServer(async (req, res) => {
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    const databasePath = process.argv[2];
    if (!databasePath) {
      res.end('This is the list of our students\nCannot load the database');
      return;
    }

    try {
      const studentData = await countStudents(databasePath);
      res.end(`This is the list of our students\n${studentData}`);
    } catch (error) {
      res.end('This is the list of our students\nCannot load the database');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
