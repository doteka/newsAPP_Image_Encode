var express = require('express');
var Jimp = require('jimp');
var router = express.Router();
var fs = require('fs');
const delay = require('delay');
const { base64encode, base64decode } = require('nodejs-base64');

function basicAPI (req, res) {
    res.status(200).json(
        {
            "success" : true
        }
    );
}

function testAPI (req, res) {
    res.status(200).json(
        {
            "message" : "test"
            //console.log("sdadsd");
            
        }
    );
}

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

function imageAPI (req,res) {
    /* var _url = req.url;
    var queryData = url.parse(_url, true).query;
    console.load("sdasd"+queryData.id);
    const image_link = queryData.id;
    console.log(image_link);*/
    const image_link = req.query.id;
    console.log(image_link);
    //const image_link = res.send(req.query.id);
    var kkk = "22saaass";
    //const image_link = req.body.code;
    Jimp.read(image_link)
         .then(image => {
            image.quality(30);
            image.write(kkk+'.jpg');
            
            //write('lenna-small-bw.jpg');
         // Do stuff with the image.
     })
         .catch(err => {
            console.log("dsdasd");
         // Handle an exception.
     });
        
    var base64str = base64_encode(kkk+'.jpg');
    console.log("처리 완료");
    
    res.status(200).json(
    {
       "message" : base64str 
    });
    //fs.unlinkSync(kkk+'.jpg');

    //console.log(base64str);
    //let encoded = base64encode('lenna-sdasd.jpg');
    
}
function postTestAPI(req, res) {
    const user_message = req.body.code;
    console.log(req.body.code);
    res.status(200).json(
        {
            "message" : user_message
        }
    );
}


module.exports = {
    basicAPI: basicAPI,
    testAPI : testAPI,
    postTestAPI: postTestAPI,
    imageAPI : imageAPI
}