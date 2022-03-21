const app = Vue.createApp({
    // データ-バインニング
    data:() => ({
        message: "Hello Vue.js",
        count: 0,
        users: {
            lastname: 'Nakamura',
            firstName: 'Yuta',
            perfecture: 'Tokyo',
        },
        toggle: true,
        colors:['Red','Green','Bule'],
        now: '-'
    }),
    methods: {
        onClick: function() {
            this.now = new Date().getDate().toLocaleString()
        }
    }
})

app.component('hello-component', {
    template: '<p>Hello</p>'
})
app.mount("#app")

// コンポーネント