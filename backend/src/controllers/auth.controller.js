export function signup(req, res) {
    return res.status(200).json({status: true, message: "User signup has succesfully"});
}

export function login(req, res) {
    return res.status(200).json({status: true, message: "User login has successful"});
}

export function logout(req, res) {
    return res.status(200).json({status: true, message: "User has logout successfully"});
}