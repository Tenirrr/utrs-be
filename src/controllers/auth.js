const signin = async (req, res) => {
    try {
        if (req.session.views) {
            req.session.views++;
            return res.send(`Liczba odwiedzin: ${req.session.views}`);
          } else {
            req.session.views = 1;
            return res.send('Witaj po raz pierwszy! Odśwież stronę, aby zwiększyć licznik.');
          }
        return res.status(200).json({
            code: 200,
            message: "Dziala"
        });
    } catch (error) {
        console.error("Auth controller (setup2fa) error: " + error);
        return res.status(500).json({
            code: 500,
            message: "Błąd po stronie serwera!"
        });
    }
}

const signout = (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            return res.status(500).json({
                code: 500,
                message: "Błąd po stronie serwera!"
            });
        }
        res.clearCookie('connect.sid');
        return res.status(200).json({
            code: 200,
            message: "OK"
        });
    });
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