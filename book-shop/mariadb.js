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

conn.connect((err) => {
  if (err) {
    console.error("❌ DB 연결 실패:", err.message);
    return;
  }
  console.log("✅ DB 연결 성공");
});

export default conn;
