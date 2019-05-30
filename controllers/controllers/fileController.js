const fs = require('fs');
var Q = require('q');
var cvFolder = 'cvFolder';
var textract = require('textract');
var textModel = require('../models/textModel');

exports.getFiles = async function (req, res) {
  var deferred = Q.defer();
  await callback();
  deferred.resolve({ "status": 200, "message": "Text is saved  Successfully against every CV against its own id" });
  return deferred.promise;
}

async function callback(){
 await fs.readdir(cvFolder, async function(err,files){
    if(err) throw err;
    files.map(async Element => {
    await textract.fromFileWithPath('cvFolder/' + Element,async function(err,text){
      if(err) console.log(err)
        var doc = new textModel();
        doc.text = text;
        await doc.save();
    })
  })
  })
}