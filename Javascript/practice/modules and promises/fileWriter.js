const fs = require('fs').promises;

async function writeFileAsync(filePath, content) {
  try {
    await fs.writeFile(filePath, content, 'utf-8');
    return `Successfully wrote to ${filePath}`;
  } catch (err) {
    return `Error writing to file "${filePath}": ${err.message}`;
  }
}

module.exports = { writeFileAsync };
