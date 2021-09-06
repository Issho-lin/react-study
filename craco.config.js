const path = require('path')

module.exports = {
    babel: {
        plugins: [
            ['import', {libraryName: 'antd', libraryDirectory: 'es', style: 'css'}, 'antd'],
            ["@babel/plugin-proposal-decorators", {legacy: true}]
        ]
    },
    webpack: {
        alias: {
            '@': path.resolve('src')
        }
    }
}