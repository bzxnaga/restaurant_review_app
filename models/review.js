'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Review extends Model{

  }

  Review.init({
    CabangId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    review: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};