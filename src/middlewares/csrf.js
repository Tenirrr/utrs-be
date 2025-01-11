const crypto = require("crypto");
const config = require("../../config/csrf");


const generateToken = async (req, res) => {
    const token = crypto.randomBytes(config.tokenLength).toString('hex');

    
}

const verifyToken = async () => {

}