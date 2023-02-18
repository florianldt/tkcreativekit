import typescript from '@rollup/plugin-typescript';

export default [
    {
        input: './src/index.ts',
        output: [
            {
                dir: 'dist',
                entryFileNames: '[name].js',
                exports: 'auto',
                format: 'cjs',
                preserveModules: true,
                preserveModulesRoot: 'src',
            },
            {
                dir: 'dist',
                entryFileNames: '[name].mjs',
                exports: 'auto',
                format: 'es',
                preserveModules: true,
                preserveModulesRoot: 'src',
            },
        ],
        plugins: [
            typescript({
                tsconfig: './tsconfig.build.json',
                declaration: true,
                declarationDir: 'dist',
            }),
        ],
        external: ['react', 'styled-components'],
    },
];
