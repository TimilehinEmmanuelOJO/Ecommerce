//var timi = document.getElementById('bod')

//timi.textContent = 'kndfnfnfn'

new Vue ({
    el: '.vue-body',
    data: {
        number: 0,
        name: 'timi',
    },
    methods:{
        add: function(){
            this.number++;
        },
        subtract: function(){
            this.number--;
        }
    }
})