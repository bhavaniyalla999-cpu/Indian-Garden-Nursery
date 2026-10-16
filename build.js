const fs = require('fs');
const path = require('path');

const wwwDir = path.join(__dirname, 'www');

// Create www directory if it doesn't exist
if (!fs.existsSync(wwwDir)) {
  fs.mkdirSync(wwwDir);
}

const allowedExtensions = ['.html', '.css', '.js', '.jpg', '.png', '.json', '.xml', '.txt'];
const ignoredFiles = ['build.js', 'package.json', 'package-lock.json', 'capacitor.config.json'];

function copyFiles(srcDir, destDir) {
  const files = fs.readdirSync(srcDir);

  for (const file of files) {
    // Ignore node_modules, .git, www, node
    if (file === 'node_modules' || file === '.git' || file === 'www' || file === 'node' || file === 'android') {
      continue;
    }

    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);

    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      // Create subdirectory in dest
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath);
      }
      copyFiles(srcPath, destPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (allowedExtensions.includes(ext) && !ignoredFiles.includes(file)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${file} to www/`);
      }
    }
  }
}

console.log('Copying web assets to www folder...');
copyFiles(__dirname, wwwDir);
console.log('Build complete!');
