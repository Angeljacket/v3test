module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5555',
                changeOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        // 是否开启eslint
        // overlay: {
        //     warnings: false,
        //     errors: false,
        // }
    },
    lintOnSave: false
};
