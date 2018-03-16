

var downTextObj = {
    start:'下拉刷新',
    end: '释放刷新',
    release:'正在加载......'
};
var upTextObj = {
    start:'上拉加载',
    release:'<img class="loading" src="../img/loading.gif">'
};
var vue = new Vue({
    el: '#app',
    components: {//注册组件
        "modal-detail": modalDetalil,
        "times": times
    },
    data() {
        return {
            message: 'hello',
            items: [
                {
                    name: 'linger',
                    sex: '女',
                },
                {
                    name: 'linger1',
                    sex: '男'
                },
                {
                    name: 'linger1',
                    sex: '男'
                },
                {
                    name: 'linger1',
                    sex: '男'
                },
                {
                    name: 'linger1',
                    sex: '男'
                },
                {
                    name: 'linger1',
                    sex: '男'
                },
                {
                    name: 'linger1',
                    sex: '男'
                }
            ],
            downText: downTextObj.start, // 下拉刷新提示文字
            upText: upTextObj.start, //上拉加载提示文字
            selectedItem: {}, //被选择的信息
            downState: false // 下拉刷新状态值，刷新中为true
        }
    },
    created() {
        this.$nextTick(() => {
            let startTime = this.$refs.headTime.startTime.selectedDate;
            let endTime = this.$refs.headTime.endTime.selectedDate;
            console.log(startTime,endTime,'开始时间，结束时间');
        });
        //接口
        /*this.getAjax().then((data) => {
            this.items = data;
            this._initscroll();
        });*/
        this._initscroll();
    },
    methods: {
        searchFun() {
            /*this.getAjax().then((data) => {
            this.items = data;
             this._initscroll();
             });*/

        },
        getAjax() {
            return this.$http.get('你的url地址');
        },
        _initscroll() {
            //有接口后把以下代码写到then() 里面
            this.$nextTick(() => {
                let headHeight = this.$refs.headTime.$el.clientHeight;
                // bscroll盒子要指定高度，这个是动态获取的，不设置高度有时候可能会获取不到
                this.$refs.content.style.height = (window.innerHeight-headHeight) + 'px';// 高度设为与文档高度一致,否则可能
                if(!this.scroll) {
                    this.scroll = new BScroll(this.$refs.content,{
                        probeType: 3,
                        click:true,
                        pullDownRefresh: {//用于做下拉刷新功能，默认为 false
                            threshold: 50, // 顶部下拉的距离
                            stop: 40 //回弹停留的距离
                        },
                        pullUpLoad: {// 用于做上拉加载功能，默认为 false。
                            threshold: -30  // 在上拉到超过底部 30px 时，触发 pullingUp 事件
                        },
                        bounce:true
                    });
                    this.scroll.on('pullingDown', () => {// 下拉刷新
                        // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
                        this.downText = downTextObj.release;
                        this.downState = true;
                        console.log(2);
                        //走接口
                        /*this.getAjax().then((newData) => {
                         this.items.push(newData)
                         });*/
                        let _this = this;
                        setTimeout(function() {// 模拟的数据
                            _this.items = [
                                {
                                    name: '哈哈',
                                    sex: '女'
                                },
                                {
                                    name: '嘿嘿',
                                    sex: '男'
                                },
                                {
                                    name: '嘿嘿',
                                    sex: '男'
                                },
                                {
                                    name: '嘿嘿',
                                    sex: '男'
                                },
                                {
                                    name: '嘿嘿',
                                    sex: '男'
                                },
                                {
                                    name: '嘿嘿',
                                    sex: '男'
                                },
                                {
                                    name: '嘿嘿',
                                    sex: '男'
                                }];
                            // 在刷新数据完成之后，调用 finishPullDown 方法，回弹到顶部
                            _this.scroll.finishPullDown(); //当下拉刷新数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载
                            _this.scroll.refresh();
                            _this.downText = downTextObj.start;
                            this.downState = false;
                        },1000);
                    });
                    this.scroll.on('pullingUp', () => {// 上拉加载
                        this.upText = upTextObj.release;
                        //走接口
                        /*this.getAjax().then((newData) => {
                         this.items.push(newData)
                         });*/
                        let _this = this;
                        setTimeout(function() {// 模拟的数据
                            _this.items.push({
                                name: 'linger1',
                                sex: '男'
                            });
                            _this.scroll.finishPullUp();//当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载。
                            _this.upText = upTextObj.start;
                            _this.scroll.refresh();
                        },1000);
                    });
                    this.scroll.on('scroll',(pos) => {
                        if (Math.floor(pos.y) > 50 && !this.downState) {
                            this.downText = downTextObj.end;
                        };

                        // 上拉加载
                        if((Math.abs(Math.round(pos.y))+window.innerHeight) >= this.scroll.scrollerHeight) {//滚动到底部

                        }
                    });
                } else {
                    this.scroll.refresh();
                };

                this.scroll.on('touchEnd',(pos) => {
                    // 下拉动作
                    if (pos.y > 50) {
                        console.log('scrollEnd',Math.floor(pos.y));
                    };
                });
            });
        },
        showModal(event,item) {
            /*if(!event._constructed) {
                return false;
            };*/
            //调用子组件的方法
            console.log(this.$refs.modalDetail);
            this.selectedItem = item;
            this.$refs.modalDetail.showFun();
        }
    }
});



