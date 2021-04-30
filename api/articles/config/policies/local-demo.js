'use strict';

/**
 * `demo-policy` policy.
 */

module.exports = async (ctx, next) => {
  // Add your own logic here.
  console.log('In local-demo policy.');

  await next();
};
