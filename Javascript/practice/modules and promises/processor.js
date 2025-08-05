const path = require('path');
const { readFileAsync } = require('./fileReader');
const { writeFileAsync } = require('./fileWriter');

async function processFiles() {
  const inputFiles = ['files/file1.txt', 'files/file2.txt'];

  for (let inputFile of inputFiles) {
    const content = await readFileAsync(inputFile);

    if (content.startsWith('Error')) {
      console.log(content);
      continue;
    }

    // Example transformation: uppercase + timestamp
    const timestamp = new Date().toISOString();
    const transformed = `${timestamp}\n${content.toUpperCase()}`;

    // Create output file path
    const baseName = path.basename(inputFile, '.txt');
    const outputPath = `files/${baseName}_processed.txt`;

    const result = await writeFileAsync(outputPath, transformed);
    console.log(result);
  }
}

module.exports = { processFiles };
