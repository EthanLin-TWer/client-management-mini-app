Page({
  data: {
    records: []
  },

  onLoad: function() {
    const records = wx.getStorageSync('memberRecords') || []
    this.setData({
      records,
    })
  },
})
