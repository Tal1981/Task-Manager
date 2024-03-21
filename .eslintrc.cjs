module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "prettier",
        "eslint:recommended"
    ],
    "plugins": [
        "prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "no-var": "error",
        "prefer-const": "warn",
        "no-unused-vars": "warn",
        "prettier/prettier": 2, // Turn off rules that conflict with prettier
    }
}
