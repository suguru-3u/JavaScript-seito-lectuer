const app = Vue.createApp({
    data:() => ({
        message: "Hello",
        basePrice: 100,
    }),
    computed: {
        reverseMessage() {
            return this.message.split('').reverse().join('')
        },
        taxInculdedPrice:{
            get: function(){
                return this.basePrice * 1.1
            },
            set: function(value){
                this.basePrice = value / 1.1
            }
        },
        computedNumber:{
            functioon(){
                return Math.random()
            }
        },
        reversedMessage: function () {
            // `this` は vm インスタンスを指します
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        reverseMessage2: function () {
            return this.message.split('').reverse().join('')
        },

    }
})
app.mount('#app')