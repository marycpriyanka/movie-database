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
        database: "movies_db"
    },
    console.log("Connected to the movie_db database")
);

app.get("/api/movies", (req, res) => {

});

app.post("/api/add-movie", (req, res) => {

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