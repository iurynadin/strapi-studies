'use strict';

/**
 * `email` service.
 */

module.exports = {
  sendEmail: async (subject, html) => {
    strapi.log.info("services.email.sendEmail Sending email")

    await strapi.plugins['email'].services.email.send({
      to: 'iurynadin@hotmail.com',
      from: 'Strapitest@localhost.com',
      replyTo: 'Strapitest@localhost.com',
      subject,
      html
    })

  }
};
