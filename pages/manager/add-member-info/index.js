Page({
  data: {
    username: '',
    mobile: '',
    privilege: '',
    memberRankings: [1, 2, 3],
    selectedRanking: '',
    isFormCompleted: false,
  },

  onUsername: function({ detail: { value } }) {
    this.setData({
      username: value,
    })
    this.updateFormCompleteness()
  },

  onMobile: function({ detail: { value } }) {
    this.setData({
      mobile: value,
    })
    this.updateFormCompleteness()
  },

  onPrivilege: function({ detail: { value } }) {
    this.setData({
      privilege: value,
    })
    this.updateFormCompleteness()
  },

  updateFormCompleteness: function() {
    const { username, mobile, privilege } = this.data
    const fields = [username, mobile, privilege].map((field) => field.trim())
    const isFormCompleted = fields.every((field) => field.length > 0)

    this.setData({
      isFormCompleted,
    })
  },

  onMemberRanking: function({ detail: { value } }) {
    this.setData({
      selectedRanking: value,
    })
    this.updateFormCompleteness()
  },

  onSubmit: function() {
    if (!this.data.isFormCompleted) {
      return
    }

    const data = {
      ...this.data,
      time: Date.now(),
    }

    // 将数据发送到后端
    const memberRecords = wx.getStorageSync('memberRecords') || []
    memberRecords.unshift(data)
    wx.setStorageSync('memberRecords', memberRecords)

    wx.showToast({
      title: '信息录入成功',
      icon: 'success',
      duration: 10000,
      mask: true,
    })

    return setTimeout(() => {
      wx.hideToast()
      wx.navigateTo({
        url: '../index',
      })
    }, 2000)
  },
})
