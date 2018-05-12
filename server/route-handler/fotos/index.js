const fotos = require("../../data-base/fotos");
const uploadImage = require("../../media-upload");
const formidable = require("formidable");
const FileReader = require("filereader");
const randomInt = require("random-int");

module.exports = {
    save(req, res) {
        const { mountain, fotos: foto } = req.body;
        fotos
            .verifyOnUniqueNameAndSave(mountain, foto)
            .then(result => res.send(result))
            .catch(err => console.log(err));
    },
    getOne(req, res) {
        const id = req.params.id;

        fotos.findOne(id).then(result => res.send(result));
    },
    getAll(req, res) {
        fotos
            .getAll()
            .then(result => res.send(result))
            .catch(err => console.log(err));
    },
    uploadImage(req, res) {
        const { data, mimetype } = req.files.image;
        const imageBase64 = data.toString("base64");
        uploadImage(`data:${mimetype};base64,${imageBase64}`)
            .then(result => res.send(result.url))
            .catch(err => console.log(err));
    },
    //FOR UI
    getRandomPhoto(req, res) {
        fotos.getAll((err, result) => {
            let randomPhotos = [];
            for (let i = 0; i < 10; i++) {
                const randomIndex = randomInt(0, result.length - 1);
                randomPhotos = [...randomPhotos, result[randomIndex]];
            }
            const photoList = randomPhotos.map(function(photo) {
                const randomIndex = randomInt(photo.fotos.length - 1);
                const randomPhoto = Object.assign(
                    { _id: photo._id },
                    { mountainName: photo.mountainName },
                    {
                        fotos: [photo.fotos[randomIndex]]
                    }
                );
                return randomPhoto;
            });
            res.send(photoList);
        });
    },
    getMountainsNameFotos(req, res) {
        fotos.getMountainsNameFotos().then(result => res.send(result));
    },
    getOneMountainFotos(req, res) {
        const id = req.params.id;
        fotos.getOne(id).then(result => res.send(result));
    }
};
