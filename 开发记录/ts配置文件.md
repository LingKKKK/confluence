# 示例

按需引入配置

```json tsconfig.json
  {
    // 编译选项
    "compilerOptions": {
      // 生成代码的语言版本：将我们写的 TS 代码编译成哪个版本的 JS 代码
      // 命令行： tsc --target es5 11-测试TS配置文件.ts
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "target": "ES6",
      // 允许通过 import x from 'y' 即使模块没有显式指定 default 导出
      "allowSyntheticDefaultImports": true,
      // 开启严格模式
      "strict": true,
      // 对文件名称强制区分大小写
      "forceConsistentCasingInFileNames": true,
      // 为 switch 语句启用错误报告
      "noFallthroughCasesInSwitch": true,
      // 允许 ts 编译器编译 js 文件
      "allowJs": true,
      "outDir": "./dist/",
      "types": ["vite/client", "node"],
      // 允许导入扩展名为.json的模块
      "resolveJsonModule": true,
      // es 模块 互操作，屏蔽 ESModule 和 CommonJS 之间的差异
      "esModuleInterop": true,
      "noImplicitAny": false,
      "sourceMap": true,
      // 生成代码的模块化标准
      "module": "esnext",
      // 模块解析（查找）策略
      "moduleResolution": "node",
      // 是否将没有 import/export 的文件视为旧（全局而非模块化）脚本文件
      "isolatedModules": true,
      // 编译时不生成任何文件（只进行类型检查）
      "noEmit": true,
      "importHelpers": true,
      // 指定要包含在编译中的 library
      "lib": ["esnext", "dom", "dom.iterable"],
      // 跳过类型声明文件的类型检查
      "skipLibCheck": true,
      // 指定将 JSX 编译成什么形式
      "jsx": "react-jsx", // 这里编译成 react 和 react-jsx 都可以
      "typeRoots": ["node", "node_modules/@types", "./typings"],
      "rootDirs": ["./src"],
      "baseUrl": "./src",
      "paths": {
        "@/*": ["*"],
        "@assets/*": ["assets/*"],
        "@components/*": ["components/*"],
        "@locales/*": ["locales/*"],
        "@mock/*": ["mock/*"],
        "@pages/*": ["pages/*"],
        "@mobx/*": ["mobx/*"],
        "@utils/*": ["utils/*"],
        "@servers/*": ["servers/*"]
      }
    },
    // 指定允许 ts 处理的目录
    "include": ["./src/**/*", "./declaration.d.ts"],
    "exclude": ["node_modules"]
  }
```
