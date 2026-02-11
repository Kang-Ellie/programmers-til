import conn from "../mariadb.js"; // db 모듈
import { StatusCodes } from "http-status-codes"; // status code 모듈
import jwt from "jsonwebtoken"; // jwt 모듈
import crypto from "crypto"; // crypto 모듈 : 암호화
import dotenv from "dotenv"; // dotenv 모듈
dotenv.config();

const join = (req, res) => {
  const { email, password } = req.body;

  let sql = `INSERT INTO users (email, password, salt) VALUES (?, ?, ?)`;

  // 암호화된 비밀번호와, salt 값을 같이 DB에 저장
  const salt = crypto.randomBytes(10).toString("base64");
  const hashPassword = crypto
    .pbkdf2Sync(password, salt, 10000, 10, "sha512")
    .toString("base64");

  let values = [email, hashPassword, salt];
  conn.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    return res.status(StatusCodes.CREATED).json(results);
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  let sql = `SELECT * FROM users WHERE email = ?`;
  conn.query(sql, email, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    const loginUser = results[0];

    // salt 값 꺼내서 날 것으로 들어온 비밀번호 암호화 해보고
    const hashPassword = crypto
      .pbkdf2Sync(password, loginUser.salt, 10000, 10, "sha512")
      .toString("base64");

    // => 디비 비밀번호랑 비교
    if (loginUser && loginUser.password == hashPassword) {
      // 토큰 발행
      const token = jwt.sign(
        {
          email: loginUser.email,
        },
        process.env.PRIVATE_KEY,
        {
          expiresIn: "5m", // 유효시간
          issuer: "youngah", // 발행한 사람
        },
      );

      // 토큰 쿠키에 담기
      res.cookie("token", token, {
        httpOnly: true,
      });
      console.log(token);

      return res.status(StatusCodes.OK).json(results);
    } else {
      res.status(StatusCodes.UNAUTHORIZED).end();
    }
  });
};

const passwordResetrequest = (req, res) => {
  const { email } = req.body;

  let sql = `SELECT * FROM users WHERE email = ?`;
  conn.query(sql, email, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    // 이메일로 유저가 있는지 찾아봅니다!
    const user = results[0];
    if (user) {
      return res.status(StatusCodes.OK).json({
        email: email,
      });
    } else {
      return res.status(StatusCodes.UNAUTHORIZED).end();
    }
  });
};

const passwordReset = (req, res) => {
  const { email, password } = req.body;

  let sql = `UPDATE users SET password=?, salt=? WHERE email=?`;

  // 암호화된 비밀번호와, salt 값을 같이 DB에 저장
  const salt = crypto.randomBytes(10).toString("base64");
  const hashPassword = crypto
    .pbkdf2Sync(password, salt, 10000, 10, "sha512")
    .toString("base64");

  let values = [hashPassword, salt, email];
  conn.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    if (results) {
      return res.status(StatusCodes.OK).json(results);
    } else {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
  });
};

export { join, login, passwordResetrequest, passwordReset };
