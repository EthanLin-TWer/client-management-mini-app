const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
  },

  navigateToVisitLogs: function() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },

  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    }
  },

  onUserInfoReceived: function({ detail: { userInfo } }) {
    app.globalData.userInfo = userInfo
    this.setData({
      userInfo,
      hasUserInfo: true,
    })
  },
})
