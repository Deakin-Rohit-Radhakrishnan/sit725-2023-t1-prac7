let client = require('../dbConnection');

let collection = client.db().collection('Footballs');

function postFootball(football, callback) {
    collection.insertOne(football,callback);
}

function getAllFootballs(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postFootball,getAllFootballs}