module.exports = ({ env }) => ({
  email: {
    provider: 'mailtrap',
    providerOptions: {
      user: env('MAILTRAP_USER', '8ca90370251214'),
      password: env('MAILTRAP_PASSWORD', '751801564e57fc')
    },
    settings: {
      defaultFrom: env('MAILTRAP_DEFAULT_FROM', 'default@value.com'),
      defaultReplyTo: env('MAILTRAP_DEFAULT_REPLY_TO', 'default@value.com'),
    },
  }
});
