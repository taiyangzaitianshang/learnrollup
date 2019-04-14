
const babel = require('rollup-plugin-babel');

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'iife'
    },
    plugins: [
        babel({
            "presets": [
                ["@babel/preset-env", {
                    "modules": false
                }],
            ],
            "plugins": [
                "transform-object-rest-spread"
            ]
        })
    ],
}