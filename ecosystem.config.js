// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'hugo-dev',
      script: 'hugo',
      args: 'server --bind=0.0.0.0 --port=1313',
      interpreter: 'none', // 不需要 Node.js 解释器
      cwd: '/Users/perot/Documents/1900—程序设计/manleyblog/', // 替换为你的项目路径
    },
  ],
};