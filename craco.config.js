const path = require('path')

module.exports = {
    babel: {
        plugins: [
            ['import', {libraryName: 'antd', libraryDirectory: 'es', style: 'css'}, 'antd'],
        ]
    },
    webpack: {
        alias: {
            '@': path.resolve('src')
        }
    }
}