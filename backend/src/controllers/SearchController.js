const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

// index, show, store, update, destroy

module.exports = {
  async index(request, response) {
    // buscar todos devs num raio de 10 km
    // filtrar por tecnologia
    const { latitude, longitude, techs } = request.query;

    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [latitude, longitude]
          },
          $maxDistance: 10000
        }
      }
    });

    return response.json({ devs });
  }
};
