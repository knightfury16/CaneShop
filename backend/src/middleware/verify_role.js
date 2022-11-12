const verify_Roles = (req, res, next) => {
    const role = req.user_info.Role;
    try {
        if (role === "ADMIN") {
            // return res.status(403).json({ message: "you are a ADMIN" });
            next();
        } else if (role === "BUYER") {
            // return res.status(403).json({ message: "you are a BUYER" });
            next();
        } else {
            // return res.status(403).json({ message: "you are a SELLER" });
            next();
        }
    } catch (error) {
        return res.status(500).json({ message: "something went wrong" });
        
    }
};

module.exports = verify_Roles;
