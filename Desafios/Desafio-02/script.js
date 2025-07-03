new Vue({
    el: '#app',
    data: {
        valueInputUp:  '',
        valueInputEnter: '',
    },
    methods: {
        showAlert() {
            swal.fire({
                title: 'Warning',
                text: 'text from example!',
                icon: 'warning',
                iconColor: '#85b62e',
                confirmButtonColor: '#85b62e'
            })
        },
        getResultUp(e) {
            this.valueInputUp = e.target.value
        },
        getResultEnter(e) {
            this.valueInputEnter = e.target.value
        }
    }
})
