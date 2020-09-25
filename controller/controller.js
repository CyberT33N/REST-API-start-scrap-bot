'use strict'

const checkRAM = require('../services/checkram');
const bot = require('../services/bot');

      const controller = {

         checkRAM: async function() { return await checkRAM.status(); },
         startBot: async function() { return await bot.startBot(); }

      }; // let controllers = {


module.exports = controller;
