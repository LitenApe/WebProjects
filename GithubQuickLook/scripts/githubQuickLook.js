var app = new Vue({
    el: '#app',
    data: {
        username: '',
        display: false,
        userobj: {}
    },
    methods: {
        search: function(){
            var link = 'https://api.github.com/users/' + this.username;
            this.display = false;
            var dis = this;
            axios.get(link)
                .then(function(response){
                    dis.userobj = response.data;
                    dis.display = true;
                })
                .catch(function(error){
                    console.log(error);
                })
        }
    }
});
