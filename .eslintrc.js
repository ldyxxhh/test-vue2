/*
 * @Autor: lvdy
 * @Date: 2023-10-25 15:55:03
 * @LastEditors: lvdy
 * @LastEditTime: 2023-10-25 17:30:00
 * @Description: 
 */
module.exports={
    parserOptions: {
          "ecmaVersion": 7,
          "sourceType": "module",
          
        },
        "parser": "@babel/eslint-parser",
        // "parser":"vue-eslint-parser",
    rules:{
        // 关闭名称校验
        'vue/multi-word-component-names': 'off'

    }
}