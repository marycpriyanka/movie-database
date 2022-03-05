// Import the required packages
const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        // MySQL username
        user: "root",
        password: "thankYou*1",
        database: "movie_db"
    },
    console.log("Connected to the movie_db database")
);

// Gets the list of all movies
app.get("/api/movies", (req, res) => {
    db.query("SELECT * FROM movies", (err, data) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(data);
        }
    });
});

// Adds a movie to db
app.post("/api/add-movie", (req, res) => {
    const {movie_name} = req.body;
    if (movie_name) {
        db.query(`INSERT INTO movies (movie_name) VALUES (?)`, movie_name, (err, data) => {
            if (err) {
                res.json(err);
            }
            else {
                res.json({
                    message: "success",
                    data: req.body
                });
            }
        });
    }
    else {
        res.json("No movie name provided");
    }
});

app.delete("/api/movie/:id", (req, res) => {

});

app.put("/api/update-review", (req, res) => {

});

// Default response for any other request
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});