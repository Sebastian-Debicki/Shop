const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/data.json',
    createProxyMiddleware({
      target: 'https://www.reasonapps.pl',
      changeOrigin: true
    })
  );
};