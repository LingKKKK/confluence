
# 初衷
基于react全家桶,搭建一套知识库框架,内容可参考confluence,语雀,知乎等知识库.
选择react的原因: react向下兼容性更高,更加灵活,更加方便.

# 目标
一.产出一套基于react全家桶的脚手架工具,让团队更加方便使用.
二.实现一套成熟的知识库工具,可以为网盘赋能.
三.将每个知识库下的工具以插件的形式进行开源,为前端社区添砖加瓦.

# 架构分析
需要在最初的几个commit版本中预演调研,尽量让架构更加简洁.
初步的调研方向是: 使用create-react-app初始化框架,然后将所需插件按需引入;
* ts react(17/18) react-router(4/5/6) redux/mobx antd eslint test mock vite pnpm
