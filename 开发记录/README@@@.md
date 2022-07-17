# 需要集成的内容

1.登录模块 -> ITcode | 网盘账号
2.RBAC
3.侧边栏管理 -> md5&base64&动态
4.主内容区
  收藏功能
  分享功能
  通知功能 -> @用户 ws://
  其他操作 -> 查看附件/查看历史/查看权限(默认开放,具有操作能力)/空间管理(拖拽,导出等)
  页面展示模块 -> 提供展示和编辑两种状态

# web端架构
  一 暂不考虑兼容性
  二 框架选择： React 全家桶 vs Vue2/3 全家桶

  展示的内容可以以组件的形式展示在页面中
    以下插件都是基于React来实现的：
      markdown: https://www.npmjs.com/package/react-markdown
      table: https://www.npmjs.com/package/react-table
      流程图: https://www.npmjs.com/package/ysp-gg-editor
      日程管理： https://www.npmjs.com/package/katoto-big-calendar
    还有一些可以自定义的组件:
      @某人
      自定义label标签的颜色和文字
      目录结构展示（仅展示，不做编辑处理）

  要考虑每个组件的模型，组件之间如何通信，数据如何进行保存

# 其他

考虑如何和网盘/ActionView打通?

1. 登录框样式优化
2. 顶部导航和侧边栏以及各类操作按钮样式统一

# 任务排期

  sprint1
    页面布局
    标题
    文本编辑
  sprint2
    markdown(代码块)
  sprint3
    媒体
    分栏 layout
  sprint4
    server端数据存储
  sprint5
    表格 table
  sprint6
    登录 (IT Code + 消息提醒)

```
  7.18~7.22计划:
    1.更新json2dom算法 >> 将json快速渲染到页面中.
    2.更新dom2json算法 >> 将dom快速转换成json格式.
    3.劫持回车按钮,利用dom2json方法,将当前光标所在的行进行格式化记录.
    4.根据当前的内容,分割上下行的内容
    5.事件中心搭建,满足简单的文本编辑
```


# 编辑和展示页面应该如何切换
展示的时候,可以按照当前的布局进行展示
编辑的时候,将视图区域占满,不展示侧边栏和顶部区域

# 集成

微前端是前端架构设计思路,本质上就是运行时的远程加载应用.

微前端:
  编译时构建 micro-app/qiankun
    将第三方库中的组件作为包,在构建时引入依赖
  运行时构建 iframe
    一次加载或通过延时加载动态引入到应用程序中.可独立构建独立部署测试.

webpack5 federation 也支持微前端的配置.
