module.exports = {
    PORT: process.env.PORT || 3002,
    SESSION_SECRET: process.env.SESSION_SECRET || 'L0La An/V3r',
    CORS_ALLOWED_ORIGINS: process.env.CORS_ALLOWED_ORIGINS || ['http://localhost:8080', "https://teste-react.now.sh", "https://shalom.now.sh"],
    DB_PATH: process.env.DB_PATH || 'mongodb://localhost:27017/shalomLocal',
}