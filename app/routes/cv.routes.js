module.exports = app => {
    const cvs= require("../controllers/cv.controllers");
  
    var router = require("express").Router();
  
    // Create a new cv
    router.post("/", cvs.create);
  
    // // Retrieve all cvs
    router.get("/", cvs.findAll);
  
  
    // // Retrieve a single cv with id
    router.get("/:id", cvs.findOne);
  
    // // Update a cv with id
    router.put("/:id", cvs.update);
  
    // // Delete a cv with id
    router.delete("/:id", cvs.delete);
  
    // // Create a new cv
    router.delete("/", cvs.deleteAll);
  
    app.use('/api/cvs', router);
  };