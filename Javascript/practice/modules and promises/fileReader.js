const fs = require('fs').promises;

async function readFileAsync(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return data;
  } catch (err) {
    return `Error reading file "${filePath}": ${err.message}`;
  }
}

module.exports = { readFileAsync };
