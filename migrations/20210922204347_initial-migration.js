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
    .createTable("steps", (step) => {
      step.increments("step_id");
      step.string("step_text", 200).notNullable();
      step.integer("step_number").notNullable();
      step
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
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
