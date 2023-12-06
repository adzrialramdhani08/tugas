const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mahasiswa",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connection to my database : ", err);
  } else {
    console.log("Connection to MYSQL database");
  }
});

module.exports = connection;
