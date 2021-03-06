module.exports = {
  env: {
    node: true
  },

  parserOptions: {
    parser: "babel-eslint"
  },

  rules: {
    "no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },

  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/standard"]
};
