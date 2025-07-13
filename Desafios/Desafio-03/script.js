new Vue({
    el: '#app',
    data: {
        value: 0,
    },
    watch: {
        result() {
            setTimeout(() => {
                this.value = 0
            },3000)
        }
    },
    computed: {
        result() {
            return this.value != 37 ? 'Value different from 37' : 'Value equal from 37'
        }
    }
})
