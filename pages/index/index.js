const app = getApp()

Page({
  data: {},

  onLoad: function() {
    if (app.globalData.userInfo) {
      // jump to specific page
    }
  },

  onUserInfoReceived: function({ detail: { errMsg, userInfo } }) {
    if (!errMsg.includes('ok')) {
      console.log('Login error', errMsg)
      return
    }

    app.globalData.userInfo = userInfo
    if (userInfo.nickName === '林燕玲') {
      return wx.navigateTo({
        url: '../manager/index',
      })
    }

    return wx.navigateTo({
      url: '../logs/logs',
    })
  },
})
