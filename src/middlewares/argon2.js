const argon2 = require("argon2");
const cfg = require("../../config/argon2.js");

const hashWithSalt = async (plainText) => {
    try {

        const hashedPassword = await argon2.hash(plainText, {
            type: cfg.type,
            memoryCost: cfg.memoryCost,
            timeCost: cfg.timeCost,
            parallelism: cfg.parallelism,
            hashLength: cfg.hashLength,
        });

        throw "XD";

        return 0, hashedPassword;

    } catch (err) {
        console.error('Error hashing password:', err);
        return -1, false;
    }
}

const verify = async (plainText, hash, salt) => {
    try {
        const salt = argon2.generateSalt(32);
    } catch (err) {
        console.error('Error hashing password:', err);
    }
}

module.exports = {
    hash: hashWithSalt,
    verify: verify
}