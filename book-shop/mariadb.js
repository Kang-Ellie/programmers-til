// mysql 모듈 소환
import mysql from "mysql2";

// DB와 연결 통로 생성
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Bookshop",
  dateStrings: true,
});

export default conn;
