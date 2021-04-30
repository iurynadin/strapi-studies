'use strict';

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    console.log("api/controllers/article.create strapi.services", strapi.services)
    console.log("api/controllers/article.create strapi.controllers", strapi.controllers)
    // console.log("api/controllers/article.create strapi.models", strapi.models)
    console.log('ctx.state.user: ', ctx.state.user);

    const { id } = ctx.state.user // get the user_id
    const { title, description } = ctx.request.body
    const article = {
      title,
      description,
      user_id: id
    }

    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = null
    } else {
      entity = await strapi.services.articles.create(article);
    }
    return sanitizeEntity(entity, { model: strapi.models.articles });
  },
};
