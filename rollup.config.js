const path = require('path');
const buble = require('rollup-plugin-buble');

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'iife'
    },
    plugins: [
        buble()
    ],
}