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
        |-- GuildInfoPanel.vue           <guild-info-panel>公会面板组件，详细API见下方公共组件介绍           
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
                |-- CoreArmor.vue         核芯装备
                |-- GameSystem.Vue        游戏系统
                |-- Heros.Vue             游戏英雄
                |-- 
            |-- gm  
            |-- querydata  
        |-- login  
            |-- login.vue                 登录页面
|-- App.vue                               主Vue文件
|-- main.js                               入口文件
    

## 2.公共组件API

#### 1. EchartsBox.vue Echarts表格外框
序号 |  属性名   |   数据类型   |       默认值      |             用途 
01.     title        String        '数据展示表格'       设置表格方框内的标题
02.     xname        String           'X轴数据'         设置X轴名称（注：前提需要设置xtest属性为可见状态）
03.     xgap         Number              40             设置X轴名称距离X轴的距离（暂未设置）
04.     yname        String           'Y轴数据'         设置Y轴名称（注：前提需要设置ytest属性为可见状态）
05.     ygap         Number              40             设置Y轴名称距离X轴的距离（暂未设置）

注1：此模板仅为包裹Echarts的外层样式，如需要引进Echarts，需要在组件中插入一个容器（组件中已预留一个默认插槽），并在父组件中初始化容器为Echarts实例。同时，组件内储存了一个常见Echarts配置[echartsCommonOption],在每个引入该组件的父组件中，只需要在Mounted函数中通过[this.$refs.instanceRef.echartsCommonOption]拿到并赋值到父组件本地data中作为一个变量保存即可。这样可以精简每个父组件的页面代码。然后根据需求，动态修改本地存储的这个配置中的数据和其他选项就可以完成表格渲染。

注2：由于子组件中存储的[echartsCommonOption]中，用于渲染Y轴数据的[series]属性默认只有一条数据，如果表格要同时渲染多条数据，需要在父组件的data中额外增加一个对象，然后在数据请求时，将这条添加的对象，插入到你本地保存的配置变量的[series]属性中即可，它是一个数组，所以可以通过series[1] = [你额外添加的对象]，因为[0]已默认存在。如果有多条，就增加多个对象，然后插入。对象模板举例如下：

    {
      type: 'bar',              取值 bar | line | circle, 分别对应柱状图，折线图和饼状图
      color: '#f00',            数据在图标上展示的颜色
      barMaxWidth: 40,          柱状图时，每个柱条的最大宽度
      label: {
        show: true,             图表折线或柱状条上是否显示数值
        position: 'top'         数值显示位置
      }
      data: [22, 33, 44, 55]    Y轴数据源，数据类型为数组
    }

[Echarts的series选项]，更多series详细设置请见[Echarts官网](https://www.echartsjs.com/zh/)


#### 2. TimeSelect.vue 时间选择组件
该组件暂时没有可选API参数，但对外暴露一个[查询]按钮的点击事件[searchbtnclicked],该事件在组件内采用$emit发送，因此，只需在引用该组件的父组件内接收该事件即可对按钮的点击进行监控


#### 3. GuildInfoPanel.vue 公会信息面板组件
序号 |  属性名   |     数据类型       |       默认值      |             用途 
01.     title               String            '标题'           设置面板数据标题
02.     panelData           Number              0              面板展示的数据
03.     panelHeight         String            '100px'          设置面板的高度
04.     panelIconClass      String     'el-icon-user-solid'    设置面板图标的类名
05.     bgColor             String           '#009999'         设置面板的背景颜色
06.     barColor            String           '#337AB7'         设置进度条颜色
07.     barPercentage       Number              0              设置进度条的百分比值
