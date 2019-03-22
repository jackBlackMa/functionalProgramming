var path = require('pach');

var config = {
    entry: {
        main: "./main",
    },
    output: {
        path:path.join(__dirname,'./dist'),
        publickPath: '/dist/',
        filename: 'main.js',
    }
}

modules.exports = config;