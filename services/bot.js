'use strict'

    const util = require('util'),
          exec = util.promisify(require('child_process').exec),
chalkAnimation = require('chalk-animation'),
      gradient = require('gradient-string'),
         chalk = require('chalk'),
           log = require('fancy-log'),
            os = require('os'),
        osHOME = os.homedir(),
    osPLATFORM = os.platform();







        const BOT = {

          startBot: async function() { return await startBot(); }

        };

        module.exports = BOT;











async function startBot(){


      if( osPLATFORM == 'darwin' ) var execline = 'open "../BOT - Start.command" > output.log';
      if( osPLATFORM == 'linux' ) var execline = 'sh "../BOT - Start.sh" > output.log';
      if( osPLATFORM == 'win32' ) var execline = 'start cmd /k call "../BOT - Start.bat" > output.log';
      log( 'startBot() - execline: ' + execline );



  try {

     const { stdout, stderr } = await exec(execline);

               log(
                   chalk.green.bold('✔ SUCCESS') + ' We successfully executed the following command:\n' + chalk.white.bold( execline )
                   + '\n\nstdout: ' + chalk.white.bold( stdout )
                   + '\n\nstderr: ' + chalk.white.bold( stderr )
                );

                return true;

   } catch (e) {
     log( chalk.red.bold('❌ ERROR') + ' There was an error while try to execute the following command: ' + execline  + '\n\n' + chalk.white.bold('error:\n') + e );
     return e;
   }


}; // async function startBot(){
