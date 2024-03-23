import jwt from "jsonwebtoken";
import config from "config";
function authMiddleware() {
  try {
    const privatekey = config.get("privateKey");
    let token = req.headers["auth-token"];
    // verifying the token
    req.payload = jwt.verify(token, privatekey);
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: "Unauthorized access" });
  }
}
export default authMiddleware;
