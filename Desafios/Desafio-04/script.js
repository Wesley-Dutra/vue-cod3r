new Vue({
    el: '#app',
    data: {
        effectOn: '',
        intervalOn: null,
        classInput: '',
        classInput2: '',
        classCheckbox: false,
        inputTxt: '',
        color: '',
        stylehw: {
            width: '100px',
            height: '100px'
        },
        progress: 0,
        progressOn: null,
        bgColor: ''
    },
    methods: {
        startEffect() {
            if (this.intervalOn !== null) return

            this.intervalOn = setInterval(() => {
                this.effectOn = this.effectOn == '' ? 'collapse' : ''
            }, 3000)
        },
        startProgress() {
            if (this.progressOn !== null) return

            this.progressOn = setInterval(() => {
                if (this.progress < 100) {
                    this.progress++
                    if (this.progress  < 30) {
                        this.bgColor = '#85b62e'
                    } else if (this.progress < 80) {
                        this.bgColor = '#b6a42e'
                    } else {
                        this.bgColor = '#b6422e'
                    }
                } else {
                    setTimeout(() => {
                        this.progress = 0
                        this.bgColor = '#85b62e'
                        clearInterval(this.progressOn)
                        this.progressOn = null
                    }, 300)
                }
            }, 100)
        }
    }
})
