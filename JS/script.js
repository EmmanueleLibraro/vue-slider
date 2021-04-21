const app = new Vue({
    el: '#app',
    data: {
        foto: [
            './img-slider/81ICUia+GoL._AC_SL1500_.jpg',
            './img-slider/header---image.jpg',
            './img-slider/New-World-TGA-Shot-06.jpg',
            './img-slider/Settlement_01.jpg',
        ],
        indexFoto: 0,     //INDICE INIZIALE DELL'ARRAY
        
    },

    methods: {
        //FUNZIONI PER FECCIA DESTRA E SINISTRA
        prevFoto(){
            this.indexFoto --;    //DIMINUIAMO IL VALORE CON ' - - '

            if(this.indexFoto < 0){
                this.indexFoto = this.foto.length - 1;
            }
        },
        nextFoto(){
            this.indexFoto ++;    //INCREMENTIAMO IL VALORE CON ' + + '

            if(this.indexFoto > (this.foto.length) -1 ){       //SERVE PER RITORNARE ALLA FOTO INIZIALE
                this.indexFoto = 0;
            }
        }
    }
});

