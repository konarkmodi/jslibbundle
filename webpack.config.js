const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'genskill.js',
        library: 'genskill',
        libraryTarget: 'umd',
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
    // externals: {
    //     lodash: {
    //         commonjs: 'lodash',
    //         commonjs2: 'lodash',
    //         amd: 'lodash',
    //         root: '_',
    //     },
    // },
};
