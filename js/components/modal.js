
//声明的全局组件 用 modal来接收（获取）
// Vue.component必须写在new Vue之前

var modalDetalil = Vue.component('modal',{
    props: {
        item: {
            type: Object
        }
    },
    data() {
      return {
          showBool: false
      }
    },
    methods: {
        showFun() {//显示弹框
          console.log(this.item);
          this.showBool = true;
            this.$nextTick(() => {
                if(!this.modalScroll) {
                    this.modalScroll = new BScroll(this.$refs.modalBox,{
                        click:true
                    })
                } else {
                    this.modalScroll.refresh();
                }
            })
        },
        closeModal() {//关闭弹框
          this.showBool = false;
        }
    },
    template:
        `<transition name="fade">
            <div class="detail" v-show="showBool" ref="modalBox">
                <div class="detail-wrapper">
                    <h3 class="title">
                    黄河医院
                    <span class="iconfont icon-Close" @click="closeModal"></span>
                    </h3>
                    <div class="item">
                        <div class="border-b-1 time">
                            <span>处方号：HY1000002</span>
                            <span class="date">开方日期：03-11</span>
                        </div>
                        <ul class="ul">
                            <li class="info">
                                <label>姓名</label>
                                <div class="name">玲儿</div>
                            </li>
                            <li>
                                <label>性别</label>
                                <div class="sex">女</div>
                            </li>
                            <li>
                                <label>年龄</label>
                                <div class="age">24岁</div>
                            </li>
                            <li>
                                <label>科室</label>
                                <div>普通内科</div>
                            </li>
                            <li>
                                <label>诊断</label>
                                <div>小儿腹泻</div>
                            </li>
                            <li>
                                <label>药品</label>
                                <div class="drug">
                                    <div>
                                        <span>小儿葵花牌感冒灵颗粒 (3g*1袋)</span>
                                        <p><span>口服</span>|<span>一天两次</span>|<span>每次3g</span><span class="num">x1</span></p>
                                        
                                    </div>
                                    <div>
                                        <span>小儿葵花牌感冒灵颗粒 (3g*1袋)小儿葵花牌感冒灵颗粒小儿葵花牌感冒灵颗粒小儿葵花牌感冒灵颗粒小儿葵花牌感冒灵颗粒小儿葵花牌感冒灵颗粒小儿葵花牌感冒灵颗粒小儿葵花牌感冒灵颗粒小儿葵花牌感冒灵颗粒小儿葵花牌感冒灵颗粒小儿葵花牌感冒灵颗粒小儿葵花牌感冒灵颗粒小儿葵花牌感冒灵颗粒小儿葵花牌感冒灵颗粒小儿葵花牌感冒灵颗粒小儿葵花牌感冒灵颗粒</span>
                                        <p><span>口服</span>|<span>一天两次</span>|<span>每次3g</span><span class="num">x1</span></p>
                                        
                                    </div>
                                </div>
                            </li>
                            <li class="doctor">
                                <span class="l">医师</span>
                                <span class="r">杨康</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </transition>`
})