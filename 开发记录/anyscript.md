# 全局声明
运行机制
[参考: Global augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)

## 关于 xxx.ts 和 xxx.d.ts 中类型区别
在`ts`文件中声明,仅可以在本文件的`namespace`中生效. 使用`declare global`可以定义全局的类型.
在`d.ts`声明文件中,任何`declare`默认都是`global`的了.
所以在`d.ts`文件中,是不能出现`declare global`的, 只有在`ts`模块中,才能使用全局定义`declare global`.

# 如何将类型打印?
[参考](https://zhuanlan.zhihu.com/p/531376648)
