const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        edge: '17',
        chrome: '67',
        esmodules: true,
      },
      useBuiltIns: 'usage',
      corejs: '3',
    },
  ],
]

const plugins = []

module.exports = { presets, plugins }
