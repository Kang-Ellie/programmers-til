// mysql 모듈 소환
import mysql from "mysql2/promise";

// DB와 연결 통로 생성
const conn = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Bookshop",
  dateStrings: true,
});

export default conn;
