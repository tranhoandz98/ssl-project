const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
// .postCss('resources/css/app.css', 'public/css', [
//     //
// ]);

mix.js('src/index.jsx', 'js').react()
    .postCss('src/app.css', 'css', [
        require('tailwindcss'),
    ])
    .setPublicPath('public');
if (mix.inProduction()) {
    mix.version();
}
mix.browserSync('localhost:1234');
    // mix.ts("src/index.jsx", "public/js").react();
