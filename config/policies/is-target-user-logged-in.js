'use strict';

/**
 * `is-target-user-logged-in` policy.
 */

module.exports = async (ctx, next) => {
  // Add your own logic here.

  if(ctx.state.user){

    if(!ctx.request.query.user) { //se nao tiver um parametro user no endpoint
      return ctx.unauthorized('Please specify a user id with ?user=${user.id');
    }

    console.log('In is-target-user-logged-in there is a query paramenter', ctx.request.query.user);

    const targetUser = ctx.request.query.user.toString()
    const loggedInUser = ctx.state.user.id.toString();

    if(targetUser === loggedInUser){
      return await next();
    } else{
      return ctx.unauthorized('Target user is diferent from logged in user')
    }
  }

  return ctx.unauthorized('You need to log in');

};
