module.exports = mongoose => {
    var schema = mongoose.model(
      "pelicula",
      mongoose.Schema(
        {
            caratula : {type: String},
            nombre: { type: String },
            plataforma: { type: String },
            sipnosis: { type: String },
            valoracion: { type: Number },
        },
      )
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Pelicula = mongoose.model("pelicula", schema);
    return Pelicula;
};