const express = require('express')
const app = express()

const connectDB = require(`./db/connect`)
const msgs = require(`./routes/msgs`)

require(`dotenv`).config()
// middleware
app.use(express.static(`./public`))
app.use(express.json())

// put url to routes
app.use(`/api/v1/msgs`,msgs)

// connect
const port = process.env.PORT || 5000

async function start() {

    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`) )
    } catch(err) {
        console.log(err)
    }

}

start()