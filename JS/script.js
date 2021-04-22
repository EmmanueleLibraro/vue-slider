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
        interval: 0,     //INTERVALLO PER FERMARE LE FOTO
        
    },
    mounted(){         //PAROLA CHIAVE PER CREARE ISTANZA VUE 
        this.startLoop();
    },
    methods: {
        //FUNZIONI PER FECCIA DESTRA E SINISTRA
        prevFoto(){
            this.indexFoto --;    //DIMINUIAMO IL VALORE DELL'INDEX CON ' - - '

            if(this.indexFoto < 0){
                this.indexFoto = this.foto.length - 1;
            }
        },
        nextFoto(){
            this.indexFoto ++;    //INCREMENTIAMO IL VALORE DELL'INDEX CON ' + + '

            if(this.indexFoto > (this.foto.length) -1 ){   //SERVE PER RITORNARE ALLA FOTO INIZIALE
                this.indexFoto = 0;
            }
        },
        setFoto(index){   //INDICE CLICK DEI PALLINI CHE SI RIFERISCE ALL'INDEX DELLE FOTO
            this.indexFoto = index;
        },
        startLoop(){
            this.interval= setInterval(() => {
                this.nextFoto();        //OGNI 3 SEC LE IMG CAMBIANO DA SOLE
            }, 3000);
            this.$refs.slider.blur();
        },
        stopLoop(){
           clearInterval(this.interval);   //FERMA L'AVANZARE DELLE FOTO
           this.$refs.slider.focus();    //USA IL FOCUS SULLE IMG
        }
        

    }
});

