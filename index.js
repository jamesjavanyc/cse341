const express = require("express");
const port = process.env.SERVER_PORT || 5000;

const app = express()

const nameRoute = require("./routes/name-route")

app.use(nameRoute)

app.listen(port, () => {
    console.log(`Server on ${port} port is running.`)
})