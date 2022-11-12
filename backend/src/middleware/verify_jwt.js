const jwt = require("jsonwebtoken");

const verifyjwt = (req, res, next) => {
    if (req.headers.authorization || req.headers.Authorization) {
        const token = req.headers.authorization;

        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    res.status(401).json({
                        message: "Unauthorized",
                    });
                } else {
                    req.user_info = decoded.user_info;
                    // res.status(200).json({message:"Authorized",user_info:decoded.user_info});
                    next();
                }
            });
        }
    }
};
module.exports = verifyjwt;
