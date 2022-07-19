const fs = require('fs');
const Image = require("@11ty/eleventy-img");

const originalImgsDir = "./src/img/originals"
const imgsOutputDir = "./src/img/"
const localImgWidths = [420, 640]
const localFormats = ['jpeg', 'webp']


const generateImgs = async (imgFiles) => {

    for await (const imgFile of imgFiles) {
        const path = originalImgsDir + '/' + imgFile;
        const fileName = imgFile.split('.')[0]
        await Image(path, {
            widths: localImgWidths,
            formats: localFormats,
            outputDir: imgsOutputDir,
            filenameFormat(id, src, width, format, options) {
                return `${fileName}-${width}.${format}`;
            }
        });
    }
}

const getImgsFiles = () => {
    const localfiles = fs.readdirSync(originalImgsDir);
    console.log('test', localfiles)
    return localfiles
}

(async () => {
    const existingImgs = getImgsFiles();
    await generateImgs(existingImgs);
})();