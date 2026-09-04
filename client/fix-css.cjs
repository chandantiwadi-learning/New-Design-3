const fs = require('fs');
let css = fs.readFileSync('public/css/style.css', 'utf8');

// 1. Fix box-sizing order
css = css.replace(/([ \t]*)(box-sizing:[^;\n]+;)\n([ \t]*)(-moz-box-sizing:[^;\n]+;)/g, '$1$4\n$3$2');

// 2. Add standard properties for webkit ones if missing
// backface-visibility
css = css.replace(/([ \t]*)(-webkit-backface-visibility:([^;\n]+);)(?!\s*backface-visibility)/g, '$1$2\n$1backface-visibility:$3;');
// appearance
css = css.replace(/([ \t]*)(-webkit-appearance:([^;\n]+);)(?!\s*appearance)/g, '$1$2\n$1appearance:$3;');
// transform-style
css = css.replace(/([ \t]*)(-webkit-transform-style:([^;\n]+);)(?!\s*transform-style)/g, '$1$2\n$1transform-style:$3;');
// transform
css = css.replace(/([ \t]*)(-webkit-transform:([^;\n]+);)(?!\s*-moz-transform)(?!\s*transform)/g, '$1$2\n$1transform:$3;');

fs.writeFileSync('public/css/style.css', css);
console.log('Fixed properties');
