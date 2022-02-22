Vue.createApp({
    data(){
        return {
            leNombre : 0
        };
    }, 
        methods:{
            green(number){
                this.leNombre += number;
            },
            red(number){
                this.leNombre +=number;
            }
        },
        computed: {
            toto(){
                console.log('je suis bien executee');
                if (this.leNombre < 7){
                    return 'Essaie Encore';
                    // this.leNombre = 0;
                } else if (this.leNombre == 7){
                    return this.leNombre;
                }
                 //((value > 5) && (value > 7)){
                //this.leNombre = 'Essaie Encore!';
                else {
                    return 'Tu as dépassé le Nb Mystère ';
                }
            }
        },         
        watch:{
            leNombre (value) {
                setTimeout(() => {
                    this.leNombre = 0;
                }, 5000)
            }
    }
    
}).mount('#monApp');

