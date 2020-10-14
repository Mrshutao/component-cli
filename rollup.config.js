import rollupTypeScript from "rollup-plugin-typescript";
import resolve from "rollup-plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import del from "rollup-plugin-delete";

const externalIds = ["react"];
export default [
  {
    input: "src/index.tsx",
    external(module) {
      return externalIds.some((id) => id === module);
    },
    output: {
      file: "dist/input.js",
      format: "umd",
      name: "input",
      globals: {
        react: "React",
      },
    },
    plugins: [
      resolve(),
      rollupTypeScript(),
      postcss(),
      del({ targets: "dist/*" }),
    ],
  },
];
