module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "ignorePatterns": [".eslintrc.js", "*package"],
    "rules": {
        indent : ["error", 4, {"ArrayExpression": 1}],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "multiline-comment-style": ["error", "bare-block"],
        camelcase: "warn",
        eqeqeq: ["error", "always"],
        "func-call-spacing": ["error", "never"],
        //"one-var": ["error", "consecutive"],
        "no-cond-assign": ["error", "always"],
        "no-extra-parens": "error",
        "no-constant-condition": "error",
        "no-dupe-args": "error"
    }
}
