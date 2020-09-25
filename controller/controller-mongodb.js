'use strict'

const mongodb = require('../services/mongodb');

const controller = {

   auth: async function(token) { return await mongodb.auth(token); },
   importDB: async function(json) { return await mongodb.importDB(json); },
   getExport: async function(searchURL) { return await mongodb.getExport(searchURL); }

};

module.exports = controller;
