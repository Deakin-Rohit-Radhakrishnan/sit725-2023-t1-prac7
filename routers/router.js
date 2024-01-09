let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function(req,res){
    controller.postFootball(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllFootballs(req,res);
});

router.delete('/', (req,res)=>{
    controller.getAllFootballs(req,res);
});


module.exports = router;