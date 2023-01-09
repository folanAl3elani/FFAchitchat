const mongoose = require(`mongoose`)

const msgSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, `idiot provide a name please`],
        trim:true,
        maxlength:[20,`max length is 20!!`]
    }, msg:{type:String},
})

module.exports = mongoose.model(`msg`, msgSchema)