/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx7b21b9c27a0e63da',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '7c8d206fa0c03abb0e8b2be6623cbacf',

  PROVINCE: '陕西',
  CITY: '西安',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝糖',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '9KKiJJemKUs2YK15_oi8iCJih3RJMIE1ExwM2adWmIE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'ZtJPSQsnrdqAfg0kP-gP0Hr0E9wG8ugBoZmPhYhPOwA',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-10',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '唐颖颖', year: '1997', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '张国栋', year: '1997', date: '11-04',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '09-07',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-07' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-07' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'do58x8o42lywHtwaFi1RvpIrergX2ILO68j_Fa0uf_Y',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ow6Rg6R962R37DeiGlzKUOhjJHDo',
    }
  ],

}

module.exports = USER_CONFIG

