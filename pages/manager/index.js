Page({
  data: {},

  addMemberInfo: function() {
    wx.navigateTo({
      url: './add-member-info/index',
    })
  },

  viewMemberInfo: function() {
    wx.navigateTo({
      url: './view-member-info/index',
    })
  },
})
