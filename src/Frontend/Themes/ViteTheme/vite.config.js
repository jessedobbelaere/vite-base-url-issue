import * as path from 'path';

const THEME_BASE_PATH = '/src/Frontend/Themes/' + path.basename(__dirname);

console.log(THEME_BASE_PATH);

/**
 * @type {import('vite').UserConfig}
 */
export default ({ command }) => ({
    base: THEME_BASE_PATH + (command === 'serve' ? '/' : '/dist/'),
    build: {
        manifest: true,
        outDir: './dist/',
        rollupOptions: {
            input: {
                app: '/src/app.js',
            },
        },
    },
});
