import mysql from "mysql2";

const access = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "Youtube",
  dateStrings: true,
};

const conn = mysql.createConnection(access);

export default conn;
