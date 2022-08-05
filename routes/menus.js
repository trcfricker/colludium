import express from 'express';

var router = express.Router();

router.get('/', function (req, res, next) {

  /*    req.db.collection.findOne({ menu_title: "File" }, function (err, menuCollection) {
        if (err) console.LogError(err);
        else console.log(menuCollection);
      });
  */

    req.db.collection.find({}).toArray(function (err, menuList) {
        if (err) console.LogError(err);
        else {
          //console.log(menuList);
          //const menuJson = JSON.stringify(menuList);
          //console.log(menuJson);
          res.send(menuList);
        }
      });
    
   
})

export { router };