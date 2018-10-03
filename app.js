//app.js
App({
  onLaunch: function() {
    // 登录
    wx.login({
      success: () => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })

    // 获取用户信息
    wx.getSetting({
      success: (res) => {
        // 没有授权，直接返回
        if (!res.authSetting['scope.userInfo']) {
          return
        }

        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        wx.getUserInfo({
          success: ({ userInfo }) => {
            // 可以将 res 发送给后台解码出 unionId
            this.globalData = {
              userInfo,
              isAdmin: userInfo.nickName === '林燕玲',
            }
          },
        })
      },
    })
  },
  globalData: {
    userInfo: null,
    isAdmin: false,
  },
})
