var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "cecilia",
        password: "Sagelove69!17",
        database: "burgers_db"
    });
}


connection.connect(function (error) {
    if (error) {
        console.log("Error connecting: " + error.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;

