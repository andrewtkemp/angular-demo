// Get dependencies
const express = require('express');
const bodyParser = require('body-parser');

const routes = require("./server/routes");
const app = express();

const PORT = process.env.PORT || '3000';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static("./dist/pos-app"));

app.use(routes);

app.listen(PORT, function(){
    console.log("Listening on PORT " + PORT);
});