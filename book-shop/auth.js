import jwt from "jsonwebtoken"; // jwt 모듈 소환
import dotenv from "dotenv";
dotenv.config();

const ensureAuthorization = (req, res) => {
  try {
    let receivedJwt = req.headers["authorization"];
    console.log("received jwt : ", receivedJwt);

    if (receivedJwt) {
      let decodedJwt = jwt.verify(receivedJwt, process.env.PRIVATE_KEY);
      console.log("decodedJwt jwt : ", decodedJwt);

      return decodedJwt;
    } else {
      throw new ReferenceError("jwt must be provided");
    }
  } catch (err) {
    console.log(err.name);
    console.log(err.message);

    return err;
  }
};

export default ensureAuthorization;
