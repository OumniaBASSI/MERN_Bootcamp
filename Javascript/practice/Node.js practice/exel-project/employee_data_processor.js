const XLSX = require("xlsx");
const fs = require("fs");

// Input file path
const inputFile = "employees.xlsx"; // change if using CLI

// Check if file exists
if (!fs.existsSync(inputFile)) {
  console.error("File not found:", inputFile);
  process.exit(1);
}

// Read workbook
const workbook = XLSX.readFile(inputFile);

// Get the first worksheet
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert to JSON
let employees = XLSX.utils.sheet_to_json(worksheet);
