const app = Vue.createApp({
    data:() =>  ({
        message: 'Hello <span style="color:red">Vue.js</span>',
        message2: 'Hello Vue.js',
        number: 100,
        ok: true,
        url: 'https://www.google.co.jp'
    }),
    methods: {
        clickHandler: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})
app.mount("#app")