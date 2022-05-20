const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model{}

Comment.init(
    {
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
   
    comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
 },

    {
        sequelize
    }
);

module.exports =  Comment;