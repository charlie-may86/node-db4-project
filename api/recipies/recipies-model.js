function getRecipeById(recipe_id) {
  return Promise.resolve(`awesome recipe with an id ${recipe_id}`);
}

module.exports = {
  getRecipeById,
};
