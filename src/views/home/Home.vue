<template>
  <div class="homeBox">
    <div class="header">
      <el-row type="flex" justify="space-between" align="center">
        <el-col :span="5" class="headerTitle">次元守望GM管理后台</el-col>
        <el-col :span="2" class="accountArea">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" size="small"></el-avatar>
          <i class="el-icon-arrow-down"></i>
          <div class="logoutArea">
            <ul>
              <li>修改密码</li>
              <li>退出系统</li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
.header{
  width: 100%;
  height: 50px;
  background-color: #00343F;
}
.header .headerTitle{
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 4px;
  line-height: 50px;
  margin-left: 20px;
}
.header .el-avatar{
  margin-top: 11px;
}
.header .el-icon-arrow-down{
  display: inline-block;
  line-height: 50px;
  color: #fff;
  vertical-align: top;
  margin: 0 10px;
}
.header .accountArea{
  padding-left: 15px;
  margin-right: 15px;
  cursor: pointer;
  position: relative;
  text-align: center;
}
.header .accountArea:hover{
  background-color: #012127;
}
.header .accountArea:hover .logoutArea{
  display: block;
}
.header .accountArea .logoutArea{
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
.header .accountArea .logoutArea ul li{
  line-height: 30px;
  letter-spacing: 1px;
}
.header .accountArea .logoutArea ul li:hover{
  background-color: #035A69;
  color: #fff;
}
</style>
