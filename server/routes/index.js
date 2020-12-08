module.exports = app => {

    // Base URLS
    app.use('/api/offers', require('./offer.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
}