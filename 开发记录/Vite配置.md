# Vite

[官网](https://vitejs.cn/)
要求: Node.js 版本 >= 12.0.0

Vite 和 Webpack 横向对比:

- 启动流程区别
  - Webpack 的流程是: 先 entry,然后逐步加载,等所有模块加载完毕再 bundle,都准备完毕了服务器在启动
  - Vite 的流程是: 先冷启动(加载一个空壳),根据请求解析要被引用的模块,然后将其引入展示,对必须要的模块暂时搁置(lazy load module).
- Webpack 缺点
  - 缓慢的服务器启动
    - Webpack 启动服务之前,会依赖打包器抓取和构建所有的应用,项目越复杂,时间越长.
    - Vite 通过在一开始将应用中的模块区分为:`依赖`和`源码`两类,改进开发服务的响应时间.
      - 依赖: 不变动的`纯JavaScript`
      - 源码: 并非直接的`JavaScript`文件(JSX,CSS,Vue,Component,JSON 等),基于路由对模块拆分,并非所有源码都需要被加载.
  - 使用 Node.js 来实现
    - Vite 使用 esbuild(Go)预构建依赖,比 Nodejs 依赖的打包器构建模块快 10~100 倍
  - 热更新效率较低
    - Webpack 在编辑文件之后,会重新构建文件本身,响应时间也会随着项目的复杂度而增加.热更新模块(HMR)已经做了一些优化,但是依然不够.
    - Vite 中,HMR 是在原生 ESM 中执行,不论应用大小,只关注模块本身. 同时利用 HTTP 头部(浏览器缓存)来加速
      - 请求模块使用`协商缓存` -> `304 Not Modified`
      - 依赖模块使用`强制缓存` -> `Cache-Control: max-age=31536000,immutable`
- Vite 缺点
  - Vite 的生态不如 Webpack,`Webpack`的`loader`和`plugin`十分丰富; 追齐需要一些时间.
  - prod 环境的构建，目前用的 Rollup -> esbuild 对于 css 和代码分割不是很友好
    - 开发环境 ESM+HMR
    - 生产环境 Rollup
  - 没有像 Webpack 大规模的使用,很多问题没有暴露,需要谨慎使用 (所以`Ekko`也提供使用 Webpack4/5 的版本)

# 配置说明

## 配置文件

默认为根目录下的`vite.config.js`, 也可以执行文件`vite --config my-config.js`
[配置手册](https://vitejs.cn/config/#define)

## 命令

- 打包构建
  ```shell
  "build": "npm run build",
  	"preview": "npm run preview",  # 当上一步构建完成后，运行该命令测试应用
  # 命令会在本地启动一个静态 Web 服务器，将 dist 文件夹运行在 http://localhost:4173
  	"preview": "vite preview --port 8080" # 指定端口号
  ```
- 自动打开浏览器
  ```shell
  "dev": "vite --open",
  "build": "vue-tsc --noEmit && vite build",
  "preview": "vite preview --open"
  ```

## 暴露环境变量

使用

```shell
import.meta.env.MODE     #  应用运行的模式。
import.meta.env.BASE*URL #  部署应用时的基本 URL。他由 base 配置项决定。
import.meta.env.PROD     #  应用是否运行在生产环境。
import.meta.env.DEV      #  应用是否运行在开发环境
```

自定义环境变量
(1)创建文件, 已存在的环境变量不会被以下文件中的值覆盖

```shell
.env # 所有情况下都会加载
.env.local # 所有情况下都会加载，但会被 git 忽略
.env.[mode] # 只在指定模式下加载,如.env.production 的优先级比.env 高
.env.[mode].local # 只在指定模式下加载，但会被 git 忽略
\*\*只有以 VITE*为前缀的变量才会暴露给经过 vite 处理的代码\*\* `VITE_`是默认值,可以在 config 中进行配置
```

(2)添加类型声明

```ts
  <reference types="vite/client" />
  ...
  interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // 更多环境变量...
  }
  ...
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
```

## 自定义开发模式

除了默认的`development`和`production`,还可以选择自定义模式. 例如: staging(预发布|预上线|上灰). 环境变量略有不同.
vite build --mode staging
.env.staging 文件存放相关模式下的环境变量

## 兼容老版本浏览器

默认情况下,Vite 不包含任何`polyfill`,只会做语法转译处理
(1)通过引入[polyfill](https://babeljs.io/docs/en/babel-polyfill/)
(2)通过插件支持
通过插件@vitejs/plugin-legacy 来支持，它将自动生成传统版本的 chunk 及与其相对应 ES 语言特性方面的 polyfill
兼容版的 chunk 只会在不支持原生 ESM 的浏览器中进行按需加载

## TypeScript 相关配置

    (1)esbuild下不支持功能编辑时报错
    	配置类型导入导出、enum、没有import、export导入导出的非模块文件报错
    	tsconfig.json
    	{
    		"compilerOptions": {
    			"isolatedModules":true 上述特性会在编辑时报错，否则会在运行时报错
    		}
    	}
    (2)导入vite内置的一些类型定义
    	.资源导入 (例如: 导入一个 .svg 文件)
    	.import.meta.env 上 Vite 注入的环境变量的类型定义
    	.import.meta.hot 上的 HMR API 类型定义
    	方式一: 在.d.ts文件中
    	  <reference types="vite/client" />
    	方式二: 在tsconfig.json中
    		{
    		  "compilerOptions": {
    		    "types": ["vite/client"]
    		  }
    		}

## 多页面配置

```shell
  ├── package.json
  ├── vite.config.js
  ├── index.html
  ├── main.js
  └── nested
      ├── index.html
      └── nested.js

  build: {
    rollupOptions: {
      input: {
        main: resolve(**dirname, 'index.html'),
        nested: resolve(**dirname, 'nested/index.html')
      }
    }
  }
```

## 基本配置

(1)区分不同环境配置
command: 根据运行的命令区分配置，serve 为开发环境，否则为 build 生产环境
mode: 根据环境区分配置

```JS
  export default defineConfig(async ({ command, mode }) => {
    const config=await fn();	// 支持使用Promise
    if (command === 'serve') {
      return {}
    } else if(command='build'){
      return {}
    }
  })
```

(2)选项配置

```JS
  export default defineConfig({
    root: process.cwd(), // 默认process.cwd(), index.html所在的位置,绝对位置或相对位置

    /** base
     * 绝对 URL 路径名，例如 /foo/
     * 完整的 URL，例如 https://foo.com/
     * 空字符串或 （用于开发环境）
     * 通过命令指定: vite build --base=/my/public/path/
     * 代码中获取base: import.meta.env.BASE_URL全局变量在代码中使用，原样出现(例如import.meta.env['BASE_URL']是无效的)
     */
    base: './', //开发或生产环境服务的公共基础路径

    /** mode
     * 将会把serve和build时的模式都覆盖掉。也可以通过命令行 --mode 选项来重写
     * 'development'（serve）
     * 'production'（build）
     */
    mode: "development", // 打包模式
    define: {
      // 定义全局常量替换方式。其中每项在开发环境下会被定义在全局，而在构建时被静态替换
      __DEV__: 'dev',
    },
    plugins: []	// 插件数组

    /** publicDir
     * 作为静态资源服务的文件夹。该目录中的文件在开发期间在 / 处提供.并在构建期间复制到 outDir 的根目录.
     * 并且始终按原样提供或复制而无需进行转换.
     * 该值可以是文件系统的绝对路径，也可以是相对于项目的根目录的相对路径。
     * 默认'public'
     */
    publicDir: 'public',

    /** cacheDir
     * 存储缓存文件的目录。此目录下会存储预打包的依赖项或 vite 生成的某些缓存文件，使用缓存可以提高性能。
     * 如需重新生成缓存文件，你可以使用 --force 命令行选项或手动删除目录。
     * 此选项的值可以是文件的绝对路径，也可以是以项目根目录为基准的相对路径。当没有检测到 package.json 时，则默认为 .vite。
     * 默认"node_modules/.vite" ? ".vite" 这需要确定一下
     */
    cacheDir: "node_modules/.vite",

    assetsInclude: ['**/*.gltf'], // 解析额外的定义内置type以外的静态导入资源

    /** logLevel
     * 调整控制台输出的级别，默认为 'info'
     * 'info' | 'warn' | 'error' | 'silent'
     * 可以根据自己的需求进行调整
     */
    logLevel: 'info',

    /** clearScreen
     * 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息。命令行模式下可以通过 --clearScreen false 设置。
     * 刷新页面时, 是否清理打印的信息, 可以根据自己的需求进行调整
     */
    clearScreen: true,

    /** envDir
     * 用于加载 .env 文件的目录。可以是一个绝对路径，也可以是相对于项目根的路径
     * 默认: 根路径
     */
    envDir: './',

    /** envPrefix
     * 自定义环境变量前缀，以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中
     * 默认: VITE_
     */
    envPrefix: 'VITE_',

    // 解析相关
    resolve:{
      /** alias -> 路径别名
       * dedupe:使用此选项强制 Vite 始终将列出的依赖项解析为同一副本
       * 比如当安装了两个不同版本的依赖，如vue2和vue3，通过这个声明最终引入的版本
       */
      alias:{
        "@": path.resolve(__dirname, "src"),
      },
      alias:[{
        find: '@',  字符串｜正则
          replacement: path.resolve(__dirname, 'src')
      }],

      condition: [{
        "exports": { // 导出
          ".": {
            "import": "./index.esm.js",
            "require": "./index.cjs.js"
          }
        }
      }]

      /** mainFields
       * 根据package.json中的字段，在不同环境中导入库的入口文件位置
       * import引入的文件对应module中的路径
       * require引入的文件对应main中的路径
       * 默认: ['module', 'jsnext:main', 'jsnext','main']
       */
      mainFields: ['module', 'jsnext:main', 'jsnext','main'],

      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']

      /** preserveSymlinks
       * 启用此选项会使 Vite 通过原始文件路径（即不跟随符号链接的路径）而不是真正的文件路径（即跟随符号链接后的路径）确定文件身份
       * 默认: false
       */
      preserveSymlinks: false,

    }
    // css相关
    css: {
      /** modules
       * 配置 CSS modules 的行为。选项将被传递给 postcne-modules。
       * 一般都是外联样式 modules
       */
      modules: {}

      /**
       * 内联的 PostCSS 配置（格式同 postcss.config.js），或者一个（默认基于项目根目录的）自定义的 PostCSS 配置路径
       */
      postcss: string | (postcss.ProcessOptions & { plugins?: postcss.Plugin[] }),

      /**
       * 指定传递给 CSS 预处理器的选项。
       */
      preprocessorOptions: {
        scss: {
          additionalData: `$injectedColor: orange;`
        }
      }
    }
    // JSON相关
    json: {
      /** namedExports
       * 是否支持从 .json 文件中进行按名导入。
       * 默认: true
       */
      namedExports: true,

      /**
       * 若设置为 true，导入的 JSON 会被转换为 export default JSON.parse("...")
       * 默认: false
       */
      stringify: false,
    }
    // esbuild相关
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment', //以上为自定义JSX.
        // ESbuild会被应用在 ts、jsx、tsx 文件，以下选项对要处理的文件类型进行配置
        include: string | RegExp | (string | RegExp)[],
        exclude: string | RegExp | (string | RegExp)[],
        // 自动为每一个被 ESbuild 转换的文件注入内容
        jsxInject: `import React from 'react'`,
    }
    // server相关
    server: {
      /** host
       * 指定服务器应该监听哪个 IP 地址， 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址
       * 默认: '127.0.0.1'
       * 命令设置: --host 0.0.0.0 或 --host
       */
      host: '127.0.0.1',
      /** port
       * 指定开发服务器端口。注意: 如果端口已经被使用，Vite 会自动尝试下一个可用的端口，所以这可能不是开发服务器最终监听的实际端口
       * 默认: 3000
       */
      port: 3000,
      /** strictPort
       * 设为true时若端口已被占用则会直接退出，而不是尝试下一个可用端口
       * 默认: false
       * false 会尝试下一个可用端口, true 会直接退出
       */
      strictPort: false,
      /** https
       * 启用 TLS + HTTP/2。注意: 当 server.proxy 选项 也被使用时，将会仅使用 TLS。
       * 当为true: 启用 TLS + HTTP/2。注意: 当 server.proxy 选项 也被使用时，将会仅使用 TLS。
       * 这个值也可以是一个传递给 https.createServer() 的 选项对象
       * https://nodejs.org/api/https.html#httpscreateserveroptions-requestlistener
       */
      https: boolean | {},
      /** open 是否自动打开浏览器
       * 在开发服务器启动时自动在浏览器中打开应用程序。
       * '/docs/index.html'
       * 设置打开的浏览器: 设置环境变量 process.env.BROWSER='firefox'
       * open其他配置: https://github.com/sindresorhus/open#app
       */
      open: boolean | string,
      // 服务器代理
      proxy: {
        '/foo': 'http://localhost:4567',	字符串简写写法
        '/api': { // 以 ^ 开头，将会被解释为正则，如: '^/fallback/.*'
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
            configure: (proxy, options) => {
              // proxy 是 'http-proxy' 的实例
            }
          },
          '/socket.io': { // 代理 websockets or socket.io
            target: 'ws://localhost:3000',
            ws: true
          }
      }

      /** cors
       * 为开发服务器配置 CORS。
       * 传递一个 选项对象 来调整行为，https://github.com/expressjs/cors#configuration-options
       * 设置false表示禁用
       * 默认启用并允许任何源
       */
      cors: true,
      /** force
       * 依赖预构建
       * 设置为 true 强制使依赖预构建。
       */
      force: true,

      /** hmr -> 热更新相关
       * hmr: boolean | { protocol?: string, host?: string, port?: number, path?: string, timeout?: number, overlay?: boolean, clientPort?: number, server?: Server }
       * @protocol ?: string, @协议
       * @host ?: string, @域名
       * @port ?: number, @端口
       * @path ?: string, @路径
       * @timeout ?: number, 超时限制
       * @overlay ?: boolean, 为 false 可以禁用开发服务器错误的屏蔽 @服务器错误屏蔽
       * @clientPort ?: number, 只在客户端的情况下覆盖端口，这允许你为 websocket 提供不同的端口，而并非在客户端代码中查找。如果需要在 dev-server 情况下使用 SSL 代理，这非常有用。
       * @server ?: Server, 当使用 server.middlewareMode 或 server.https 时，你需将 server.hmr.server 指定为你 HTTP(S) 的服务器，这将通过你的服务器来处理 HMR 的安全连接请求。这在使用自签证书或想通过网络在某端口暴露 Vite 的情况下，非常有用。
       */
      hmr: {},

      /** middlewareMode 在SSR中使用
       * 以中间件模式创建 Vite 服务器
       */
      middlewareMode: 'ssr' | 'html'

      /**
       * 限制为工作区 root 路径以外的文件的访问
       * 默认: true
       */
      fs.strict: true

      // 限制哪些文件可以通过 /@fs/ 路径提供服务，Vite 将会搜索此根目录下潜在工作空间并作默认使用
      fs.allow: string[],

      // 用于限制 Vite 开发服务器提供敏感文件的黑名单。
      fs.deny: ['.env', '.env.*', '*.{pem,crt}'] // 此为默认值

      // 监听文件改变 ; 通过命令:vite build --watch 调用
      watch: {
        // 默认会忽略对 .git/ 和 node_modules/ 目录的监听,如果需要对 node_modules/ 内的包进行监听，
        // 可以为 server.watch.ignored 赋值一个取反的 glob 模式
        ignored: ['!**/node_modules/your-package-name/**'],
        // 其他选项: 使用的是rollup的选项配置:https://rollupjs.org/guide/en/#watch-options
      }
    }

    //
    /**
     * @optimizeDeps依赖优化相关
     * @entries 依赖入口点
     *          默认情况下，Vite 会抓取你的 index.html 来检测需要预构建的依赖项
     *          如果指定了 build.rollupOptions.input，Vite 将转而去抓取这些入口点
     *          指定自定义条目，该值需要遵循 fast-glob 模式
     * @exclude 被watch中手动设置监听的包必须被排除在优化之外，以便它能出现在依赖关系图中并触发热更新
     * @include 引入文件/模块
     *          默认情况下，不在 node_modules 中的，链接的包不会被预构建。使用此选项可强制预构建链接的包。
     *          应用场景: 一些第三方插件中的依赖不是node_modules中的并且也不是es module的格式
     * @esbuildOptions 构建配置
     *          在部署扫描和优化过程中传递给 esbuild 的选项。
     */
    optimizeDeps: {
      entries:
        entries: string | string[],
        exclude: ['your-package-name'],
        include: [],
        esbuildOptions: {},
      }

    // build构建相关
    build: {
      /** target
       * 设置最终构建的浏览器兼容目标
       * 默认: 'modules'	指支持原生 ES 模块的浏览器。
       * "esnext" : 即假设有原生动态导入支持，并且将会转译得尽可能小:
       * 如果 build.minify 选项为 'terser'， 'esnext' 将会强制降级为 'es2019'。
       * 其他情况下将完全不会执行转译。
       * 'es2015': 自定义目标也可以是一个 ES 版本
       * ["chrome58",...]: 一个浏览器版本或是多个目标组成的一个数组
       */
      target: string | string[],

      /** polyfillModulePreload
       * 用于决定是否自动注入 module preload 的 polyfill.
       * 默认值为true: 此 polyfill 会被自动注入到每个 index.html 入口的 proxy 模块中
       */
      polyfillModulePreload: boolean,

      /** outDir 输出目录
       * 指定输出路径（相对于 项目根目录).
       * 默认: dist
       */
      outDir: 'dist',

      /** assetsDir 资源目录
       * 指定生成静态资源的存放路径（相对于 buil
       * d.outDir）默认: assets
       */
      assetsDir: 'assets',

      /** assetsInlineLimit
       * 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。
       * 默认: 4096 (4kb)
       * 设置为 0 可以完全禁用此项。
       */
      assetsInlineLimit: 4096,

      /** cssCodeSplit
       * css代码分割
       * 默认: true，在异步 chunk 中导入的 CSS 将内联到异步 chunk 本身，并在其被加载时插入。
       * false: 整个项目中的所有 CSS 将被提取到一个 CSS 文件中
       */
      cssCodeSplit: true,

      // 允许用户为 CSS 的压缩设置一个不同的浏览器 target; 默认值和配置与target一致
      cssTarget: string | string[],

      /**
       * 构建后是否生成 source map 文件
       * 默认: false
       * true: 创建一个独立的 source map 文件
       * 'inline': source map 将作为一个 data URI 附加在输出文件中
       * 'hidden': 与 'true' 相似，只是 bundle 文件中相应的注释将不被保留
       */
      sourcemap: true,

      /**
       * 自定义的 Rollup 打包配置，并将与 Vite 的内部 Rollup 选项合并
       * https://rollupjs.org/guide/en/#big-list-of-options
       */
      rollupOptions: {},

      // 传递给 @rollup/plugin-commonjs 插件的选项。
      commonjsOptions: RollupCommonJSOptions,
      //传递给 @rollup/plugin-dynamic-import-vars 的选项。
      dynamicImportVarsOptions: RollupDynamicImportVarsOptions,

      // 打包库
      /**
       * @类型 { entry: string, name?: string, formats?: ('es' | 'cjs' | 'umd' | 'iife')[], fileName?: string | ((format: ModuleFormat) => string) }
       * @entry : string,
       * @name? : string, 	暴露的全局变量
       * @formats ?: ('es' | 'cjs' | 'umd' | 'iife')[], 	包含 'umd' 或 'iife' 时是必须的。默认 formats 是 ['es', 'umd']
       * @fileName ?: string | ((format: ModuleFormat) => string) 	输出的包文件名
       *          默认 fileName 是 package.json 的 name 选项
       */
      lib: {},

      /** manifest
       * 包含了没有被 hash 过的资源文件名和 hash 后版本的映射。
       * true: 包含了没有被 hash 过的资源文件名和 hash 后版本的映射。
       * 字符串: 作为 manifest 文件的名字
       */
      manifest: boolean | false,

      /** ssrManifest
       * 生成 SSR 的 manifest 文件，以确定生产中的样式链接与资产预加载指令
       * 配置和manifest一致
       */
      ssrManifest: boolean | false,

      /** ssr -> 生成面向 SSR 的构建
       * 默认: undefined
       * 字符串: 用于直接定义 SSR 的入口
       * true: 需要通过设置 rollupOptions.input 来指定 SSR 的入口
       */
      ssr: undefined,

      /** minify -> 压缩相关
       * 默认: 'esbuild'
       * false: 禁用
       * 'terser'
       * 在lib模式下使用 'es' 时，build.minify 选项将失效
       */
      minify: 'esbuild',
      terserOptions: {}, // 传递给 Terser 的更多 minify 选项。
      write: true, // 磁盘写入相关
      emptyOutDir: true, // 关闭警告
      reportCompressedSize: true, // 启用/禁用 gzip 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
      chunkSizeWarningLimit: 500, //chunk 大小警告的限制（以 kbs 为单位）
      watch: null, // 构建监听器
    }
    // 构建预览preview相关
    preview: {
      /** host
       * 为开发服务器指定 ip 地址，默认取server.host
       * 或 true: 监听所有地址，包括局域网和公共地址。
       * 通过命令: --host 0.0.0.0 或 --host
       */
      host: "0.0.0.0",
      port: "4173", // 指定开发服务器端口
      strictPort: string? | boolean?, // 默认取server.strictPort
      https: string? | boolean?, // 默认取server.https
      open: string? | boolean?, // 默认取server.openy
      proxy: string? | boolean?, // 默认取server.proxy
      cors: string? | boolean?, // 默认取server.cors
    }

    // SSR相关
    ssr: {
      external: [], // 为 SSR 强制外部化的依赖。
      noExternal: string | RegExp | (string | RegExp)[], // 防止被 SSR 外部化依赖项 true: 将没有依赖被外部化
      target: 'node',
        // SSR 服务器的构建目标。
        // 默认: 'node'
        // 'webworker'
    }

    // Worker相关
    worker: {
      format: 'iife', // worker bundle 的输出类型。
      plugins: [], // 适用于 worker bundle 的 Vite 插件。
      rollupOptions: {} , // 用于构建 worker bundle 的 Rollup 配置项
    }
  })
```
