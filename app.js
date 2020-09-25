'use strict'



/*
███████████████████████████████████████████████████████████████████████████████
██******************** PRESENTED BY t33n Software ***************************██
██                                                                           ██
██                  ████████╗██████╗ ██████╗ ███╗   ██╗                      ██
██                  ╚══██╔══╝╚════██╗╚════██╗████╗  ██║                      ██
██                     ██║    █████╔╝ █████╔╝██╔██╗ ██║                      ██
██                     ██║    ╚═══██╗ ╚═══██╗██║╚██╗██║                      ██
██                     ██║   ██████╔╝██████╔╝██║ ╚████║                      ██
██                     ╚═╝   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝                      ██
██                                                                           ██
███████████████████████████████████████████████████████████████████████████████

*/






/*
████████████████████████████████████████████████████████████████████████████████
.__                              __           .__               .__
|__| _____ ______   ____________/  |_  ______ |  |  __ __  ____ |__| ____   ______
|  |/     \\____ \ /  _ \_  __ \   __\ \____ \|  | |  |  \/ ___\|  |/    \ /  ___/
|  |  Y Y  \  |_> >  <_> )  | \/|  |   |  |_> >  |_|  |  / /_/  >  |   |  \\___ \
|__|__|_|  /   __/ \____/|__|   |__|   |   __/|____/____/\___  /|__|___|  /____  >
         \/|__|                        |__|             /_____/         \/     \/
npm i express body-parser express-rate-limit connect-timeout node-os-utils chalk-animation gradient-string chalk fancy-log
*/
    const express = require('express'),
              app = express(),
       bodyParser = require('body-parser'),
           router = express.Router(),
             port = process.env.PORT || 1337,
        rateLimit = require('express-rate-limit'),
          timeout = require('connect-timeout'),

       controller = require('./controller/controller'),
controllermongodb = require('./controller/controller-mongodb'),

   chalkAnimation = require('chalk-animation'),
         gradient = require('gradient-string'),
            chalk = require('chalk'),
              log = require('fancy-log');








































                          /*
                           ████████████████████████████████████████████████████████████████████████████████
                           */


                           // ADVERTISE
                           var ads = gradient('red', 'white').multiline([
                                  '',
                                  'Presented by',
                                  '████████╗██████╗ ██████╗ ███╗   ██╗',
                                  '╚══██╔══╝╚════██╗╚════██╗████╗  ██║',
                                  '   ██║    █████╔╝ █████╔╝██╔██╗ ██║',
                                  '   ██║    ╚═══██╗ ╚═══██╗██║╚██╗██║',
                                  '   ██║   ██████╔╝██████╔╝██║ ╚████║',
                                  '   ╚═╝   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝ Software'
                           ].join('\n'));
                           console.log(ads);
                           console.log( '\nCheck my Github Profile: ' + chalk.white.bgGreen.bold(' github.com/CyberT33N ')  + '\n\n');
                           console.log( gradient('white', 'black')('\n\n=======================================\n\n') );




                               /*
                               -----------------------------------------------------------------------------

                               ███████╗████████╗ █████╗ ██████╗ ████████╗    ███████╗ ██████╗██████╗ ██╗██████╗ ████████╗
                               ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝    ██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝
                               ███████╗   ██║   ███████║██████╔╝   ██║       ███████╗██║     ██████╔╝██║██████╔╝   ██║
                               ╚════██║   ██║   ██╔══██║██╔══██╗   ██║       ╚════██║██║     ██╔══██╗██║██╔═══╝    ██║
                               ███████║   ██║   ██║  ██║██║  ██║   ██║       ███████║╚██████╗██║  ██║██║██║        ██║
                               ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝
                               */

                               log( 'Current working directory: ' + __dirname );







// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const limit = 60000;
log( 'rate limit value: ' + limit );

const apiLimiter = rateLimit({
                     windowMs: limit,
                     message: "Too many POST requests created from this IP, please try again in " + limit + "ms",
                     max: 1 //<-- max limit
                   });






// parse application/json
app.use(bodyParser.json());





// homepage (placeholder)
app.use(express.static(__dirname + '/website'));





// POST request for the json item
app.post('/apollo', apiLimiter, function(req, res){(async () => {
log( 'We recieved incoming POST request..' );





  req.setTimeout(400000000);

  req.socket.on("error", function() {
     log( 'reg error: ' + error );
  });
  res.socket.on("error", function() {
     log( 'res error: ' + error );
  });








   // check if POST request was done with valid JSON
  if (!req.is('application/json')) {
        let e = 'As it seems the POST request doesnt contains a valid JSON.. We cancel the request now..';
        log(e);
        res.send(e);
        return;
    }
    log( 'POST request JSON: '  + JSON.stringify(req.body, null, 4)  );






    // check if enough RAM is avaible
    if( !await controller.checkRAM() ){
        let e = 'We reached the max RAM limits.. We will stop the request..';
        log(e);
        res.send(e);
        return;
    }







  // check if token is valid
  if( !await controllermongodb.auth(req.headers['authorization']) ){
      let e = 'Error while try to verify auth token..Maybe wrong token?';
      log(e);
      res.send(e);
      return;
  }
  log( 'Auth token was verified successfully..' );










        // import json to import collection
        const importResult = await controllermongodb.importDB(req.body);
        if( !importResult || importResult == 'duplicated' ){
            if( !importResult ) var e = 'Error while try to import json to database..';
            if( importResult == 'duplicated' ) var e = 'Item was already found in database.. Please choose another item..';
            log(e);
            res.send(e);
            return;
         }

        const itemID = importResult.ops[0]._id;
        const searchURL = importResult.ops[0].url;
        log( 'searchURL: ' + searchURL + '\nitemID: ' + itemID );
















      const botResult = await controller.startBot();
      if( botResult !== true ){
          var e = 'Something went wrong with the scrap bot.. Error: ' + botResult;
          log(e);
          res.send(e);
          return;
       }
       log( 'Bot finished..' );







      const exportResult = await controllermongodb.getExport(searchURL);
      if( !exportResult ){
          let e = 'Error while try to get the result from the scrap process.. This error is not normal.. Something went wrong within the Bot script itself..';
          log(e);
          res.send(e);
          return;
      }

      log( chalk.green.bold('✔ SUCCESS') + ' Script is finished.. We will send now this JSON back to the user:\n' + chalk.white.bold( JSON.stringify(exportResult, null, 4) ) );
      res.send( exportResult );









})().catch((e) => {  log('ASYNC - Error at apollo route: ' + e )  })});






















  app.listen(port, () => {
    log('Server was started.. Listening on port: ' + port);
  });
