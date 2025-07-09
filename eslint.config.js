// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const eslintConfigPrettier = require("eslint-config-prettier");

module.exports = tseslint.config(
  // ===============================================
  // Main TypeScript Configuration
  // ===============================================
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        createDefaultProgram: true
      }
    },
    rules: {
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
      "@typescript-eslint/comma-spacing": ["error", { before: false, after: true }],
      "@typescript-eslint/object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "@typescript-eslint/space-before-function-paren": ["error", {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      }],
      "@typescript-eslint/space-infix-ops": "error",
      "@typescript-eslint/keyword-spacing": "error",
      "@typescript-eslint/brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "no-trailing-spaces": "error",
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
      "eol-last": ["error", "always"],
      "@typescript-eslint/comma-dangle": ["error", "never"],

      // ===============================================
      // CLASS MEMBER ORDERING & ACCESS MODIFIERS
      // ===============================================
      "@typescript-eslint/member-ordering": ["warn", {
        default: {
          memberTypes: [
            // Static members
            "public-static-field",
            "protected-static-field",
            "private-static-field",
            "public-static-method",
            "protected-static-method",
            "private-static-method",
            // Fields
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
            // Getters & Setters
            "public-instance-get",
            "protected-instance-get",
            "private-instance-get",
            "public-instance-set",
            "protected-instance-set",
            "private-instance-set",
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
        }
      }],
      "@typescript-eslint/explicit-member-accessibility": ["off", {
        accessibility: "explicit",
        overrides: {
          constructors: "off"
        }
      }],

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_"
      }],
      // Disable base rule in favor of TypeScript version
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "error",

      // ===============================================
      // TYPESCRIPT STRICT RULES
      // ===============================================
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/prefer-for-of": "error",

      // ===============================================
      // ANGULAR SPECIFIC RULES
      // ===============================================
      "@angular-eslint/component-class-suffix": "error",
      "@angular-eslint/directive-class-suffix": "error",
      "@angular-eslint/no-input-rename": "error",
      "@angular-eslint/no-output-rename": "error",
      "@angular-eslint/use-lifecycle-interface": "error",

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
        { selector: "interface", format: ["PascalCase"], suffix: ["Model"]},
        { selector: "typeAlias", format: ["PascalCase"] },
        { selector: "enum", format: ["PascalCase"] },
        { selector: "enumMember", format: ["UPPER_CASE"] },
        { selector: "class", format: ["PascalCase"] },
        { selector: "variable", format: ["camelCase", "UPPER_CASE"] },
        { selector: "function", format: ["camelCase"] },
        { selector: "method", format: ["camelCase"] },
        { selector: "property", format: ["camelCase"] },
        { selector: "variable", modifiers: ["const"], format: ["camelCase", "UPPER_CASE"] }
      ],

      // ===============================================
      // METHOD/FUNCTION RULES
      // ===============================================
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/explicit-function-return-type": ["warn", {
        allowExpressions: true,
        allowTypedFunctionExpressions: true
      }],
      "max-lines-per-function": ["warn", { max: 50, skipBlankLines: true, skipComments: true }],
      "complexity": ["warn", 10]
    },
  },

  // ===============================================
  // HTML Template Configuration
  // ===============================================
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility
    ],
    rules: {
      "@angular-eslint/template/prefer-self-closing-tags": "warn",
      "@angular-eslint/template/use-track-by-function": "error",
      "@angular-eslint/template/cyclomatic-complexity": ["error", { maxComplexity: 5 }],
      "@angular-eslint/template/conditional-complexity": ["error", { maxComplexity: 3 }],
      "@angular-eslint/template/click-events-have-key-events": "error",
      "@angular-eslint/template/interactive-supports-focus": "error",
      "@angular-eslint/template/label-has-associated-control": "error",
      "@angular-eslint/template/mouse-events-have-key-events": "error",
      "@angular-eslint/template/no-autofocus": "error",
      "@angular-eslint/template/no-distracting-elements": "error",
      "@angular-eslint/template/no-positive-tabindex": "error",
      "@angular-eslint/template/valid-aria": "error",
      "@angular-eslint/template/banana-in-box": "error",
      "@angular-eslint/template/eqeqeq": "error",
      "@angular-eslint/template/no-any": "error",
      "@angular-eslint/template/no-duplicate-attributes": "error",
      "@angular-eslint/template/no-negated-async": "error",
      "@angular-eslint/template/elements-content": "warn",
      "@angular-eslint/template/no-call-expression": "off"
    },
  },

  // ===============================================
  // Spec File Overrides
  // ===============================================
  {
    files: ["**/*.spec.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "max-lines-per-function": "off",
      "@typescript-eslint/explicit-function-return-type": "off"
    },
  },

  // ===============================================
  // Prettier Configuration (must be last)
  // ===============================================
  eslintConfigPrettier
);
