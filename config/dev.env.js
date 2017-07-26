var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
})
