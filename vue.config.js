module.exports = {
    devServer: {
        proxy: {
            '/constellation': {
                target: 'http://web.juhe.cn:8080/',
                changeOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {
                    '^/constellation': ''
                }
            }
        },
        // // 是否开启eslint
        // overlay: {
        //     warnings: false,
        //     errors: false,
        // }
    },
    publicPath: '/constellation/',
    lintOnSave: false
};
