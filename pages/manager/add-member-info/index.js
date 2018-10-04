Page({
  data: {
    username: '',
    mobile: '',
    privilege: '',

    memberPrivileges: [
      '普通会员(0-1000元)',
      '高级会员(1000-5000元)',
      '骨灰级会员(5000+元)',
    ],
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

  onPrivilege: function({ detail: { value: index } }) {
    this.setData({
      privilege: this.data.memberPrivileges[index],
    })
    this.updateFormCompleteness()
  },

  updateFormCompleteness: function() {
    const { username, mobile, privilege } = this.data
    const fields = [username, mobile, privilege].map((field) =>
      String(field).trim()
    )
    const isFormCompleted = fields.every((field) => field.length > 0)

    this.setData({
      isFormCompleted,
    })
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
      duration: 2000,
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
