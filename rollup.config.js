import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
const ENV = process.env.NODE_ENV;
export default {
    input: './src/index.ts',
    exclude: ['node_modules', 'dist'],
    output: {
        file: 'dist/umd/WwUtils.js',
        name: 'WwUtils',
        format: 'umd', // 统一模块规范
        sourcemap: true,
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
        typescript(), // 会自动读取 文件tsconfig.json配置
        ENV === 'development'
            ? serve({
                  open: true, // 是否打开浏览器
                  contentBase: '', // 入口html的文件位置
                  //   historyApiFallback: true, // Set to true to return index.html instead of 404
                  //   host: 'localhost',
                  port: 3003,
                  openPage: '/public/index.html',
              })
            : null,
    ],
};
