module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        // 其他规则
      ]
    },
    // 其他配置
  }
  