// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const eslintConfigPrettier = require("eslint-config-prettier");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      // ===============================================
      // YOUR EXISTING ANGULAR RULES
      // ===============================================
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],

      // ===============================================
      // CODE FORMATTING & SPACING
      // ===============================================
      "@typescript-eslint/indent": ["error", 2],
      "@typescript-eslint/quotes": ["error", "single"],
      "@typescript-eslint/semi": ["error", "always"],
      "@typescript-eslint/comma-spacing": ["error", { "before": false, "after": true }],
      "@typescript-eslint/object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "@typescript-eslint/space-before-function-paren": ["error", {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }],
      "@typescript-eslint/space-infix-ops": "error",
      "@typescript-eslint/keyword-spacing": "error",
      "@typescript-eslint/brace-style": ["error", "1tbs", { "allowSingleLine": true }],
      "no-trailing-spaces": "error",
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
      "eol-last": ["error", "always"],
      "@typescript-eslint/comma-dangle": ["error", "never"],

      // ===============================================
      // CLASS MEMBER ORDERING & ACCESS MODIFIERS
      // ===============================================
      "@typescript-eslint/member-ordering": ["error", {
        "default": {
          "memberTypes": [
            // Static members first
            "public-static-field",
            "protected-static-field",
            "private-static-field",
            "public-static-method",
            "protected-static-method",
            "private-static-method",

            // Instance fields
            "public-decorated-field",
            "protected-decorated-field",
            "private-decorated-field",
            "public-instance-field",
            "protected-instance-field",
            "private-instance-field",
            "public-abstract-field",
            "protected-abstract-field",

            // Constructor
            "public-constructor",
            "protected-constructor",
            "private-constructor",

            // Getters/Setters
            "public-decorated-get",
            "protected-decorated-get",
            "private-decorated-get",
            "public-decorated-set",
            "protected-decorated-set",
            "private-decorated-set",
            "public-instance-get",
            "protected-instance-get",
            "private-instance-get",
            "public-instance-set",
            "protected-instance-set",
            "private-instance-set",
            "public-abstract-get",
            "protected-abstract-get",
            "public-abstract-set",
            "protected-abstract-set",

            // Methods
            "public-decorated-method",
            "protected-decorated-method",
            "private-decorated-method",
            "public-instance-method",
            "protected-instance-method",
            "private-instance-method",
            "public-abstract-method",
            "protected-abstract-method"
          ],
          "order": "alphabetically"
        }
      }],
      "@typescript-eslint/explicit-member-accessibility": ["error", {
        "accessibility": "explicit",
        "overrides": {
          "constructors": "off"
        }
      }],

      // ===============================================
      // UNUSED CODE DETECTION
      // ===============================================
      "@typescript-eslint/no-unused-vars": ["error", {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }],
      "no-unused-expressions": "error",
      "@typescript-eslint/no-unused-expressions": "error",

      // ===============================================
      // TYPESCRIPT STRICT RULES (Available without type-checking)
      // ===============================================
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-includes": "error",
      "@typescript-eslint/prefer-string-starts-ends-with": "error",

      // ===============================================
      // ANGULAR SPECIFIC RULES
      // ===============================================
      "@angular-eslint/component-class-suffix": "error",
      "@angular-eslint/directive-class-suffix": "error",
      "@angular-eslint/no-input-rename": "error",
      "@angular-eslint/no-output-rename": "error",
      "@angular-eslint/use-lifecycle-interface": "error",
      "@angular-eslint/no-host-metadata-property": "error",
      "@angular-eslint/no-inputs-metadata-property": "error",
      "@angular-eslint/no-outputs-metadata-property": "error",
      "@angular-eslint/no-queries-metadata-property": "error",
      "@angular-eslint/prefer-on-push-component-change-detection": "warn",

      // ===============================================
      // GENERAL CODE QUALITY
      // ===============================================
      "prefer-const": "error",
      "no-var": "error",
      "no-console": "warn",
      "no-debugger": "error",
      "no-alert": "error",
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
      "no-empty": "error",
      "no-duplicate-imports": "error",

      // ===============================================
      // NAMING CONVENTIONS
      // ===============================================
      "@typescript-eslint/naming-convention": [
        "error",
        // Interfaces
        {
          "selector": "interface",
          "format": ["PascalCase"],
          "prefix": ["I"]
        },
        // Types
        {
          "selector": "typeAlias",
          "format": ["PascalCase"]
        },
        // Enums
        {
          "selector": "enum",
          "format": ["PascalCase"]
        },
        {
          "selector": "enumMember",
          "format": ["UPPER_CASE"]
        },
        // Classes
        {
          "selector": "class",
          "format": ["PascalCase"]
        },
        // Variables
        {
          "selector": "variable",
          "format": ["camelCase", "UPPER_CASE"]
        },
        // Functions
        {
          "selector": "function",
          "format": ["camelCase"]
        },
        // Methods
        {
          "selector": "method",
          "format": ["camelCase"]
        },
        // Properties
        {
          "selector": "property",
          "format": ["camelCase"]
        },
        // Constants
        {
          "selector": "variable",
          "modifiers": ["const"],
          "format": ["camelCase", "UPPER_CASE"]
        }
      ],

      // ===============================================
      // METHOD/FUNCTION RULES
      // ===============================================
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/explicit-function-return-type": ["warn", {
        "allowExpressions": true,
        "allowTypedFunctionExpressions": true
      }],
      "max-lines-per-function": ["warn", {
        "max": 50,
        "skipBlankLines": true,
        "skipComments": true
      }],
      "complexity": ["warn", 10]
    },
  },
  // ===============================================
  // TYPE-CHECKED RULES (Optional - for stricter checking)
  // Uncomment this section if you want type-aware linting
  // ===============================================
  // {
  //   files: ["**/*.ts"],
  //   extends: [
  //     ...tseslint.configs.recommendedTypeChecked,
  //   ],
  //   languageOptions: {
  //     parserOptions: {
  //       project: true,
  //       tsconfigRootDir: import.meta.dirname,
  //     },
  //   },
  //   rules: {
  //     // These require type-checking and may be too strict initially
  //     "@typescript-eslint/no-unsafe-any": "warn",
  //     "@typescript-eslint/no-unsafe-call": "warn",
  //     "@typescript-eslint/no-unsafe-member-access": "warn",
  //     "@typescript-eslint/no-unsafe-return": "warn",
  //     "@typescript-eslint/no-unsafe-assignment": "warn",
  //     "@typescript-eslint/no-unsafe-argument": "warn",
  //   },
  // },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility
    ],
    rules: {
      // ===============================================
      // TEMPLATE FORMATTING
      // ===============================================
      "@angular-eslint/template/prefer-self-closing-tags": "error",
      "@angular-eslint/template/use-track-by-function": "error",
      "@angular-eslint/template/no-call-expression": "error",
      "@angular-eslint/template/cyclomatic-complexity": ["error", {
        "maxComplexity": 5
      }],
      "@angular-eslint/template/conditional-complexity": ["error", {
        "maxComplexity": 3
      }],

      // ===============================================
      // ACCESSIBILITY RULES
      // ===============================================
      "@angular-eslint/template/click-events-have-key-events": "error",
      "@angular-eslint/template/interactive-supports-focus": "error",
      "@angular-eslint/template/label-has-associated-control": "error",
      "@angular-eslint/template/mouse-events-have-key-events": "error",
      "@angular-eslint/template/no-autofocus": "error",
      "@angular-eslint/template/no-distracting-elements": "error",
      "@angular-eslint/template/no-positive-tabindex": "error",
      "@angular-eslint/template/valid-aria": "error",

      // ===============================================
      // ANGULAR TEMPLATE BEST PRACTICES
      // ===============================================
      "@angular-eslint/template/banana-in-box": "error",
      "@angular-eslint/template/eqeqeq": "error",
      "@angular-eslint/template/no-any": "error",
      "@angular-eslint/template/no-duplicate-attributes": "error",
      "@angular-eslint/template/no-negated-async": "error"
    },
  },
  {
    files: ["**/*.spec.ts"],
    rules: {
      // Relax rules for test files
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "max-lines-per-function": "off",
      "@typescript-eslint/explicit-function-return-type": "off"
    },
  },
  eslintConfigPrettier
);
