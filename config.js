const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
    SESSION_ID: process.env.SESSION_ID || '',
    PREFIX: process.env.PREFIX || '.',
    OWNER_NUMBER: process.env.OWNER_NUMBER || ['94771029271', '94786802371'],
    MONGODB_URI: process.env.MONGODB_URI || '',
};
