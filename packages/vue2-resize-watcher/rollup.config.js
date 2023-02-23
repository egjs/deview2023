const buildHelper = require("@egjs/build-helper");

const defaultOptions = {
  sourcemap: true,
  input: "./src/index.ts",
  exports: "named",
  commonjs: true,
  external: {
    "vue": "vue",
    "@vue/composition-api": "@vue/composition-api",
    "@egjs-deview2023/resize-watcher": "@egjs-deivew2023/resize-watcher",
  }
};
export default buildHelper([
  {
    ...defaultOptions,
    format: "es",
    output: "./dist/index.esm.js",
  },
  {
    ...defaultOptions,
    format: "cjs",
    output: "./dist/index.cjs.js",
  },
]);
