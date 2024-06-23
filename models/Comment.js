const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dateCreation: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: new Date()
    },
    content: {
        type: DataTypes.STRING(5000),
        allowNull: false,
      },
    username: {
        type: DataTypes.STRING (1000),
        allowNull: false,
      },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "post",
          key: "id"
        }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id"
      }
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
