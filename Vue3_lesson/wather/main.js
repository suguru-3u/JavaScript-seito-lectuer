const app = Vue.createApp({
    data:() => ({
        message:"Hello Vue",
        km: 0,
        m: 0,
        firstName: '',
        lasttName: '',
        colors: [
            {name: 'Red'},
            {name: 'Green'},
            {name: 'Bule'},
        ]
    }),
    watch: {
        message: function(newValue,oldValue){
            console.log('new: %s, old: %s', newValue, oldValue)
        },
        km: function(value){
            console.log(value)
            this.km = value
            this.m = value * 1000
        },
        m: function(value){
            this.km = value / 1000
            this.m  = value
        },
        firstName: function(value){
            this.fullName = value + '' + this.lastName;
        },
        lasttName: function(value){
            this.fullName = this.lasttName + '' + value;
        },
        colors: {
            handler: function(newValue, oldValue){
                console.log('Update')
            },
            deep: true
        }
    },
    // computed:{
    //     fullName: function(){
    //         return  this.firstName + '' + this.lasttName
    //     }
    // }
    methods:{
        onClick: function(event){
            this.colors[1].name = 'white'
        }
    }
})
app.mount("#app")