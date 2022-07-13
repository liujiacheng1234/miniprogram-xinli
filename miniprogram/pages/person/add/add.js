let ying = ['ceramic', 'ware', 'waterproof', 'decoration']
let ying1 = ['add', 'del']
let index = 0
let index1 = 0
let na
let imgPath
Page({
    data: {
        selctedimg:'',

      array: ['瓷片', '洁具', '防水', '装饰'],
      
      objectArray: [
        {
          id: 0,
          name: '美国'
        },
        {
          id: 1,
          name: '中国'
        },
        {
          id: 2,
          name: '巴西'
        },
        {
          id: 3,
          name: '日本'
        }
      ],
      index: 0,

      array1: ['增加', '删除'],
      
      objectArray: [
        {
          id: 0,
          name: 'add'
        },
        {
          id: 1,
          name: 'del'
        },
      ],
      index1: 0,
    },
    bindPickerChange: function(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value
      })
      index = e.detail.value
      console.log(ying[index])
    },
    PickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          index1: e.detail.value
        })
        index1 = e.detail.value
        console.log(ying1[index1])
      },
      uploadimg(){
        //声明this，这里面嵌套的太多，里面拿不到this
        let _that=this

        wx.chooseImage({
            count: 1,
            success (res) {
              // tempFilePath可以作为img标签的src属性显示图片
              const tempFilePaths = res.tempFilePaths
              //获取到每张图片的名字
              const fileName=res.tempFilePaths[0].slice(11)
           // console.log(res.tempFilePaths[0])
            //console.log(res.tempFilePaths[0].slice(11))
              
        wx.cloud.uploadFile({
        //这里拼接的字符串也可以使用模板字面量
        //cloudPath: `img/${fileName}.png`, 
            cloudPath: 'img/'+fileName+'.png', // 上传至云端的路径
            filePath: tempFilePaths[0], // 小程序临时文件路径
            success: res => {
              // 返回文件 ID
              console.log(res.fileID)
                imgPath = res.fileID
              _that.setData({
                  selctedimg:res.fileID
              })
            },
            fail: console.error
          })
            }
          })
    },
    getName(e){
        console.log('管理员携带值为', e.detail.value)
        na =  e.detail.value
    },
    commit(){
        let db = wx.cloud.database().collection(ying[index])
        if(index1==0){
            if(imgPath!=null&&na!=null){
                db.add({
                    data:{
                        name:na,
                        img:imgPath
                    }
                })
                .then(res=>{
                    console.log('添加成功')
                    wx.showToast({
                        title: '添加成功',
                    })
                })
                .catch(err=>{
                    console.log('添加失败')
                })
            }else{
                wx.showToast({
                    icon:'error',
                    title: '名字或图片为空',
                })
            }
        }else{
            //这边添加删除功能
        }
        
    }
  })