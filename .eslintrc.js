module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-standard"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "vue"
  ],
  rules: {
    "vue/no-v-html": "off",
    "vue/prop-name-casing": "off",
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off",
    quotes: ["error", "double"],
    // we want to force semicolons
    semi: ["error", "always"],
    // we use 2 spaces to indent our code
    indent: ["error", 2],
    // we want to avoid extraneous spaces
    "no-multi-spaces": ["error"],
    "no-tabs": 0,
    "vue/attribute-hyphenation": 0
  }
};
