const db = require("../../data/db-config.js");

const getAll = () => {
  // DO YOUR MAGIC
  return db("cars");
};

const updateById = async (id, car) => {
  // DO YOUR MAGIC
  return db("cars").update(car).where({ id });
};

const deleteById = async (id) => {
  // DO YOUR MAGIC
  return db("cars").del().where({ id });
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
