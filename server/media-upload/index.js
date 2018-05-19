const cloudinary = require("cloudinary");
const cloudinaryConfig = require("./config");

cloudinary.config(cloudinaryConfig);

function uploadImage(image) {
    return new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload(image, function(err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports = uploadImage;
