const db = require("../../data/db-config");

async function getRecipeById(recipe_id) {
  const receipeRows = await db("recipes as r").where("recipe_id", recipe_id);

  return receipeRows;
}

module.exports = {
  getRecipeById,
};
