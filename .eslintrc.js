module.exports = {
  root: true,
  env: {
    es2022: true,
    "shared-node-browser": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:n/recommended",
    "plugin:jsdoc/recommended",
    "plugin:import/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:sonarjs/recommended",
    "plugin:no-unsanitized/DOM",
  ],
  plugins: ["html"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "import/no-default-export": "off",
    "import/extensions": [
      "warn",
      {
        js: "never",
        ts: "never",
        jsx: "never",
        tsx: "never",
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
          kebabCase: true,
        },
      },
    ],
    "react/destructuring-assignment": "off",
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    "eslint-comments/no-unlimited-disable": "off",
    "unicorn/prevent-abbreviations": ["off"],
    "react/prop-types": ["off"],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        caughtErrors: "none",
      },
    ],
    "unicorn/prefer-spread": "off",
  },
  overrides: [
    {
      files: ["*.{test,spec}.[jt]s"],
      env: {
        jest: true,
      },
      settings: {
        jest: {
          version: "^27.0.0",
        },
      },
      extends: [
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:testing-library/dom",
      ],
    },
    {
      files: ["*.{test,spec}.[jt]sx"],
      extends: ["plugin:testing-library/react"],
      plugins: ["jest-dom"],
    },
    {
      files: ["*.[jt]sx"],
      extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react/jsx-runtime",
      ],
      settings: {
        react: {
          version: "detect",
        },
      },
    },
    {
      files: ["*.ts{,x}"],
      extends: [
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
      ],
      rules: {
        "@typescript-eslint/consistent-type-imports": [
          "error",
          {
            prefer: "type-imports",
            disallowTypeAnnotations: false,
          },
        ],
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
            caughtErrors: "none",
          },
        ],
        "@typescript-eslint/no-unused-expressions": [
          "error",
          {
            allowShortCircuit: true,
            allowTernary: true,
          },
        ],
      },
    },
    {
      files: ["*.json{,c,5}"],
      extends: ["plugin:jsonc/recommended-with-jsonc"],
    },
    {
      files: ["*.yaml", "*.yml"],
      extends: ["plugin:yml/standard", "plugin:yml/prettier"],
    },
    {
      files: ["package.json"],
      rules: {
        "jsonc/sort-keys": [
          "error",
          {
            order: [
              "name",
              "version",
              "description",
              "keywords",
              "license",
              "repository",
              "funding",
              "author",
              "type",
              "files",
              "exports",
              "main",
              "module",
              "unpkg",
              "bin",
              "scripts",
              "husky",
              "lint-staged",
              "peerDependencies",
              "peerDependenciesMeta",
              "dependencies",
              "devDependencies",
              "eslintConfig",
            ],
            pathPattern: "^$",
          },
          {
            order: {
              type: "asc",
            },
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
          },
        ],
      },
    },
    {
      files: ["*.js", "*.cjs"],
      env: {
        node: true,
      },
      rules: {
        "unicorn/prefer-module": "off",
        // "@typescript-eslint/no-var-requires": "warn",
      },
    },
    // NOTE: Testing out activation of recommended jsdoc rules for all files, even ts for now.
    // { files: ["*.{,m,c}js"], extends: ["plugin:jsdoc/recommended"], },
    {
      files: ["*"],
      extends: ["prettier"],
    },
  ],
};
