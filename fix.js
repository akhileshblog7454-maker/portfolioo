const fs = require('fs');

const files = ['premiere.svg','ae.svg','ps.svg','ai.svg','blender.svg'];

files.forEach(f => {
  const p = 'public/images/' + f;
  let c = fs.readFileSync(p, 'utf-8');
  c = c.replace(/viewBox="[^"]+"/, 'viewBox="-12 -12 48 48"');
  fs.writeFileSync(p, c);
  console.log("Fixed " + f);
});
