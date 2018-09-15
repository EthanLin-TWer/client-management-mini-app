// pages/manager/add-member-info/indes.js
Page({
  data: {
    username: '',
    mobile: '',
    privilege: '',
  },

  onUsername: function({ detail: { value }}) {
    this.setData({
      username: value,
    })
  },

  onMobile: function({ detail: { value }}) {
    this.setData({
      mobile: value,
    })
  },

  onPrivilege: function({ detail: { value }}) {
    this.setData({
      privilege: value,
    })
  },

  onSubmit: function() {
    console.log(this.data)
  }
})