const mongoose = require('mongoose')
const mongoURI = 'mongodb://yogeshfoodgo:$yogeshfoodgo$@ac-wqjrfiz-shard-00-00.sa1epfu.mongodb.net:27017,ac-wqjrfiz-shard-00-01.sa1epfu.mongodb.net:27017,ac-wqjrfiz-shard-00-02.sa1epfu.mongodb.net:27017/?ssl=true&replicaSet=atlas-weh5zn-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'
module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---" + err)
        else {
            // var database =
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_item");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("foodCategory");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
            });
            // listCollections({name: 'food_items'}).toArray(function (err, database) {
            // });
            //     module.exports.Collection = database;
            // });
        }
    })
};
