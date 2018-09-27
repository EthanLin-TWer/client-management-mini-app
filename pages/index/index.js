const app = getApp()

Page({
  data: { },

  onLoad: function() {
    if (app.globalData.userInfo) {
      // jump to specific page
    }
  },

  onUserInfoReceived: function({ detail: { userInfo } }) {
    app.globalData.userInfo = userInfo
    wx.navigateTo({
      url: '../manager/index'
    })
  },
})
