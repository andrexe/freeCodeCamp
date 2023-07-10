module.exports = function (config) {

    // config.setBrowserSyncConfig({
    //     https: {
    //         key: "./certificates/openssl.key",
    //         cert: "./certificates/openssl.crt"
    //     }
    // });

    config.setServerOptions({
        https: {
            key: "certificates/openssl.key",
            cert: "certificates/openssl.crt",
        },
    });

    config.addPassthroughCopy("src/js");
    return {
        dir: {
            input: 'src',
            output: 'dist',
            data: '_data'
        }
    };
    
}