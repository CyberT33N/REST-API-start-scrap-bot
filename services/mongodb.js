'use strict'


         const fs = require('fs'),
      json_config = JSON.parse(  fs.readFileSync('../admin/config.json', 'utf8')  ),
              log = require('fancy-log'),
   chalkAnimation = require('chalk-animation'),
         gradient = require('gradient-string'),
            chalk = require('chalk'),
      MongoClient = require('mongodb').MongoClient,
           assert = require('assert'),
         ObjectId = require('mongodb').ObjectId,
   MongoDB_DB_URL = json_config.MongoDB_DB_URL,
  MongoDB_DB_NAME = json_config.MongoDB_DB_NAME;
  var MongoDB, client;










log( 'MongoDB_DB_URL: ' + MongoDB_DB_URL );
MongoClient.connect(MongoDB_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function(e, client) {
console.log( gradient('white', 'black')('\n\n=======================================\n\n') );

   if(e){
     log( chalk.red.bold('❌ ERROR') + ' Error while try to connect to MongoDB Database - ' + chalk.white.bold('error:\n') + e );
     //assert.equal(null, e);
     return;
   } //   if(e){

     log( 'MongoDB - Connected successfully to server..' );
     MongoDB = client.db( MongoDB_DB_NAME );

});





















const mongodb = {

      auth: async function(token) { return await authCheck(token); },
      importDB: async function(json) { return await importDB(json); },
      getExport: async function(searchURL) { return await getExport(searchURL); }

};

module.exports = mongodb;























async function authCheck(token){
log('We will check now if the auth token is correct.. token: ' + token);

    const authCollection = MongoDB.collection('auth');

    const verify = await authCollection.find( {"token": token} ).toArray({});
    log( 'Auth Check - verify:' + JSON.stringify(verify, null, 4) );
    if(verify[0]) return true;

};








async function importDB(json){
console.log( gradient('white', 'black')('\n\n=======================================\n\n') );
log('We will import now your json to the import collection..  json: ' +  JSON.stringify(json, null, 4) + '\nurl: ' + json[0].url);

     const importCollection = MongoDB.collection('import');

    // check for duplicated data
    const verify = await importCollection.find( {"url": json[0].url} ).toArray({});
    log( 'Auth Check - verify:' + JSON.stringify(verify, null, 4) );


       if(!verify[0]) return await importCollection.insertMany(json);
       else return 'duplicated';


};







async function getExport(searchURL){
console.log( gradient('white', 'black')('\n\n=======================================\n\n') );
log('We will get now the export for this link: ' + searchURL);


      const exportCollection = MongoDB.collection('export');

      const result = await exportCollection.find( {"search_url": searchURL} ).toArray({});
      //log( 'getExport() - result:' + JSON.stringify(result, null, 4) );
      if(result[0]) return result;

};
