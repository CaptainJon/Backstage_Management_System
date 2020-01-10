<template>
  <div class="sendBonusBox">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>GM操作</el-breadcrumb-item>
      <el-breadcrumb-item>奖励发放</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-radio-group size="small" v-model="sendBonusFormPanel" fill="#337AB7" text-color="#fff">
        <el-radio-button label="sendMail">邮件发放</el-radio-button>
        <el-radio-button label="unlockDungeon">关卡解锁</el-radio-button>
        <el-radio-button label="addExp">增加经验</el-radio-button>
        <el-radio-button label="resourceHotLoad">资源热加载</el-radio-button>
      </el-radio-group>
      <!-- 邮件发放 -->
      <el-form
        :model="sendEmailForm"
        label-width="70px"
        size="small"
        v-show="sendBonusFormPanel === 'sendMail'"
        ref="sendEmailFormRef"
      >
        <el-form-item label="起始时间" prop="startTime">
          <el-date-picker placeholder="选择起始时间" type="datetime" v-model="sendEmailForm.startTime"></el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间" prop="endTime">
          <el-date-picker placeholder="选择结束时间" type="datetime" v-model="sendEmailForm.endTime"></el-date-picker>
        </el-form-item>
        <el-form-item label="服务器" prop="serverId">
          <el-select placeholder="请选择服务器" v-model="sendEmailForm.serverId">
            <el-option
              :key="item.id"
              :label="item.description"
              :value="item.id"
              v-for="item in serverListData"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="目标ID" prop="tagId">
          <el-input clearable placeholder="填写'0'为全服发送，大于0则发送给指定ID玩家" v-model="sendEmailForm.tagId"></el-input>
        </el-form-item>
        <el-form-item label="邮件标题" prop="mailTitle">
          <el-input clearable placeholder="请输入标题" v-model="sendEmailForm.mailTitle"></el-input>
        </el-form-item>
        <el-form-item label="邮件内容" prop="mailContent">
          <el-input
            placeholder="请输入内容"
            rows="5"
            type="textarea"
            v-model="sendEmailForm.mailContent"
          ></el-input>
        </el-form-item>
        <el-form-item label="道具列表" prop="bonusStr">
          <el-input clearable placeholder="格式：道具ID,数量 | 道具ID,数量" v-model="sendEmailForm.bonusStr"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-check" size="mini" type="primary">提交</el-button>
          <el-button icon="el-icon-refresh-left" size="mini" type="danger" @click="resetForm('sendEmailFormRef')">重置</el-button>
        </el-form-item>
      </el-form>
      <!-- 关卡解锁 -->
      <el-form
        :model="unlockDungeonForm"
        label-width="70px"
        size="small"
        v-show="sendBonusFormPanel === 'unlockDungeon'"
        ref="unlockDungeonFormRef"
      >
        <el-form-item label="服务器" prop="serverId">
          <el-select placeholder="请选择服务器" v-model="unlockDungeonForm.serverId">
            <el-option
              :key="item.id"
              :label="item.description"
              :value="item.id"
              v-for="item in serverListData"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="玩家ID" prop="userId">
          <el-input clearable placeholder="请输入玩家ID" v-model="unlockDungeonForm.userId"></el-input>
        </el-form-item>
        <el-form-item label="关卡ID" prop="bonusNum">
          <el-input clearable placeholder="请输入关卡ID" v-model="unlockDungeonForm.bonusNum"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-check" size="mini" type="primary">提交</el-button>
          <el-button icon="el-icon-refresh-left" size="mini" type="danger" @click="resetForm('unlockDungeonFormRef')">重置</el-button>
        </el-form-item>
      </el-form>
      <!-- 增加经验 -->
      <el-form
        :model="addExpForm"
        label-width="70px"
        size="small"
        v-show="sendBonusFormPanel === 'addExp'"
        ref="addExpFormRef"
      >
        <el-form-item label="服务器" prop="serverId">
          <el-select placeholder="请选择服务器" v-model="addExpForm.serverId">
            <el-option
              :key="item.id"
              :label="item.description"
              :value="item.id"
              v-for="item in serverListData"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="玩家ID" prop="userId">
          <el-input clearable placeholder="请输入玩家ID" v-model="addExpForm.userId"></el-input>
        </el-form-item>
        <el-form-item label="经验值" prop="bonusNum">
          <el-input clearable placeholder="请输入经验值" v-model="addExpForm.bonusNum"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-check" size="mini" type="primary">提交</el-button>
          <el-button icon="el-icon-refresh-left" size="mini" type="danger" @click="resetForm('addExpFormRef')">重置</el-button>
        </el-form-item>
      </el-form>
      <!-- 资源热加载 -->
      <el-form
        :model="resourceHotLoadForm"
        label-width="70px"
        size="small"
        v-show="sendBonusFormPanel === 'resourceHotLoad'"
        ref="resourceHotLoadFormRef"
      >
        <el-form-item label="服务器" prop="serverId">
          <el-select placeholder="请选择服务器" v-model="resourceHotLoadForm.serverId">
            <el-option
              :key="item.id"
              :label="item.description"
              :value="item.id"
              v-for="item in serverListData"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-check" size="mini" type="primary">提交</el-button>
          <el-button icon="el-icon-refresh-left" size="mini" type="danger" @click="resetForm('resourceHotLoadFormRef')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sendBonusFormPanel: 'sendMail',
      sendEmailForm: {
        startTime: '',
        endTime: '',
        serverId: null,
        tagId: null,
        mailTitle: '',
        mailContent: '',
        bonusStr: ''
      },
      unlockDungeonForm: {
        serverId: null,
        userId: null,
        bonusNum: null
      },
      addExpForm: {
        serverId: null,
        userId: null,
        bonusNum: null
      },
      resourceHotLoadForm: {
        serverId: null
      },
      serverListData: []
    }
  },
  created() {
    // 获取服务器数据
    this.getServerListData()
  },
  methods: {
    // 服务器数据获取
    getServerListData() {
      this.$http.get('/api/gadminc/server/listServers.json').then(res => {
        this.serverListData = res.data.serverList
      })
    },
    // 表单重置
    resetForm(formref) {
      this.$refs[formref].resetFields()
    }
  }
}
</script>

<style>
.sendBonusBox .el-date-editor .el-input {
  width: 500px;
}
.sendBonusBox .el-input {
  width: 500px;
}
.sendBonusBox .el-textarea {
  width: 500px;
}
</style>
