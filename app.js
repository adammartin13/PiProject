// This is for Node.js code

// Set up JSON HTTP output
var http = require('http');

// Read files in directory
const fs = require('fs');
const path = require('path');
const directory = './music/';
// Get data.json
var data = fs.readFileSync('data.json');
var myObject = JSON.parse(data);

fs.readdir(directory, (err, files) => {
    files.forEach(file => {
        let fileDetails = fs.lstatSync(path.resolve(directory, file));
        
        if(!fileDetails.isDirectory() && file.includes('.mp3') && fileUnique(file)){
            console.log(file);
            addFile(file);
        }
    })

    // Write to local server
    var app = http.createServer(function(req,res){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(myObject));
    });

    app.listen(8080);

    // Write to musicData.js file
    const content = 'var musicData = ' + JSON.stringify(myObject) + ';\n' + 
    "for (var it = 0; it < musicData.length; it++){ console.log(musicData[it].name)}\n" + 
    
    "function updateTable(){\n" +
        '\tvar tableHeader = \"<tr><th style=\\"text-align:left;border-left:none;\\">Files</th>\" + \n\t' +
        '\"<th><img src=\\"./images/desktop.png\\" alt=\\"desktop\\" width=\\"40px\\" height=\\"40px\\"></th>\" + \n\t' +
        '\"<th><img src=\\"./images/cellphone.png\\" alt=\\"cellphone\\" width=\\"40px\\" height=\\"40px\\"></th>\" + \n\t' +
        '\"<th><img src=\\"./images/googleDrive.png\\" alt=\\"Google Drive\\" width=\\"40px\\" height=\\"40px\\"></th></tr>\";\n\t' +
        
        "var songList = \"\";\n\t" +
        
        'for (var it = 0; it < musicData.length; it++){ \n\t\tsongList += \"<tr><td class=\\"song\\"><button onclick=\\"songClick()\\">\" + musicData[it].name + \"</button></td><td>X</td><td>X</td><td>X</td></tr>\";\n\t}' +
    
        "\tdocument.getElementById('listData').innerHTML = tableHeader + songList;\n" +
    "}" +
    
    "\nwindow.onload = updateTable;\n";

    fs.writeFile('./musicData.js', content, err => {
        if (err) {
            console.error(err);
        }
    });
});

// Check if file exists
function fileUnique(file){
    var unique = true;
    for(var it = 0; it < myObject.length; it++){
        if(myObject[it].name == file) unique = false;
    }
    return unique;
}

// Add file to data.json
function addFile(file){
    let newData = {
        "name":file,
    };
    myObject.push(newData);
    var newData2 = JSON.stringify(myObject);
    fs.writeFile('./data.json', newData2, (err) => {
        if (err) throw err;
        console.log("data added");
    });
}