const buildHelper = require("@daybrush/builder");

export default buildHelper([
	{
		input: "./src/react-resize-watcher/index.tsx",
		output: "./dist/index.cjs.js",
		format: "cjs",
		exports: "named",
	},
	{
		input: "./src/react-resize-watcher/index.tsx",
		output: "./dist/inde.esm.js",
		format: "esm",
		exports: "named",
	},
]);

