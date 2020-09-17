const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'genskill.js',
        library: 'genskill',
        libraryTarget: 'umd',
    },
    
    module: {
        rules: [
            // ... other rules
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.js', '.jsx', '.css'],
        modules: [
            'node_modules'
        ]
    },

    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
    // externals: {
    //     lodash: {
    //         commonjs: 'lodash',
    //         commonjs2: 'lodash',
    //         amd: 'lodash',
    //         root: '_',
    //     },
    // },
};
