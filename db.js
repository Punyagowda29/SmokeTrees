const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('smoke_trees_db', 'Punya', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = require('./models/User')(sequelize);
const Address = require('./models/Address')(sequelize);

// Set up relationships
User.hasMany(Address, { foreignKey: 'userId', onDelete: 'CASCADE' });
Address.belongsTo(User, { foreignKey: 'userId' });

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync(); // Create tables if they don't exist
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

connectDB();

module.exports = { User, Address, sequelize };
