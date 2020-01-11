import Mock from 'mockjs'

// 新手引导数据
// Mock.mock('/api/gadminc/business/guideData.json', {
//   'nameList|13': ['@cword(2,5)'],
//   'numList|13': ['@integer(300,3000)']
// })

// 游戏英雄数据
// Mock.mock('/api/gadminc/business/hero.json', {
//   'herosData|20': [{
//     'name': '@cname(2, 4)',
//     'avgLevel': '@integer(1,60)',
//     'avgStar': '@integer(1,7)',
//     'ordinarySkill': '@integer(1,6)',
//     'activeSkill': '@integer(1,6)',
//     'passiveSkill': '@integer(1,6)',
//     'weaponLevel': '@integer(1,60)',
//     'mainStory': '@integer(1,20000)',
//     'voidCrack': '@integer(1,10000)',
//     'sportsLadder': '@integer(1,2000)',
//     'arenaTrain': '@integer(1,3000)',
//     'rank': '@integer(1,10)'
//   }]
// })

// 任务系统数据
// Mock.mock('/api/gadminc/business/system.json', {
//   'missionList|4': ['@integer(200,1500)'],
//   'callList|7': ['@integer(200,1500)'],
//   'heroList|8': ['@integer(200,1500)'],
//   'otherList|4': ['@integer(200,1500)']
// })

// 战队信息数据
// Mock.mock('/api/gadminc/business/combatTeam.json', {
//   'guildinfo': {
//     'avgTeamLevel': '@integer(1,5)',
//     'avgTeamUserAmount': '@integer(20,50)',
//     'joinAmount': '@integer(100,300)',
//     'notJoinAmount': '@integer(2000,3000)',
//     'combatTeamLevelList|2': [{
//       'level': '@integer(1,5)',
//       'num': '@integer(2,5)'
//     }]
//   }
// })

// 战队活动数据
// Mock.mock('/api/gadminc/business/combatTeamMission.json', {
//   'activeTimes|3': [{
//     'id|+1': 0,
//     'times|25': ['@integer(50,100)']
//   }],
//   'daList|25': ['@date(yyyy-MM-dd)'],
//   'missionTimes|3': [{
//     'id|+1': 0,
//     'times|25': ['@integer(50,100)']
//   }],
//   'repayTimes|3': [{
//     'id|+1': 0,
//     'times|25': ['@integer(50,100)']
//   }]
// })

// 基地设施数据
// Mock.mock('/api/gadminc/business/basement.json', {
//   'baseBuilding|5': [{
//     'level|+1': 0,
//     'avgCentral': '@integer(2000,3000)',
//     'avgDormitory': '@integer(2000,3000)',
//     'avgElectric': '@integer(2000,3000)',
//     'avgEngine': '@integer(2000,3000)',
//     'avgResearch': '@integer(2000,3000)',
//     'avgSupport': '@integer(2000,3000)'
//   }]
// })

// 竞技场数据
// Mock.mock('/api/gadminc/business/arena.json', {
//   'atavgList|15': ['@integer(10,30)'],
//   'atcountList|15': ['@integer(10,30)'],
//   'atmemberList|15': ['@integer(10,30)'],
//   'slavgList|15': ['@integer(10,30)'],
//   'slcountList|15': ['@integer(10,30)'],
//   'slmemberList|15': ['@integer(10,30)'],
//   'dateList|15': ['@date(yyyy-MM-dd)']
// })

// 主线剧情数据
// Mock.mock('/api/gadminc/business/mainStory.json', {
//   'avgCount': {
//     'nameList|20': ['@cname(2,4)'],
//     'numList|20': ['@integer(10,200)']
//   },
//   'playerCount': {
//     'nameList|20': ['@cname(2,4)'],
//     'numList|20': ['@integer(10,200)']
//   },
//   'storyTotal': {
//     'nameList|20': ['@cname(2,4)'],
//     'numList|20': ['@integer(10,200)']
//   }
// })

// 天启大战数据
// Mock.mock('/api/gadminc/business/apocalypse.json', {
//   'playerCount': {
//     'nameList|20': ['@cname(2,4)'],
//     'numList|20': ['@integer(10,200)']
//   },
//   'storyTotal': {
//     'nameList|20': ['@cname(2,4)'],
//     'numList|20': ['@integer(10,200)']
//   }
// })

// 虚空秘境数据
// Mock.mock('/api/gadminc/business/resStage.json', {
//   'playerCount': {
//     'nameList|20': ['@cname(2,4)'],
//     'numList|20': ['@integer(10,200)']
//   },
//   'storyTotal': {
//     'nameList|20': ['@cname(2,4)'],
//     'numList|20': ['@integer(10,200)']
//   }
// })

// 时空裂隙数据
// Mock.mock('/api/gadminc/business/spaceTime.json', {
//   'playerCount': {
//     'nameList|6': ['@cname(2,4)'],
//     'numList|6': ['@integer(10,200)']
//   },
//   'storyTotal': {
//     'nameList|6': ['@cname(2,4)'],
//     'numList|6': ['@integer(10,200)'],
//     'finishList|6': ['@integer(10,200)']
//   }
// })

