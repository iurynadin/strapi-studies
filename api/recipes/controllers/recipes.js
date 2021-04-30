'use strict';
const _ = require('lodash')
const { sanitizeEntity } = require('strapi-utils')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

  async findAnd(ctx) {
    console.log('findAnd ctx.query', ctx.query)

    const allRecipesList = await Promise.all(ctx.query['ingredients.ingredient_in'].map(async ingredient => {
      const recipes = await strapi.services.recipes.find({'ingredients.ingredient_in': ingredient})
      return recipes
    }))

    console.log('allRecipesList', allRecipesList)

    const intersection = allRecipesList.reduce((acc, list) => _.intersectionWith(acc, list, (first, second) => first.id === second.id ), allRecipesList[0])

    console.log("intersection", intersection)

    return intersection.map(entity =>
      sanitizeEntity (entity, {model: strapi.models.recipes })
    )

  }

};
