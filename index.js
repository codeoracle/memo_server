const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')


const app = express()
dotenv.config().cray;

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.CONNECT_URL, {useNewUrlParser: true, useUnifiedTopology: 
    true}).then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect to mongoose`))

