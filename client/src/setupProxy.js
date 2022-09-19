const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/account',
    createProxyMiddleware({
      target: "http://127.0.0.1:9999",
      changeOrigin: true,
    })
  );
};