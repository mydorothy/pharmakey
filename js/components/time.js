
var times = Vue.component('times',{
    template: '#time-template',
    data() {
        return {
            startTime: {
                calendarShow: false, // 是否显示选择日期弹框
                defaultDate: new Date(),//默认日期
                selectedDate: dateFormat(new Date(), "yyyy-MM-dd")
            },
            endTime: {
                calendarShow: false, // 是否显示选择日期弹框
                defaultDate: new Date(),//默认日期
                selectedDate: dateFormat(new Date(), "yyyy-MM-dd")
            }
        }
    },
    methods: {
        startTimeChange(date, formatDate) {
            console.log('change',date,formatDate);
            this.startTime.selectedDate = formatDate;
        },
        endTimeChange(date, formatDate) {
            console.log('change',date,formatDate);
            this.endTime.selectedDate = formatDate;
        },
        startTimeClick() {// 显示选择日期
            this.startTime.calendarShow = true;
        },
        endTimeClick() {// 显示选择日期
            this.endTime.calendarShow = true;
        },
    }
})

function dateFormat(date, fmt) {
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate()
    };
    if(/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}