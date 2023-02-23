const commonjs = require("rollup-plugin-commonjs");
const buildHelper = require("@egjs/build-helper");

export default buildHelper([
	{
		input: "./src/vue-resize-watcher/index.ts",
		output: "./dist/index.cjs.js",
		format: "cjs",
		exports: "named",
	},
	{
		input: "./src/vue-resize-watcher/index.ts",
		output: "./dist/index.esm.js",
		format: "esm",
		exports: "named",
	},
]);

