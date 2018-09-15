Page({
  data: {
    message: 'message'
  },

  addMemberInfo: function() {
    wx.navigateTo({
      url: './add-member-info/index',
    })
  }
})