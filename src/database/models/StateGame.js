module.exports = (sequelize, dataTypes) => {
    let alias = "StateGame";
    let cols = {
        code: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false
        }
        
    }
    
    let config = {
        tableName: "state",
        timestamps: false
    }

    const StateGame = sequelize.define(alias, cols, config);

    StateGame.associate = models => {
        StateGame.hasMany(models.Game, {
            as: 'game',
            foreignKey: 'game_state_id'
        });
    }

    return StateGame;
}