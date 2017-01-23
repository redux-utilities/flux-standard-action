module.exports = {
  "extends": "eslint-config-airbnb-base",
  "env": {
    "mocha": true,
    "node": true
  },
  "globals": {
    "expect": true
  },
  "parser": "typescript-eslint-parser",
  "plugins": [
    "typescript"
  ],
  "rules": {
    "no-use-before-define": ["error", "nofunc"],
    "no-unused-expressions": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["!test/**/*.js"]}]
  }
};
