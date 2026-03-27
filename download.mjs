import fs from "fs";
import https from "https";

const icons = [
  { name: "premiere", url: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/adobepremierepro.svg" },
  { name: "ae", url: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/adobeaftereffects.svg" },
  { name: "ps", url: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/adobephotoshop.svg" },
  { name: "ai", url: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/adobeillustrator.svg" },
  { name: "blender", url: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/blender.svg" }
];

async function download() {
  for (const icon of icons) {
    await new Promise((resolve) => {
      https.get(icon.url, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          const modifiedSvg = data.replace('<svg ', '<svg width="512" height="512" fill="#ffffff" ');
          fs.writeFileSync(`public/images/${icon.name}.svg`, modifiedSvg);
          console.log(`Saved ${icon.name}.svg`);
          resolve();
        });
      });
    });
  }
}
download();
