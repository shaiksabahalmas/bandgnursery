const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = "./frontend/src/assets";
const outputDir = "./frontend/src/assets/webp";

// Recursively convert files
function convertDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      convertDir(filePath);
    } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
      const relativePath = path.relative(inputDir, filePath);
      const outPath = path.join(outputDir, relativePath).replace(/\.(png|jpg|jpeg)$/i, ".webp");

      fs.mkdirSync(path.dirname(outPath), { recursive: true });

      sharp(filePath)
        .webp({ quality: 80 })
        .toFile(outPath)
        .then(() => console.log(`Converted: ${filePath} → ${outPath}`))
        .catch(err => console.error(`Error converting ${filePath}:`, err));
    }
  });
}

convertDir(inputDir);
