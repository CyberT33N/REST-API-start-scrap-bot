'use strict'

const os = require('os');


        const OS = {

          status: async function() {
                  const freeRAM = (os.freemem() / (1024*1024)).toFixed(2);
                  console.log( 'free RAM: ' + freeRAM );
                  if ( freeRAM > 500 ) return true;
          }

        };

module.exports = OS;
