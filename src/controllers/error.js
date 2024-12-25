const http404 = async (req, res) => {
    try {
        return res.status(404).json({
            code: 404,
            message: "Podana strona nie istnieje!"
        });
    } catch (error) {
        console.error("Error controller (http404) error: " + error);
        return res.status(500).json({
            code: 500,
            message: "Błąd po stronie serwera!"
        });
    }
}

module.exports = {http404}