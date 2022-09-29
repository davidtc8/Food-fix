const User = require('./user');
const Health = require('./health');


User.hasOne(Health, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Health.belongsTo(User, {
    foreignKey: 'user_id',
});


module.exports = { User, Health };