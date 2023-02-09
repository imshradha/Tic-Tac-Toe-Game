import jwt from 'jsonwebtoken';

export const Authentication = async (req, res, next) => {
    try {
        let token = req.headers["x-api-key"];
        if (!token) return res.status(404).send({ status: false, message: "Token must be required in the header" });
    
        let decodedToken = jwt.verify(token, "Tic-Tac-Toe")
        
          req.headers['User-login'] = decodedToken.userId
          next();
        }
       catch (error) { res.status(500).send({ status: false, message: error.message })}
};