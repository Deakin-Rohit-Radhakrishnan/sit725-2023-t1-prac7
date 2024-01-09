let collection = require('../models/football');

const postFootball = (req,res) => {
    let football = req.body;
    collection.postFootball(football, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllFootballs = (req,res) => {
    collection.getAllFootballs((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

const deleteFootball = (req,res) => {
    let football = req.body;
    collection.deleteOne(football, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = {postFootball,getAllFootballs}