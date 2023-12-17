module.exports = (sequelize, Sequelize) => {
    const CV = sequelize.define("cv", {
      nomComplet: {
        type: Sequelize.STRING
      },
      adresse: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      liensGitLinkedIN: {
        type: Sequelize.TEXT
      },
    
     objectif: {
        type: Sequelize.TEXT
      },
      resume: {
        type: Sequelize.TEXT
      },
      certification: {
        type: Sequelize.TEXT
      },
      experienceProf: {
        type: Sequelize.TEXT
      },
      lieuEducation: {
        type: Sequelize.STRING
      },
      specialiteEtude: {
        type: Sequelize.STRING
      },
      centreInteret:{
        type: Sequelize.STRING
      },
    });
  
    return CV;
  }