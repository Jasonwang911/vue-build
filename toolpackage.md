## 插件

git cz
全局安装commitizen :  npm install -g commitizen
    设置支持angular格式的commit message : commitizen init cz-conventional-changelog —save-exact
    提交代码的时候使用： git cz

Type(scope): subject    （注意：冒号后面必须跟空格才能使用changelog工具）

    type有下面几个类型：

        Feat--新功能

        Fix--修复bug

        Style—代码格式 

        Refactor--代码重构

        Chore--项目构建（修改版本号等）
    scope：模块名称—代码的功能

    subject： 描述信息


commit最终生成的格式为： Feat[Login]:添加登录后保存token到vuex