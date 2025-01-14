"use strict";

module.exports = {
    root: true,
    extends: ["eslint"],
    parserOptions: {
        ecmaVersion: 2022
    },
    rules: {

        // Disable eslint-plugin-node rules from eslint-config-eslint
        "no-process-exit": "off",
        "func-style": "off",
        "node/no-deprecated-api": "off",
        "node/no-extraneous-require": "off",
        "node/no-missing-require": "off",
        "node/no-unpublished-bin": "off",
        "node/no-unpublished-require": "off",
        "node/no-unsupported-features/es-builtins": "off",
        "node/no-unsupported-features/es-syntax": "off",
        "node/no-unsupported-features/node-builtins": "off",
        "node/process-exit-as-throw": "off",
        "node/shebang": "off",
        "node/no-extraneous-import": "off",
        "node/no-missing-import": "off",
        "node/no-unpublished-import": "off",

        // Disable rules that the codebase doesn't currently follow.
        "jsdoc/require-jsdoc": "off",
        "jsdoc/require-returns": "off",
        "jsdoc/require-param-description": "off",
        "jsdoc/require-param-type": "off"
    },
    overrides: [
        {
            files: ["src/playground/**/*.{js,jsx}"],
            plugins: ["react", "jsx-a11y", "react-hooks"],
            extends: ["plugin:react/recommended", "plugin:jsx-a11y/recommended"],
            parserOptions: {
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true
                }
            },
            env: {
                browser: true,
                es6: true,
                node: false
            },
            settings: {
                react: {
                    version: "16.8.6"
                }
            },
            rules: {
                "react/jsx-no-target-blank": "error",

                // Disable rules that the codebase doesn't currently follow.
                // It might be a good idea to enable these in the future.
                "jsx-a11y/no-onchange": "off",
                "react/prop-types": "off",
                "jsdoc/require-jsdoc": "off",
                "react-hooks/rules-of-hooks": "error",
                "react-hooks/exhaustive-deps": "warn"
            }
        }
    ]
};
