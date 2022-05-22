const db = require ("../models");
const Pelicula = db.Pelicula;



//CREATE FILM
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Film
  const pelicula = new Pelicula({
    caratula: req.body.caratula,
    nombre: req.body.nombre,
    published: req.body.plataforma,
    sipnosis: req.body.sipnosis,
    valoracion: req.body.valoracion
  });
  // Save Tutorial in the database
  pelicula
    .save(pelicula)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the new Film."
      });
    });
};

//GET - Return all peliculas in the DB
exports.findAllPelicula = function (req, res) {
    var ordenacion = {nombre:1};
    Pelicula.find.sort(ordenacion).peliculas(function (err, result) {
    if (err) res.send(500, err.message);

    console.log("GET /peliculas");
    res.status(200).jsonp(result);
  });
};

//GET - Return a peliculas with specified ID
exports.findById = function(req, res) {
    Pelicula.findById(req.params.id, function(err, pelicula) {
    if(err) return res.send(500, err.message);

    console.log('GET /pelicula/' + req.params.id);
        res.status(200).jsonp(pelicula);
    });
};

//POST - Insert a new Pelicula in the DB
exports.addPelicula = function (req, res) {
    console.log("POST");
    console.log(req.body);
  
    var pelicula = new Pelicula({
        caratula : {type: String},
        nombre: { type: String },
        plataforma: { type: String },
        sipnosis: { type: String },
        valoracion: { type: Number },
    });
  
    pelicula.save(function (err, pelicula) {
      if (err) return res.status(500).send(err.message);
      res.status(200).jsonp(pelicula);
    });
  };

  //PUT - Update a register already exists
exports.updatePelicula = function (req, res) {
  Pelicula.findById(req.params.id, function (err, pelicula) {
    pelicula.caratula = req.body.caratula;
    pelicula.nombre = req.body.petId;
    pelicula.plataforma = req.body.plataforma;
    pelicula.sipnosis = req.body.sipnosis;
    pelicula.valoracion = req.body.valoracion;


    pelicula.save(function (err) {
      if (err) return res.status(500).send(err.message);
      res.status(200).jsonp(pelicula);
    });
  });
};

//DELETE - Delete Pelicula
exports.deletePelicula = function (req, res) {
    Pelicula.findById(req.params.id, function (err, tvshow) {
      pelicula.remove(function (err) {
        if (err) return res.status(500).send(err.message);
        res.status(200).send();
      });
    });
  };
  
