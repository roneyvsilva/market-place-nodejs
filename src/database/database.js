const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect("mongodb://127.0.0.1:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB conectado...");
    }).catch((e) => {
        return console.log(`Erro conectando ao banco: ${e}`);
    })
}

module.exports = connectDB;
