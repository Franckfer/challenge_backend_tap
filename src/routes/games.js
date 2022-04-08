const { Router } = require("express");
const router = Router();


/* /games */
router
    .get('/', /* controller 1 */)
    .get('/:id', /* controller 2 */)
    .post('/', /* controller 3 */)

    

module.exports = router;
