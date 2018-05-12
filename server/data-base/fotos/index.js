const Fotos = require("./schema");

module.exports = {
    save({ mountainName, fotos }) {
        const foto = new Fotos({ mountainName, fotos });
        return foto.save();
    },
    getAll(cb) {
        return Fotos.find({}).exec(cb);
    },
    getOne(id) {
        console.log(id);
        return Fotos.findById(id);
    },
    findOne(id) {
        return Fotos.findOne({ "mountainName.id": id });
    },
    updateOne(id, fotos) {
        return Fotos.findOneAndUpdate(
            { "mountainName.id": id },
            { $push: { fotos } },
            { new: true }
        );
    },
    verifyOnUniqueNameAndSave(mountain, fotos) {
        const mountainFotos = { mountainName: mountain, fotos };
        const { id } = mountain;
        return this.findOne(id).then(
            result => (!result ? this.save(mountainFotos) : this.updateOne(id, fotos))
        );
    },
    removeOneFoto(id, foto) {
        return Fotos.findOneAndUpdate(
            { "mountainName._id": id },
            { $pull: { fotos: foto } },
            { new: true }
        );
    },
    //FOR UI
    getMountainsNameFotos() {
        return Fotos.find().select("-fotos");
    }
};
