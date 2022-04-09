const { Game } = require('../database/models/');

module.exports = {
   
    getGame: async (req, res) => {

        try {

            const game = await Game.findOne({
                where: {
                    id: req.params.id
                },
                include:[{association: 'state'}],
                attributes: { exclude: ['game_state_id'] }
            })

            return res.json({
                game,
                cells: []
            })

        } catch (error) {
            
            return res.json({
                msg: 'Game not found'
            })
        }
        
    },
    newGame: async (req, res) => {

        await Game.create({
            game_state_id: 1,
            created: new Date(),
        })
        .then(game => {

            return Game.findByPk(game.dataValues.id, {
                include:[{association: 'state'}],
                attributes: { exclude: ['game_state_id'] }
            })
        })
        .then(game => {

            return res.json({ 
                game, 
                cells: [] 
            });
        })
        .catch(err => {

            return res.json({
                msg: "can't create game"
            })

        })

        /* NOTA */
        /*  INTENTE HACERLO CON UN TRYCATCH PERO AL RETORNAR EL JSON CON LA CONSTANTE game, 
            ME TRAE EL MODELO PERO NO ME EXCLUYE LA COLUMNA 'game_state_id' 
            Y NO PUDE TRAER LA ASOCIACION CON 'StateGame' POR EL MOMENTO NO PUDE ENCONTRAR MI ERROR 
            CON EL TRYCATCH Y LO HICE CON THEN
        */

        // try {

        //     const game = await Game.create({
        //         game_state_id: 1,
        //         created: new Date()
        //     })

            
        //     Game.findByPk(game.dataValues.id, {
        //         include:[{association: 'state'}],
        //         attributes: { exclude: ['game_state_id'] }
        //     })

        //     return res.json({
        //         game,
        //         cells: []
        //     })

        // } catch (error) {
            
        //     console.log(error);
        //     return res.json(error)
        // }
    
    },
    editGame: async (req, res) => {

        const { id, game_state_id } = req.body

        try {

            const updateGame = await Game.update(
                { game_state_id },
                { where : { id } }
            )

            if ( updateGame[0] == (1 || 2 || 3) ) {
                return res.json({
                    message: 'Game updated',
                })
            }    

        } catch (error) {
            return res.json({
                message: 'Updated Error',
            });
        }
    }

}