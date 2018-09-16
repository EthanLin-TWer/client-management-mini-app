// pages/manager/add-member-info/indes.js
Page({
  data: {
    username: '',
    mobile: '',
    privilege: '',
  },

  onUsername: function({ detail: { value } }) {
    this.setData({
      username: value,
    })
  },

  onMobile: function({ detail: { value } }) {
    this.setData({
      mobile: value,
    })
  },

  onPrivilege: function({ detail: { value } }) {
    this.setData({
      privilege: value,
    })
  },

  onSubmit: function() {
    const data = {
      ...this.data,
      time: Date.now(),
    }

    // 将数据发送到后端
    const memberRecords = wx.getStorageSync('memberRecords') || []
    memberRecords.unshift(data)
    wx.setStorageSync('memberRecords', memberRecords)
  },
})
