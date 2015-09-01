'use strict';

var router = require('express').Router();
var controller = require('./post.controller')


router.get('/', controller.index)
router.get('/:id', controller.show)
router.post('/', controller.create)
router.delete('/:id', controller.destroy)
router.put('/:id', controller.update)


router.param('id', controller.load)

module.exports = router;
