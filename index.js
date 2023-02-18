const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express()

const nameRoute = require("./routes/name-route")

app.use(nameRoute)

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server on 5000 port is running.")
})