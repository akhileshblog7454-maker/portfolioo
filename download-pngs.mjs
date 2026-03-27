import fs from "fs";
import https from "https";

const images = {
  "premiere.png": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/512px-Adobe_Premiere_Pro_CC_icon.svg.png",
  "ae.png": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/512px-Adobe_After_Effects_CC_icon.svg.png",
  "ps.png": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png",
  "ai.png": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/512px-Adobe_Illustrator_CC_icon.svg.png",
  "blender.png": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/512px-Blender_logo_no_text.svg.png",
};

for (const [name, url] of Object.entries(images)) {
  const req = https.get(url, (res) => {
    res.pipe(fs.createWriteStream(`public/images/${name}`));
    res.on('end', () => console.log(`Downloaded ${name}`));
  });
  req.on('error', (e) => console.log(e));
}
