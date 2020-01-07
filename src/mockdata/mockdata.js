import Mock from 'mockjs'

// 新手引导数据
Mock.mock('/api/gadminc/business/guideData.json', {
  'nameList|13': ['@cword(2,5)'],
  'numList|13': ['@integer(300,3000)']
})

// 游戏英雄数据
Mock.mock('/api/gadminc/business/hero.json', {
  'herosData|20': [{
    'name': '@cname(2, 4)',
    'avgLevel': '@integer(1,60)',
    'avgStar': '@integer(1,7)',
    'ordinarySkill': '@integer(1,6)',
    'activeSkill': '@integer(1,6)',
    'passiveSkill': '@integer(1,6)',
    'weaponLevel': '@integer(1,60)',
    'mainStory': '@integer(1,20000)',
    'voidCrack': '@integer(1,10000)',
    'sportsLadder': '@integer(1,2000)',
    'arenaTrain': '@integer(1,3000)',
    'rank': '@integer(1,10)'
  }]
})

// 任务系统数据
Mock.mock('/api/gadminc/business/system.json', {
  'missionList|4': ['@integer(200,1500)'],
  'callList|7': ['@integer(200,1500)'],
  'heroList|8': ['@integer(200,1500)'],
  'otherList|4': ['@integer(200,1500)']
})

// 战队信息数据
Mock.mock('/api/gadminc/business/combatTeam.json', {
  'guildinfo': {
    'avgTeamLevel': '@integer(1,5)',
    'avgTeamUserAmount': '@integer(20,50)',
    'joinAmount': '@integer(100,300)',
    'notJoinAmount': '@integer(2000,3000)',
    'combatTeamLevelList|2': [{
      'level': '@integer(1,5)',
      'num': '@integer(2,5)'
    }]
  }
})

// 战队活动数据
Mock.mock('/api/gadminc/business/combatTeamMission.json', {
  'activeTimes|3': [{
    'id|+1': 0,
    'times|35': ['@integer(50,100)']
  }],
  'daList|35': ['@date(yyyy-MM-dd)'],
  'missionTimes|8': [{
    'id|+1': 0,
    'times|35': ['@integer(50,100)']
  }],
  'repayTimes|4': [{
    'id|+1': 0,
    'times|35': ['@integer(50,100)']
  }]
})

// 基地设施数据
Mock.mock('/api/gadminc/business/basement.json', {
  'baseBuilding|5': [{
    'level|+1': 0,
    'avgCentral': '@integer(2000,3000)',
    'avgDormitory': '@integer(2000,3000)',
    'avgElectric': '@integer(2000,3000)',
    'avgEngine': '@integer(2000,3000)',
    'avgResearch': '@integer(2000,3000)',
    'avgSupport': '@integer(2000,3000)'
  }]
})
