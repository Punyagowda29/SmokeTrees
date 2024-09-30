module.exports = (sequelize) => {
    const User = sequelize.define('User', {
      id: {
        type: sequelize.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: sequelize.Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: sequelize.Sequelize.DATE,
        defaultValue: sequelize.Sequelize.NOW,
      },
      updatedAt: {
        type: sequelize.Sequelize.DATE,
        defaultValue: sequelize.Sequelize.NOW,
        onUpdate: sequelize.Sequelize.NOW,
      },
    });
  
    return User;
  };
  