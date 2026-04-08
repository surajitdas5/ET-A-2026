import jwt from 'jsonwebtoken'

function auth(req, res, next){
    let token = req.cookies.token
    if(!token) return res.status(401).send({message: "Not logged in"})
    try{
        let decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch(err){
        console.log(err);
        res.status(400).send({message: "Token is not verified"})
    }
}

export default auth