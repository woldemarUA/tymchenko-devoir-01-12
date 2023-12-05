const fs = require('fs');
const xmlData = fs.readFileSync('../cv.xml', 'utf8');


// const parser = new DOMParser();

// const xmlDoc = parser.parseFromString(xmlData, 'application/xhtml+xml');

console.log(xmlData)