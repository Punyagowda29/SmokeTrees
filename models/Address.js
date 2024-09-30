module.exports = (sequelize) => {
    const Address = sequelize.define('Address', {
      id: {
        type: sequelize.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      address: {
        type: sequelize.Sequelize.TEXT,
        allowNull: false,
      },
      userId: {
        type: sequelize.Sequelize.INTEGER,
        references: {
          model: 'Users', // Name of the Users table
          key: 'id',
        },
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
  
    return Address;
  };
  