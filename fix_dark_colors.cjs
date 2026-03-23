const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

// Map tailwind tokens specifically for dark mode
function replaceDarkClass(match) {
  let inner = match.substring(5); // remove 'dark:'
  
  // Specific replacements for pure black / light gray
  inner = inner.replace(/bg-slate-950/g, 'bg-black');
  inner = inner.replace(/bg-slate-900/g, 'bg-[#0a0a0a]');
  inner = inner.replace(/bg-slate-800/g, 'bg-neutral-900');
  inner = inner.replace(/bg-slate-700/g, 'bg-neutral-800');
  
  // Text blue replacements
  inner = inner.replace(/text-blue-300/g, 'text-neutral-200');
  inner = inner.replace(/text-blue-400/g, 'text-neutral-300');
  inner = inner.replace(/text-blue-500/g, 'text-neutral-400');
  inner = inner.replace(/text-blue-600/g, 'text-neutral-400');
  inner = inner.replace(/text-blue-700/g, 'text-neutral-500');

  // Background blue replacements
  inner = inner.replace(/bg-blue-500/g, 'bg-neutral-700');
  inner = inner.replace(/bg-blue-600/g, 'bg-neutral-800');
  
  // Border blue replacements
  inner = inner.replace(/border-blue-500/g, 'border-neutral-700');
  inner = inner.replace(/border-blue-600/g, 'border-neutral-700');
  inner = inner.replace(/focus:border-blue-600/g, 'focus:border-neutral-500');
  inner = inner.replace(/ring-blue-600/g, 'ring-neutral-500');

  // Any remaining slate -> neutral
  inner = inner.replace(/slate-/g, 'neutral-');
  // Any remaining blue -> neutral
  inner = inner.replace(/blue-/g, 'neutral-');
  
  return 'dark:' + inner;
}

walkDir(path.join(__dirname, 'src'), function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find all classes that start with dark: and ending at whitespace, quote, or backtick
    // Wait, the regex `dark:[a-zA-Z0-9\-\/\[\]\:]+` can match `dark:hover:text-blue-600` etc
    
    let newContent = content.replace(/dark:[a-zA-Z0-9\-\/\[\]\:]+/g, replaceDarkClass);
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
