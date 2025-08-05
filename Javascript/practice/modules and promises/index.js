const { processFiles } = require('./processor');

(async function () {
  try {
    await processFiles();
    console.log("All files processed!");
  } catch (err) {
    console.error("An error occurred:", err.message);
  }
})();
