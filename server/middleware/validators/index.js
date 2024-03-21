import  jwt  from "jsonwebtoken";
function authMiddleware(){
    try {
        let token = req.headers['auth-token'];
        req.payload = jwt.verify(token,'machineTest')
    } catch (error) {
        console.error(error)
        return res.status(401).json({error:'Unauthorized access'})
    }
}
export default authMiddleware