"user strict";

let router = require('express').Router()
let NotFoundError = require('../errors/NotFoundError')

router.use('/',require('./core.route'))
router.use(require('./ghiso.route'))




// catch 404 and forward to error handler
router.use((req, res, next) => {
    const err = new NotFoundError('Page not found');
    return next(err);
})
  // Error handle
router.use(function(err, req, res, next) {
    const _status = err.status || 500;
    res.status(_status);
    res.render('error', {
      message: err.message,
      status : _status
    })
})
module.exports = router

