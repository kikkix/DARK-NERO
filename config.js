const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'GENUX-3b1126', 
    PREFIX: process.env.PREFIX || '.',
    OWNER_NUMBER: process.env.OWNER_NUMBER || ['94764497078'],
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://kkasanka9:asanka@sandaru.nuaoou6.mongodb.net/?retryWrites=true&w=majority&appName=sandaru',
};

