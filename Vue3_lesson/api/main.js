const app = Vue.createApp({
    data:() => ({
        items: null,
        keyword: '',
        message: ''
    }),
    mounted: function(){
        // this.keyword = 'JavaScript'
        // this.getAnswer()
        this.debouncedGetAnswer = _.debounce(this.getAnswer,1000)
    },
    methods: {
        getAnswer: function(){
            if(this.keyword ===  ''){
                console.log('karamozi')
                this.items =  null
                return
            }
            this.message = 'Lading...'
            const vm = this
            const  params = { page: 1, per_page: 20, query: this.keyword }
            axios.get('https://qiita.com/api/v2/items', { params })
                .then(function(responce){
                    console.log(responce)
                    vm.items = responce.data
                })
                .catch(function(error){
                    vm.message = 'Error' + error
                })
                .finally(function(){
                    vm.message  = ''
                })
        }
    },
    watch: {
        keyword :function(newKeywoord, oldKeyword){
            console.log(newKeywoord)
            this.message ='wstiting for yoou to stop typing ..'
            this.debouncedGetAnswer()
        }
    }
})
app.mount('#app')