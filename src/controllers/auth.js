const signin = async (req, res) => {
    try {
        return res.status(200).json({
            code: 200,
            message: "Dziala"
        });
    } catch (error) {
        
    }
}

const signout = async (req, res) => {
    try {
        return res.status(200).json({
            code: 200,
            message: "Dziala"
        });
    } catch (error) {
        
    }
}

const signup = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const setup2fa = async (req, res) => {
    try {
        
    } catch (error) {
        console.error("Auth controller (setup2fa) error: " + error);
        return res.status(500).json({
            code: 500,
            message: "Błąd po stronie serwera!"
        });
    }
}

const verify2fa = async (req, res) => {
    try {
        
    } catch (error) {
        console.error("Auth controller (verify2fa) error: " + error);
        return res.status(500).json({
            code: 500,
            message: "Błąd po stronie serwera!"
        });
    }
}


module.exports = {signin, signout, signup, setup2fa, verify2fa}