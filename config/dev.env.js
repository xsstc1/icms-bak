var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://easy-mock.com/mock/597ae24fa1d30433d8408d2c/icms"',
})
