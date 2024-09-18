// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt();
// Your custom configs here
module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  rules: {
    // override/add rules settings here, such as:
    "vue/no-unused-vars": "off",
    "vue/no-undef-components": [
      "error",
      {
        ignorePatterns: ["router(\\-\\w+)+"],
      },
    ],
    "vue/multi-word-component-names": "off",
    "vue/first-attribute-linebreak": "off",
  },
};
