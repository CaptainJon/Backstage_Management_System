<template>
  <div class="homeBox">
    <el-container class="homeContainer">
      <!-- 顶部栏 -->
      <el-header>
        <el-row align="center" justify="space-between" type="flex">
          <el-col :span="5" class="headerTitle">次元守望GM管理后台</el-col>
          <el-col :span="2" class="accountArea">
            <el-avatar
              size="small"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
            <i class="el-icon-arrow-down"></i>
            <div class="logoutArea">
              <ul>
                <li>修改密码</li>
                <li>退出系统</li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <!-- 左侧导航栏 -->
        <el-aside>
          <el-menu background-color="#fff" router text-color="#333" unique-opened>
            <el-submenu index="0">
              <template slot="title">
                <i class="el-icon-cpu"></i>
                <span>游戏系统</span>
              </template>
              <el-menu-item index="newerguide">新手引导</el-menu-item>
              <el-menu-item index="heros">游戏英雄</el-menu-item>
              <el-menu-item index="gamesystem">系统功能</el-menu-item>
              <el-menu-item index="corearmor">核芯装备</el-menu-item>
              <el-menu-item index="guildinfo">战队信息</el-menu-item>
              <el-menu-item index="guildevent">战队活动</el-menu-item>
              <el-menu-item index="basebuilding">基地设施</el-menu-item>
            </el-submenu>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-coordinate"></i>
                <span>战斗系统</span>
              </template>
              <el-menu-item index="arena">竞技场</el-menu-item>
              <el-menu-item index="mainstory">主线剧情</el-menu-item>
              <el-menu-item index="apocalypse">天启大战</el-menu-item>
              <el-menu-item index="hardcore">虚空秘境</el-menu-item>
              <el-menu-item index="spacerift">时空裂隙</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-goods"></i>
                <span>经济系统</span>
              </template>
              <el-menu-item index="gamestore">游戏商店</el-menu-item>
              <el-menu-item index="coins">金币系统</el-menu-item>
              <el-menu-item index="diamonds">晶体钻石</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-data"></i>
                <span>运营数据</span>
              </template>
              <el-menu-item index="newplayer">新增用户</el-menu-item>
              <el-menu-item index="onlinecalc">在线统计</el-menu-item>
              <el-menu-item index="nextsaving">次日留存</el-menu-item>
              <el-menu-item index="activeplayer">活跃用户</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span>GM操作</span>
              </template>
              <el-menu-item index="sendbonus">奖励发放</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-search"></i>
                <span>数据查询</span>
              </template>
              <el-menu-item index="behavelog">行为日志</el-menu-item>
              <el-menu-item index="playermobile">用户机型</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 内容区域 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
.homeBox {
  height: 100%;
}
.homeBox .homeContainer {
  height: 100%;
}
.homeBox .el-header {
  background-color: #00343f;
  height: 50px !important;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
}
.homeBox .el-aside {
  background-color: #fff;
  width: 170px !important;
  border-right: 1px solid #ddd;
  transition: all 0.5s;
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
}
.homeBox .el-aside .el-menu {
  width: 169px !important;
  box-sizing: border-box;
  border-right: none;
}
.el-menu .el-submenu .el-menu-item {
  height: 35px;
  line-height: 35px;
  box-sizing: border-box;
  min-width: 0;
  border-bottom: none !important;
}
.homeBox .el-aside .el-menu li {
  border-bottom: 1px solid #e5e5e5;
}
.homeBox .el-aside .el-menu .el-submenu__title {
  height: 35px;
  line-height: 35px;
}
.homeBox .el-aside .el-menu .el-submenu__title i {
  color: #00343f;
}
.homeBox .el-aside .el-menu .el-submenu__title:hover {
  background-color: #fff !important;
  color: #148cf1 !important;
}
.homeBox .el-main {
  background-color: #eaedf1;
  position: fixed;
  left: 170px;
  top: 50px;
  right: 0;
  bottom: 0;
}
.homeBox .el-header .headerTitle {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 4px;
  line-height: 50px;
  margin-left: 20px;
}
.homeBox .el-header .el-avatar {
  margin-top: 11px;
}
.homeBox .el-header .el-icon-arrow-down {
  display: inline-block;
  line-height: 50px;
  color: #fff;
  vertical-align: top;
  margin: 0 10px;
}
.homeBox .el-header .accountArea {
  padding-left: 15px;
  margin-right: 15px;
  cursor: pointer;
  position: relative;
  text-align: center;
}
.homeBox .el-header .accountArea:hover {
  background-color: #012127;
}
.homeBox .el-header .accountArea:hover .logoutArea {
  display: block;
}
.homeBox .el-header .accountArea .logoutArea {
  width: 160px;
  text-align: center;
  position: absolute;
  left: 0;
  top: 50px;
  font-size: 14px;
  box-sizing: border-box;
  border: 1px solid #999;
  border-top: 0;
  border-radius: 0 0 5px 5px;
  display: none;
}
.homeBox .el-header .accountArea .logoutArea ul li {
  line-height: 30px;
  letter-spacing: 1px;
}
.homeBox .el-header .accountArea .logoutArea ul li:hover {
  background-color: #035a69;
  color: #fff;
}
.el-menu-vertical-demo {
  width: 180px;
}
.el-menu-vertical-demo .el-menu-item {
  width: 180px;
  min-width: 180px !important;
}
</style>
