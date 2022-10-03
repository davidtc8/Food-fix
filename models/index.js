const User = require('./user');
const User_plan = require('./user_plan');


User.hasOne(User_plan, {
    foreignKey: 'user_id',
    // When we delete a Driver, make sure to also delete the associated License.
    onDelete: 'CASCADE',
});

// We can also define the association starting with License
User_plan.belongsTo(User, {
    foreignKey: 'user_id',
});

// We package our two models and export them as an object so we can import them together and use their proper names
module.exports = { User, User_plan };