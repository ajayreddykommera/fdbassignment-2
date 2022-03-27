const mysql = require("mysql2");

// create the connection to database
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root1234",
  port: 3306,
  database: "assignment2",
});

let sql = "select * from student";
pool.execute(sql, (err, result) => {
  if (err) throw err;
  //   console.log(result);
});

module.exports = pool.promise();
