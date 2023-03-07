// This is for Node.js code

// Set up Node JS locally
// http://localhost:8080
const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
});

server.listen(port, hostname, () => {});

// Read files in directory
const fs = require('fs');
const path = require('path');
const directory = './music/';

fs.readdir(directory, (err, files) => {
    files.forEach(file => {
        let fileDetails = fs.lstatSync(path.resolve(directory, file));
        
        if(!fileDetails.isDirectory() && file.includes('.mp3')) console.log(file);
    })
});
