/*
 * @Author: wadejs
 * @Date: 2018-12-11 16:36:03
 * @GitHub: 'https://github.com/wadejs'
 * @Blog: 'http://blog.wadejs.cn'
 * @Last Modified by:   wadejs
 * @Last Modified time: 2018-12-11 16:36:03
 */
import 'css/swiper.min.css'
import 'css/index.css'
import $ from 'jquery'
import Swiper from 'swiper'
import { getQueryString } from 'js/common.js'
// 初始化banner滚动
var bannerSwiper = new Swiper('.banner-container', { // eslint-disable-line
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

function test() {
  console.log($())
  console.log(getQueryString('code'))
}

test()