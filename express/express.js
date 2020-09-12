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
Here you can add all your plugins. *Note* The enabled plugins are necessary.
*/
  const express = require('express'),
            app = express(),
     bodyParser = require('body-parser'),
         router = express.Router(),
           port = process.env.PORT || 1337,
      rateLimit = require('express-rate-limit'),
        timeout = require('connect-timeout'),








             os = require('os'),
         osHOME = os.homedir(),
     osPLATFORM = os.platform(),
            osu = require('node-os-utils'),

chalkAnimation = require('chalk-animation'),
      gradient = require('gradient-string'),
         chalk = require('chalk'),


            fs = require('fs'),
           log = require('fancy-log'),
        {exec} = require('child_process'),



json_configFile = fs.readFileSync('../admin/config.json', 'utf8'),
    json_config = JSON.parse(json_configFile),





    //############## MongoDB ##################################
    MongoClient = require('mongodb').MongoClient,
         assert = require('assert'),
       ObjectId = require('mongodb').ObjectId,
 MongoDB_DB_URL = json_config.MongoDB_DB_URL,
MongoDB_DB_NAME = json_config.MongoDB_DB_NAME;








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



































/*



█████████████████████████████████████████████████████████████████████████████



*/


log( 'MongoDB_DB_URL: ' + MongoDB_DB_URL );
// Use connect method to connect to the server
var MongoDB;
MongoClient.connect(MongoDB_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function(e, client) {

  if(e){
  log( chalk.red.bold('❌ ERROR') + ' Error while try to connect to MongoDB Database - ' + chalk.white.bold('error:\n') + e );
  //assert.equal(null, e);
  return;
} //   if(e){

  log( 'MongoDB - Connected successfully to server..' );

  MongoDB = client.db( MongoDB_DB_NAME );
  startServer(client);

}); // MongoClient.connect(url, function(err, client) {












































































  function importDB(client, json, res){return new Promise(resolve => {
  console.log( gradient('white', 'black')('\n\n=======================================\n\n') );
  log('We will import now your json to the import collection..  json: ' +  JSON.stringify(json, null, 4) + '\nurl: ' + json[0].url);




  let collection = MongoDB.collection('import');


   // CHECK IF ENTRY ALREADY EXIST IN DATABASE
  collection.find( {"url": json[0].url} ).toArray(function(e, docs) {
  log( '#90 done..docs:' + JSON.stringify(docs, null, 4) );

     if(!docs[0]){
     log( 'MongoDB - Search value was not found..' );



                collection.insertMany(json, function(e, r) {

                          if(e){
                          log( chalk.red.bold('❌ ERROR') + ' There was an error while try to import your json to database - ' + chalk.white.bold('error:\n') + e );
                          resolve(false);
                        } //   if(e){

                          log( chalk.green.bold('✔ SUCCESS') + ' The json was successfully imported to your import collection... You can use MongoDB Compass to check your database structure.. result: ' + JSON.stringify(r, null, 4)  );
                          resolve(r);
                 });





      } //   if(!docs[0]){
      else {
        log( chalk.red.bold('❌ ERROR') + ' data was already found in database..' );


        let logtemp = 'WARNING - Current item was already found in collection.. item: ' + json[0].url;
        log( logtemp );
        res.send( logtemp );
        resolve(false);
      } // else from    if(!docs[0]){


  }); //   collection.find( {"profileurl": d.profileurl, "eventname": d.eventname} ).toArray(function(e, docs) {







})}; // function importDB(client, json){


























function authCheck(client, token){return new Promise(resolve => {
console.log( gradient('white', 'black')('\n\n=======================================\n\n') );
log('We will check now if the auth token is correct.. token: ' + token);


            let collection = MongoDB.collection('auth');
            collection.find( {"token": token} ).toArray(function(e, docs) {
            log( 'Auth Check - docs:' + JSON.stringify(docs, null, 4) );


                    if(!docs[0]){
                           log( chalk.red.bold('❌ ERROR') + ' Token is not valid.. auth failed..' );
                           resolve(false);
                     } //   if(!docs[0]){
                    else{
                           log( chalk.green.bold('✔ SUCCESS') + ' The token is valid!' );
                           resolve(true);
                    } // else from  if(!docs[0]){



            }); //collection.find( {"url": json.url} ).toArray(function(e, docs) {





})}; //  function authCheck(client, token){return new Promise(resolve => {







































  function getExport(client, searchURL){return new Promise(resolve => {
  console.log( gradient('white', 'black')('\n\n=======================================\n\n') );
  log('We will get now the export for this link: ' + searchURL);




              let collection = MongoDB.collection('export');

              collection.find(  {"search_url": searchURL}  ).toArray(function(e, docs) {
              log( 'Get Export - docs:' + JSON.stringify(docs, null, 4) );


                      if(!docs[0]){
                             log( chalk.red.bold('❌ ERROR') + ' Cant find the related export for this ID.. This error is not normal.. Please fix the script..' );
                             resolve(false);
                       } //   if(!docs[0]){
                      else{
                             log( chalk.green.bold('✔ SUCCESS') + ' We found the export for our ID!' );
                             resolve(docs);
                      } // else from  if(!docs[0]){



              }); //  collection.find( {"_id": id} ).toArray(function(e, docs) {





  })}; //  function getExport(client, id){return new Promise(resolve => {
























































