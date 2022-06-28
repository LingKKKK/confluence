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
