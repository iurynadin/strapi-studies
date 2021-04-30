'use strict';

/**
 * `is-my-profile` policy.
 */

module.exports = async (ctx, next) => {
  // Add your own logic here.
  console.log('In is-my-profile policy.');
  console.log('ctx.state.user', ctx.state.user)

  if(ctx.state.user){

    if(!ctx.params.id){
      ctx.unauthorized('Please use this policy on in find one')
    }

    const targetUser = ctx.params.id.toString();
    const loggedInUser = ctx.state.user.id.toString();

    console.log('targetUser', ctx.params.id.toString())
    console.log('loggedInUser', ctx.state.user.id.toString())

    if(targetUser === loggedInUser){
      return await next();
    }
    ctx.unauthorized('Target user is different from logged in user!')
  }
  ctx.unauthorized('You are not logged In!')

};
