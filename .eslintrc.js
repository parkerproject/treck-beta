module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
  "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  "react/forbid-prop-types": [2,{ "forbid": [] }],
  "react/prefer-stateless-function": [2, { "ignorePureComponents": true }]
  }
};
