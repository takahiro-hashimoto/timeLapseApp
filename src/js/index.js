import css from '../css/style.css';

const Vue = require('vue');
const app = new Vue({
  el: '#app',
  data: {
    interval: 10,
    photoSheets: 420,
    flamerate: 24,
  },
  computed: {
    calculateShootingTime: function (){
      const time = this.interval * this.photoSheets;
      let timeText = "";
      const hour = time / 3600 | 0;
      const min = time % 3600 / 60 | 0;
      const sec = time % 60;

      if (hour != 0) {
        timeText = hour + "時間" + padZero(min) + "分" + padZero(sec) + "秒";
      } else if (min != 0) {
        timeText = min + "分" + padZero(sec) + "秒";
      } else {
        timeText = sec + "秒";
      }
      return timeText;

      //例) 1秒を01秒と表示する
      function padZero(val) {
        if (val < 10) {
          return "0" + val;
        } else {
          return val;
        }
      }
    },
    calculateVideoTime: function (){
      var videoTime = this.photoSheets / this.flamerate;
      var decimalPoint = 1 ;	// 小数点第n位まで残す
      return Math.floor( videoTime * Math.pow( 10, decimalPoint)) / Math.pow( 10, decimalPoint) ;
    }
  },
  methods: {
    convertInterval: function (){
      if(this.interval > 60) {
        alert('撮影間隔の最大値は60秒です');
        return this.interval = 60;
      }
    },
    convertPhotoSheets: function (){
      if(this.photoSheets > 999) {
        alert('撮影枚数の最大値は999です');
        return this.photoSheets = 999;
      }
    }
  }
})
