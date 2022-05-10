//  Add your code here
const mongooose = require ("mongoose")
const { default: mongoose } = require("mongoose")

const movieSchema = new mongoose.Schema ({

    name:{
        type: String,
    },
    occupation:{
        type: String,
    },
    catchPhrase:{
        type: String,
    }

})

const CelebritiesModel = mongoose.model("movies",movieSchema)
module.exports = CelebritiesModel