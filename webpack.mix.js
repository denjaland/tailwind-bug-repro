let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
let atImport = require('postcss-import');


mix.postCss('src/tailwind.css', 'public/css', [
        atImport(),
        tailwindcss('src/tailwind.config.js'),
    ])
    .copy('src/index.html', 'public')
;





