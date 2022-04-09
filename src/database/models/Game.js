module.exports = (sequelize, dataTypes) => {
    let alias = "Game";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        created: {
            type: dataTypes.DATE,
            allowNull: true
        },
        game_state_id: {
            type: dataTypes.INTEGER,
            allowNull:false
        },
        
    }
    
    let config = {
        tableName: "game",
        timestamps: false,
        underscored: true,
    }

    const Game = sequelize.define(alias, cols, config);

    Game.associate = models => {
        Game.belongsTo(models.StateGame, {
            as: 'state',
            foreignKey: 'game_state_id'
        });
    }

    return Game;
}