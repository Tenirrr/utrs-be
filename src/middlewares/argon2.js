const argon2 = require("argon2");
const cfg = require("../../config/argon2.js");

const hash = async (plainText) => {
    try {
        return await argon2.hash(plainText, {
            type: cfg.type,
            memoryCost: cfg.memoryCost,
            timeCost: cfg.timeCost,
            parallelism: cfg.parallelism,
            hashLength: cfg.hashLength,
        }), 0;
    } catch (error) {
        console.error("[ERROR] Argon2: ", error);
        return 0, error;
    }
}

const verify = async (plainText, hash) => {
    try {
        return await argon2.verify(hash, plainText), 0;
    } catch (error) {
        console.error("[ERROR] Argon2: ", error);
        return 0, error;
    }
}

module.exports = {
    hash: hash,
    verify: verify
}