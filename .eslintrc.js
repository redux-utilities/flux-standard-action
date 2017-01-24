module.exports = {
  "extends": "eslint-config-airbnb-base",
  "env": {
    "mocha": true,
    "node": true
  },
  "parser": "typescript-eslint-parser",
  "plugins": [
    "typescript"
  ],
  "rules": {
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["!test/**/*.js"]}],
    "no-use-before-define": ["error", "nofunc"],
  }
};
