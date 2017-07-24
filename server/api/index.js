const router = require('express').Router();


router.get('/', function (req, res, next) { /* etc */});
// matches POST requests to /api/puppies/
router.post('/', function (req, res, next) { /* etc */});
// matches PUT requests to /api/puppies/:puppyId
router.put('/:puppyId', function (req, res, next) { /* etc */});
// matches DELTE requests to /api/puppies/:puppyId
router.delete('/:puppyId', function (req, res, next) { /* etc */});

router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
});


module.exports=router;