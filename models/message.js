const Sequelize = require("sequelize");
const sequelize = require("../util/chatAPP");
const message=sequelize.define("message", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      groupId:{
        type:Sequelize.INTEGER,
      },
      sender_id:{
        type:Sequelize.INTEGER,
      }
})
module.exports=message