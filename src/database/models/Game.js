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
            allowNull: false
        }
        
    }
    
    let config = {
        tableName: "game",
        timestamps: true
    }

    const Game = sequelize.define(alias, cols, config)

    return Game;
}