module.exports = app => {
    const peliculas = require("../controllers/pelicula.controller");
    var router = require("express").Router();
    // Create a new pelicula
    router.post("/", peliculas.create);
    // Retrieve all peliculas
    router.get("/", peliculas.findAllPelicula);
    // Retrieve all published peliculas
    router.get("/:id", peliculas.findById);
    // Update a pelicula with id
    router.put("/:id", peliculas.update);
    // Delete a pelicula with id
    router.delete("/:id", peliculas.delete);
    // Add pelicula
    router.post("/", peliculas.addPelicula);

    app.use("/api/peliculas", router);
};