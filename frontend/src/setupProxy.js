const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    '/api',
    createProxyMiddleware({
        target: "http://localhost:3080"
    })
}