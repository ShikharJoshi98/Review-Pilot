const authService = require("../services/auth.service");

const register = async (req, res, next) => {
    try {
        const { fullName, email, password } = req.body;
        if (!fullName || !email || !password) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Required fields are missing"
                });
        }
        const user = await authService.createUser(req.body);
        return res
            .status(201)
            .json({
                success: true,
                user,
                message: "User created successfully"
            });
    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {
    try {
        const { user, token } = await authService.loginUser(req.body);

        res.cookie(
            "token",
            token,
            {
                httpOnly: true,
                secure: false,
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60 * 1000
            }
        );

        return res
            .status(200)
            .json({
                success: true,
                user,
                message: "Logged in successfully"
            });
    } catch (error) {
        next(error);
    }
}


const logout = async (req, res, next) => {
    try {
        res.clearCookie("token");
        return res
            .status(200)
            .json({
                success: true,
                message: "Logged out successfully"
            });
    } catch (error) {
        next(error);
    }    
}
module.exports = {
    register,
    login,
    logout
}