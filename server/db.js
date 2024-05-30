const mongoURI = process.env.mongoURI || "mongodb+srv://yogeshfoodgo:$yogeshfoodgo$@cluster0.sa1epfu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const MongoClient = require('mongodb').MongoClient;

require('dotenv').config(); 


module.exports = function (callback) {
    MongoClient.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---" + err)
        else {
            // var database =
            console.log("connected to mongo")
            const db = result.db();
    
            const foodCollection = await db.collection("food_item");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await db.collection("foodCategory");
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
