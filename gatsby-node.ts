const path = require("path");

// Absolute imports
exports.onCreateWebpackConfig = ({actions}) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@config": path.resolve(__dirname, "src/config"),
                "@components": path.resolve(__dirname, "src/components"),
                "@fonts": path.resolve(__dirname, "src/fonts"),
                "@hooks": path.resolve(__dirname, "src/hooks"),
                "@icons": path.resolve(__dirname, "src/components/icons"),
                "@images": path.resolve(__dirname, "src/images"),
                "@styles": path.resolve(__dirname, "src/styles")
            }
        }
    })
};