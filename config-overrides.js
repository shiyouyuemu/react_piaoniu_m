const { override, fixBabelImports ,addWebpackAlias,addDecoratorsLegacy,setWebpackPublicPath } = require('customize-cra');

const path= require("path")

module.exports = override(
    fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
    }),
    addWebpackAlias({
        assets:path.resolve(__dirname,"./src/assets"),
        components:path.resolve(__dirname,"./src/components"),
        utils:path.resolve(__dirname,"./src/utils"),
        pages:path.resolve(__dirname,"./src/pages"),
        store:path.resolve(__dirname,"./src/store"),
        nodemodules:path.resolve(__dirname,"./node_modules")
    }),
    addDecoratorsLegacy(),
    // setWebpackPublicPath('/piaoniu')
);