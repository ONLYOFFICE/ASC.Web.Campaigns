const path = require("path");
const fs = require("fs");
const fse = require("fs-extra");
const supportedLngList = require("../languages.json");

const publicDir = path.join(__dirname, "../public");
const campaignsDir = path.join(__dirname, "../src/campaigns");
const imagesDir = path.join(campaignsDir, "images");
const pubImagesDir = path.join(publicDir, "images");
const localesDir = path.join(campaignsDir, "locales");
const pubLocalesDir = path.join(publicDir, "locales");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

fse.copySync(imagesDir, pubImagesDir);

var existLngList = fs
  .readdirSync(localesDir, { withFileTypes: true })
  .filter((dirent) => {
    return dirent.isDirectory();
  })
  .map((dirent) => dirent.name);

var notFoundLngList = supportedLngList.filter(
  (item) => existLngList.indexOf(item.shortKey) === -1
);

fse.copySync(localesDir, pubLocalesDir);

var enLngPath = path.join(pubLocalesDir, "en");

notFoundLngList.forEach((lng) => {
  var copyLngPath = path.join(pubLocalesDir, lng.shortKey);
  fse.copySync(enLngPath, copyLngPath);
});
