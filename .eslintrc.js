module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "modules": true
    }
  },
  "rules": {
    "func-names": 0,
    "no-var": 0,
    "func-style": 0,
    "comma-dangle": 0,
    "valid-jsdoc": 0,
    "vars-on-top": 0,
    "complexity": [2, 6]
  },
  "globals": {
    "describe": false,
    "it": false,
    "expect": false
  }
}
