'use strict';

/**
 * `always-fail` policy.
 */

module.exports = async (ctx, next) => {
  // Add your own logic here.
  console.log('In always-fail policy.');
  return ctx.unauthorized('This endpoint is closed, Dude!');
};
