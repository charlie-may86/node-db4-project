exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (recipes) => {
      recipes.increments("recipe_id");
      recipes.string("recipe_name", 200).notNullable().unique();
    })
    .createTable("ingredients", (ingredients) => {
      ingredients.increments("ingredient_id");
      ingredients.string("ingredient_name", 200).notNullable().unique();
      ingredients.string("ingredient_unit", 50);
    })
    .createTable("steps", (table) => {
      table.increments();
      
    })
    .createTable("step_ingredients", (table) => {
      table.increments();
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
