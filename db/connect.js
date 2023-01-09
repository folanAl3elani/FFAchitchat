const mongoose = require(`mongoose`)
mongoose.set("strictQuery", false)


const connectDB =  (url) => {
    return mongoose.connect(url).then(() => {
        console.log("connection is awesome memories are too...sometimes, lucifer is not all the time")
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = connectDB