function startServer(client){
log( 'startServer()' );



// parse application/json
app.use(bodyParser.json());





// homepage
app.use(express.static(__dirname + '/website'));





// POST request for the json item
app.post('/apollo', apiLimiter, function(req, res){
log( 'We recieved incoming POST request..' );





  req.setTimeout(400000000);

  req.socket.on("error", function() {
     log( 'reg error: ' + error );
  });
  res.socket.on("error", function() {
     log( 'res error: ' + error );
  });














  if (!req.is('application/json')) {
        let e = 'As it seems the POST request doesnt contains a valid JSON.. We cancel the request now..';
        log( e );
        res.send(e);
        return;
    } //   if (!req.is('application/json')) {
    log( 'POST request JSON: '  + JSON.stringify(req.body, null, 4)  );









           let mem = osu.mem;
           mem.info().then(info => {(async () => {
           log( 'Hardware Usage Info - Memory: ' + JSON.stringify(info, null, 4) );





               if( Number(info.freeMemPercentage) <= 5 ){
                        let log = 'We reached the max RAM limits.. We will stop the request.. Currently free RAM: ' + Number(info.freeMemPercentage);
                        log( log );
                        res.send(log);
                        return;
             } //       if( Number(info.freeMemPercentage) < 5 ){






                // check if token is valid
               let success = await authCheck(client, req.headers['authorization']);
               if( !success ){
                   let log = 'Error while try to verify auth token..Maybe wrong token?';
                   log( log );
                   res.send( log );
                   return;
               } //   if( !success ){
               log( 'Auth token was verified successfully..' );









              // import json to import collection
              success = await importDB(client, req.body, res);
              if( !success ){
                  let log = 'Error while try to import json to database..';
                  log( log );
                  res.send( log );
                  return;
              } //   if( !success ){
              log( 'We will start now the bot..' );


            let itemID = success.ops[0]._id;
            log( 'itemID: ' + itemID );

















               let execline;
               if( osPLATFORM == 'darwin' ) execline = 'open "../BOT - Start.command" > output.log';
               if( osPLATFORM == 'linux' ) execline = 'sh "../BOT - Start.sh" > output.log';
               if( osPLATFORM == 'win32' ) execline = 'start cmd /k call "../BOT - Start.bat" > output.log';



                               exec(execline, (e, stdout, stderr) => {(async () => {

                                                    if (e) {
                                                      log( chalk.red.bold('❌ ERROR') + ' There was an error while try to execute the following command: ' + execline  + '\n\n' + chalk.white.bold('error:\n') + e );
                                                      return;
                                                    }

                                                    log(
                                                            chalk.green.bold('✔ SUCCESS') + ' We successfully executed the following command:\n' + chalk.white.bold( execline )
                                                            + '\n\nstdout: ' + chalk.white.bold( stdout )
                                                            + '\n\nstderr: ' + chalk.white.bold( stderr )
                                                    );






                                                                // get export json
                                                                let searchURL = success.ops[0].url;
                                                                log( 'searchURL: ' + searchURL );

                                                                success = await getExport(client, searchURL);
                                                                if( !success ){
                                                                    let log = 'Error while try to get the result from the automation..';
                                                                    log( log );
                                                                    res.send( log );
                                                                    return;
                                                                } //   if( !success ){
                                                                log( chalk.green.bold('✔ SUCCESS') + ' Script is finished.. We will send now this JSON back to the user:\n' + chalk.white.bold( success ) );




                                                                res.send( success );



                                  })().catch((e) => {
                                     log('ASYNC - Error at exec: ' + JSON.stringify( e, null, 4) )
                                     res.send( 'Error was found.. can´t process request..' );
                                    })}); //  exec(execline, (e, stdout, stderr) => {















      })().catch((e) => {  log('ASYNC - Error at route: ' + JSON.stringify( e, null, 4) )  });
 }); // mem.info().then(info => {














}); // app.post('/square', function(req, res){





















app.listen(port, () => {
  log('Server was started.. Listening on: ' + process.env.IP + ':' + port);
});




} // function startServer(){
