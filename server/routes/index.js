module.exports = app => {

    // Base URLS
    app.use('/api/offers', require('./offer.routes.js'))
    app.use('/api/comments', require('./comment.routes'))
    app.use('/api/auth', require('./auth.routes.js'))
    app.use('/api/users', require('./user.routes.js'))
    app.use('/api/files', require('./files.routes.js'))
}