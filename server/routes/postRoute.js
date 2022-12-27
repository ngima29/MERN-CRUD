const express = require('express');
const route = express.Router();
const multer  = require('multer');
const path = require('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../public/postIMG'),function(error,success){
        if(error){
            console.log(error);
        }
      });
    },
    filename: function (req, file, cb) {
      const name = Date.now() + '-' + file.originalname;
      cb(null, name, function(error,success){
        if(error){
            console.log(error);
        }
      });
    }
  }); 
  
  const upload = multer({ storage: storage });

  route.post()
  
  module.exports = route