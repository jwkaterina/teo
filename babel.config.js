module.exports = {
    presets: [
        ["@babel/preset-env", {targets: {node: 'current'}}],
        "@babel/preset-typescript"
    ],
    "plugins": [
        [
            "@babel/plugin-transform-react-jsx",
            {
                runtime: "classic",
                pragma: "parseJSX",
                pragmaFrag: "parseJSXFragment",
            }
        ],
        [
            "babel-plugin-jsx-pragmatic",
            {
                module: "/src/reactish",
                export: "parseJSX",
                import: "parseJSX"
            },
            "for jsx"
        ],
        [
            "babel-plugin-jsx-pragmatic",
            {
                module: "/src/reactish",
                export: "parseJSXFragment",
                import: "parseJSXFragment"
            },
            "for jsx fragment"
        ]
    ]
};