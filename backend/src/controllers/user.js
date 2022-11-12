const bcrypt = require("bcrypt");
const prisma = require("./../db/prisma");
const jwt = require("jsonwebtoken");

//login user by searching email in the db and then comparing password has and password in db
const login = async (req, res) => {
    const { Email, Password } = req.body;

    try {
        const user = await prisma.user.findFirst({ where: { Email } });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        } else {
            const isValid = await bcrypt.compare(Password, user.Password);

            if (!isValid) {
                res.status(400).json({ message: "Invalid password" });
            } else {
                const token = jwt.sign(
                    {
                        user_info: {
                            id: user.id,
                            Role: user.role,
                        },
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "1h",
                    }
                );
                res.status(200).json({
                    message: "User logged in successfully",
                    token,
                });
            }
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//getting information from the c;ientr and creating a new user and storing in db
const register = async (req, res) => {
    const {
        FirstName,
        LastName,
        Email,
        Password,
        DateOfBirth,
        PhoneNum,
        Gender,
        Address,
    } = req.body;
    try {
        if (
            !FirstName ||
            !LastName ||
            !Email ||
            !Password ||
            !Address ||
            !PhoneNum ||
            !Gender
        ) {
            res.status(400).json({ message: "Please fill all the fields" });
        }
        const user = await prisma.user.findFirst({ where: { Email } });
        if (user) {
            res.status(400).json({ message: "User already exists" });
        } else {
            const hashedPassword = await bcrypt.hash(Password, 10);
            const newUser = await prisma.user.create({
                data: {
                    FirstName: FirstName,
                    LastName: LastName,
                    Email: Email,
                    Password: hashedPassword,
                    DateOfBirth: DateOfBirth,
                    PhoneNum: PhoneNum,
                    Gender: Gender,
                    Address: Address,
                },
            });

            res.status(201).json({
                message: "User created successfully",
                newUser,
            });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllUsers = async (req, res) => {
    const role = req.user_info.Role;
    console.log(role);
    try {
        if (role === "BUYER") {
            const users = await prisma.user.findMany();
            res.status(200).json(users);
        } else {
            res.status(401).json({ message: "Unauthorized" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//Update users information by searching for the user by email
const updateUserById = async (req, res) => {
    const { Email } = req.params;
    const { FirstName, LastName, DateOfBirth, PhoneNum, Address, Gender } =
        req.body;

    try {
        const user = await prisma.user.findFirst({ where: { Email } });
        console.log(user);
        if (!user) {
            res.status(404).json({ message: "User not found" });
        } else {
            const updatedUser = await prisma.user.update({
                where: {
                    Email: Email,
                },
                data: {
                    FirstName: FirstName,
                    LastName: LastName,
                    DateOfBirth: DateOfBirth,
                    PhoneNum: PhoneNum,
                    Address: Address,
                    Gender: Gender,
                },
            });
            res.status(200).json({
                message: "User updated successfully",
                updatedUser,
            });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//Delete user by searching for the user by email
const deleteUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma.user.findFirst({ where: { id } });
        if (!user) {
            res.status(404).json({ message: "User not found" });
        } else {
            await prisma.user.delete({ where: { id: id } });
            res.status(200).json({ message: "User deleted successfully" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// updating user information by searching for the user by id from token
const updateUserInfo = async (req, res) => {
    const id = req.user_info.id;
    const {
        FirstName,
        LastName,
        DateOfBirth,
        PhoneNum,
        Password,
        Address,
        Gender,
        Email,
    } = req.body;
    const hashedPassword = await bcrypt.hash(Password, 10);
    try {
        const user = await prisma.user.findFirst({ where: { id: id } });
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        } else {
            console.log("eije user:", user, "id:", id);
            const updatedUser = await prisma.user.update({
                where: {
                    id: id,
                },
                data: {
                    FirstName: FirstName,
                    LastName: LastName,
                    DateOfBirth: DateOfBirth,
                    PhoneNum: PhoneNum,
                    Address: Address,
                    Email: Email,
                    Password: hashedPassword,
                    Gender: Gender,
                },
            });
            console.log("helloo");
            res.status(201).json({
                message: "User updated successfully",
                updatedUser,
            });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    login,
    register,
    getAllUsers,
    updateUserById,
    deleteUserById,
    updateUserInfo,
};
