const argon2 = require("argon2")

const config = {
    type: argon2.argon2id,    
    memoryCost: 65536,        // Memory usage in kB
    timeCost: 4,              // The number of iterations
    parallelism: 2,           
    hashLength: 128,           // hash length
};

module.exports = config;