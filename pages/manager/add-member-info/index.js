Page({
  data: {
    username: '',
    mobile: '',
    privilege: '',
    memberRankings: [
      1,
      2,
      3
    ],
    selectedRanking: '',
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

  onMemberRanking: function({ detail: { value } }) {
    this.setData({
      selectedRanking: value,
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
    console.log('-------- memberRecords --------')
    console.log(memberRecords)
    wx.setStorageSync('memberRecords', memberRecords)
  },
})
