module.exports = {
    publicPath: '',
    lintOnSave: false,
    configureWebpack:{
        externals: {
            'TCPlayer': 'TCPlayer',
        }
    }
}
