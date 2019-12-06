const   express = require("express"),
        app = express();


// dotENV
require('dotenv').config();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(process.env.PORT, () => console.log("server started on port: " + process.env.PORT));