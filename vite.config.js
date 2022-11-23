import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/app.js'],
//             refresh: true,
//         }),
//     ],
// });

export default defineConfig({
    plugins: [
        vue({
            template: {
              compilerOptions: {
                isCustomElement: (tag) => ['md-linedivider'].includes(tag),
              }
            }
          }),
        laravel({
          input:[
            'resources/css/frontend/app.css',
            'resources/js/frontend/src/apps/app.js',
          ],
          refresh: true,
        }),
    ],

    // server: {
    //     host: 'silkway_v9.test',
    //     watch: {
    //         usePolling: true,
    //     },
    // },

});