// 游戏商店数据
Mock.mock('/api/gadminc/business/shopBuyItem.json', {
  'arenaTrain': {
    'nameList|7': ['@cname(2,4)'],
    'numList|7': ['@integer(10,200)']
  },
  'ordinary': {
    'nameList|35': ['@cname(2,4)'],
    'numList|35': ['@integer(10,200)']
  },
  'sportsLadder': {
    'nameList|7': ['@cname(2,4)'],
    'numList|7': ['@integer(10,200)']
  }
})

// 金币系统数据
Mock.mock('/api/gadminc/business/coinHandle.json', {
  'dList|15': ['@date(yyyy-MM-dd)'],
  'numList|15': ['@integer(300,1000)'],
  'mailReward': '@integer(30,100)',
  'missionReward': '@integer(50,100)',
  'activityReward': '@integer(20,100)',
  'mainPlot': '@integer(50,100)',
  'secretTerritory': '@integer(50,100)',
  'shopBuy': '@integer(10,100)',
  'heroSkill': '@integer(10,100)',
  'weapon': '@integer(10,100)',
  'coreUpgrade': '@integer(10,100)',
  'coreRecast': '@integer(10,100)',
  'shopSpent': '@integer(10,100)',
  'dailyBox': '@integer(10,100)',
  'dailyMission': '@integer(10,100)',
  'achivementMission': '@integer(10,100)',
  'mainMission': '@integer(10,100)',
  'systemProvide': '@integer(10,100)',
  'sportsLadder': '@integer(10,100)',
  'arenaTrain': '@integer(10,100)',
  'mailElse': '@integer(10,100)',
  'sevenDayActivity': '@integer(10,100)',
  'exchangeActivity': '@integer(10,100)'
})

// 钻石系统数据
Mock.mock('/api/gadminc/business/diamondHandle.json', {
  'dList|15': ['@date(yyyy-MM-dd)'],
  'numList|15': ['@integer(300,1000)'],
  'mailReward': '@integer(30,100)',
  'missionReward': '@integer(50,100)',
  'activityReward': '@integer(20,100)',
  'mainPlot': '@integer(50,100)',
  'secretTerritory': '@integer(50,100)',
  'shopBuy': '@integer(10,100)',
  'heroSkill': '@integer(10,100)',
  'weapon': '@integer(10,100)',
  'coreUpgrade': '@integer(10,100)',
  'coreRecast': '@integer(10,100)',
  'shopSpent': '@integer(10,100)',
  'dailyBox': '@integer(10,100)',
  'dailyMission': '@integer(10,100)',
  'achivementMission': '@integer(10,100)',
  'mainMission': '@integer(10,100)',
  'systemProvide': '@integer(10,100)',
  'sportsLadder': '@integer(10,100)',
  'arenaTrain': '@integer(10,100)',
  'mailElse': '@integer(10,100)',
  'sevenDayActivity': '@integer(10,100)',
  'exchangeActivity': '@integer(10,100)',
  'recruitHero': '@integer(10,100)',
  'recruitProp': '@integer(10,100)',
  'strengthExchange': '@integer(10,100)',
  'buyTrain': '@integer(10,100)',
  'shopBuyCost': '@integer(10,100)'
})

// 新增用户数据
Mock.mock('/api/gadminc/business/userIncreased.json', {
  'loginList|25': ['@integer(10,200)'],
  'daList|25': ['@date(yyyy-MM-dd)'],
  'numList|25': ['@integer(10,200)'],
  'sevenDayReg': '@integer(50,200)',
  'threeDayReg': '@integer(50,200)',
  'thrityDayReg': '@integer(50,200)',
  'todayReg': '@integer(50,200)',
  'totalReg': '@integer(50,200)'
})

// 实时在线数据
Mock.mock('/api/gadminc/business/onlineData.json', {
  'dateList|25': ['@date(yyyy-MM-dd)'],
  'numList|25': ['@integer(10,200)'],
  'avgTime': '@integer(50,200)',
  'onlineAvgNum': '@integer(1,5)',
  'onlineMaxNum': '@integer(50,200)',
  'onlineNum': '@integer(50,200)'
})

// 次日留存数据
Mock.mock('/api/gadminc/business/yesterdayLoseKeep.json', {
  'dateList|10': ['@date(yyyy-MM-dd)'],
  'addList|10': ['@integer(10,200)'],
  'keepList|10': ['@integer(50,200)']
})

// 活跃用户数据
Mock.mock('/api/gadminc/business/activeUser.json', {
  'daList|30': ['@date(yyyy-MM-dd)'],
  'actList|30': ['@integer(10,200)'],
  'accumulateList|30': ['@integer(50,200)'],
  'levelList|80': ['@integer(1,80)'],
  'loyalUserList|30': ['@integer(50,200)'],
  'numList|80': ['@integer(50,200)'],
  'actOne': '@integer(50,200)',
  'actSeven': '@integer(50,200)',
  'actThirty': '@integer(50,200)'
})

// GM操作服务器列表数据
Mock.mock('/api/gadminc/server/listServers.json', {
  'serverList': [{
    'id': 1,
    'serverId': 1,
    'name': '106.52.104.153',
    'serviceURLPrefix': 'http://106.52.104.153:8280',
    'description': '外网'
  }]
})
