const { Router } = require("express");
const router = Router();
const { getGame, newGame, editGame } = require("../controllers/gamesController");


/* /games */
router
    .get('/:id', getGame)
    .get('/', newGame)
    .post('/', editGame)

    

module.exports = router;
