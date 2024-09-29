const fs = require("fs");

// Read file asynchronously (non-blocking)
fs.readFile("plainText.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  // Output the content to the terminal
  console.log(data);
});
