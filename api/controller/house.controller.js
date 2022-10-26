let prevFilter = "";
const db = require("../model/db");
const Op = db.Sequelize.Op;

const getHouseList = async (req, res) => {
  let { pageSize, pageNum, filter } = req.query;

  const houses = await db.House.findAndCountAll({
    where: {
      name: {
        [Op.like]: `%${filter}%`,
      },
    },
    order: [["name", "ASC"]],
    offset: pageSize * (pageNum - 1),
    limit: pageSize * 1,
  });
  
  if(!houses) {
    houses = {};
  }

  for(let i = 0; i < houses.rows.length; i++) {
    const units = await db.sequelize.query(`SELECT type, MIN(minOccupancy) as minOccupancy, MAX(maxOccupancy) as maxOccupancy, AVG(sqft) as sqft from units  WHERE house_id=${houses.rows[i].id} GROUP BY type`);
    console.log(units[0]);
    houses.rows[i].dataValues.units = units[0];
  }
  // console.log(houses.rows[1].dataValues.units);
  res.json(houses);

};

module.exports = getHouseList;
