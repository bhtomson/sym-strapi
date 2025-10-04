module.exports = {
  routes: [
    { method: 'GET', path: '/__diag', handler: 'diag.index', config: { auth: false } },
  ],
};
