const db = require("../models");
const CV = db.cvs;
const Op = db.Sequelize.Op;

// Create and Save a new CV
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nomComplet) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a CV
    const cv = {
      nomComplet: req.body.nomComplet,
      adresse: req.body.adresse,
      telephone: req.body.telephone,
      email: req.body.email,
      liensGitLinkedIN: req.body.liensGitLinkedIN,
      objectif: req.body.objectif,
      resume: req.body.resume,
      certification: req.body.certification,
      experienceProf: req.body.experienceProf,
      lieuEducation: req.body.lieuEducation,
      specialiteEtude: req.body.specialiteEtude,
      centreInteret: req.body.centreInteret,


    };
  
    // Save CV in the database
    CV.create(cv)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the CV."
        });
      });
  };
// Retrieve all cvs from the database.
exports.findAll = (req, res) => {
  const nomComplet = req.query.nomComplet;
  var condition = nomComplet ? { nomComplet: { [Op.iLike]: `%${nomComplet}%` } } : null;

  CV.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving CVs."
      });
    });
};

// // Find a single CV with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  CV.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find CV with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving CV with id=" + id
      });
    });
};  
// };

// // Update a CV by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

 CV.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "CV was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update CV with id=${id}. Maybe CV was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating CV with id=" + id
      });
    });
};
// // Delete a CV with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  CV.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "CV was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete CV with id=${id}. Maybe CV was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete CV with id=" + id
      });
    });
};

// // Delete all CVs from the database.
exports.deleteAll = (req, res) => {
  CV.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} CV were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all CV."
      });
    });
};
