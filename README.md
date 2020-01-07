# Backstage_Management_System

## 技术栈 Vue / Element-UI / Axios

### 项目依赖安装
```
npm install 
```

### 项目开发状态运行
```
npm run serve
```

### 项目打包
```
npm run build
```

### ESlint语法侦测
```
npm run lint
```

### Vue自定义配置源
详见 [Configuration Reference](https://cli.vuejs.org/config/).

## 1.项目目录

|-- node_modules                         项目依赖文件
|-- public  
    |-- favicon.ico                      项目Ico图标
    |-- index.html                       网页打包模板
|-- src  
    |-- assets  
        |-- css
            |-- global.css               全局CSS样式
            |-- normalize.css            网页重置样式  
        |-- images                       图片资源  
    |-- publicComponents
        |-- EchartsTemplate.vue          <echarts-template>Echarts数据表组件，详细API见下方公共组件介绍  
        |-- TimeSelect.Vue               <time-select>时间选择组件，详细API见下方公共组件介绍         
    |-- plugins  
        |-- element.js                   ElementUI插件配置  
    |-- router  
        |-- index.js                     路由配置  
    |-- views  
        |-- home  
            |-- operate  
            |-- economy  
            |-- battle  
            |-- gamesystem
                |-- NewerGuide.vue        新手引导  
            |-- gm  
            |-- querydata  
        |-- login  
            |-- login.vue                 登录页面
|-- App.vue                               主Vue文件
|-- main.js                               入口文件
    

## 2.公共组件API

#### 1. EchartsTemplate.vue Echarts表格
序号 |  属性名   |   数据类型   |       默认值      |             用途 
01.     title        String        '数据展示表格'       设置表格方框内的标题
02.     height       String            '600px'          设置表格的高度
03.     toolbox      Boolean            true            设置表格右上角工具栏是否可见
04.     tooltip      Boolean            true            设置是否显示数据根据鼠标移动进行提示
05.     xtest        Boolean            true            设置X轴名称是否可见
06.     xname        String           'X轴数据'         设置X轴名称（注：前提需要设置xtest属性为可见状态）
07.     xgap         Number              40             设置X轴名称距离X轴的距离
08.     xdata        Array               []             设置X轴的数据源
09.     ytest        Boolean            true            设置Y轴名称是否可见
10.     yname        String           'Y轴数据'         设置Y轴名称（注：前提需要设置ytest属性为可见状态）
11.     ygap         Number              40             设置Y轴名称距离X轴的距离
12.     ydata        Array               []             设置Y轴的数据源

注：ydata虽然数据类型定义为数组，但内部元素是对象，一个对象代表一个类型的数据，[如有两种类型的数据展示在图表中，则需写两个对象]，以此类推，常见配置举例如下：

  ydata: [
    {
      type: 'bar',              取值 bar | line | circle, 分别对应柱状图，折线图和饼状图
      color: '#f00',            数据在图标上展示的颜色
      barMaxWidth: 40,          柱状图时，每个柱条的最大宽度
      label: {
        show: true,             图表折线或柱状条上是否显示数值
        position: 'top'         数值显示位置
      }
      data: [22, 33, 44, 55]    Y轴数据源，数据类型为数组，[将请求到的数据赋值到此处即可],注意不是赋值到ydata,而是yada[0].data,[0]代表你的第一条数据
    }
  ]

[ydata对应Echarts的series选项]，更多series详细设置请见[Echarts官网](https://www.echartsjs.com/zh/)


#### 2. TimeSelect.vue 时间选择组件
该组件暂时没有可选API参数，但对外暴露一个[查询]按钮的点击事件[searchbtnclicked],该事件在组件内采用$emit发送，因此，只需在引用该组件的父组件内接收并重新赋值该事件即可对按钮的点击进行监控

