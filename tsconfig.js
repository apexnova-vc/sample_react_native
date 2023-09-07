module.exports = {
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@/*": ["./app/*"],
    },
    outDir: "dist",
    module: "commonjs",
    target: "esnext",
    sourceMap: true,
    allowJs: true,
    skipLibCheck: true,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    strict: true,
    jsx: "react",
    moduleResolution: "node",
    rootDir: ".",
    forceConsistentCasingInFileNames: true,
    resolveJsonModule: true,
    noImplicitReturns: true,
    noImplicitThis: true,
    noImplicitAny: true,
    isolatedModules: true,
    importHelpers: true,
    strictNullChecks: true,
    noUnusedLocals: true,
    noEmit: true,
    typeRoots: ["node_modules/@types"],
  },
};
