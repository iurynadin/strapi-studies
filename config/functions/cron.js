'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/concepts/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  // '* * * * *': async () => {
  //   strapi.services.email.sendEmail("The Subject", "<p>The email</p>")
  // }
};
