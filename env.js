require('dotenv').config()

module.exports = {
    PORT: process.env.PORT,
    CLEARDB_DATABASE_URL: process.env.CLEARDB_DATABASE_URL
}