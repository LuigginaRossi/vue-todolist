const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            taskList:[
                {
                    text:"Creare contenuto statico funzionante",
                    done: false,
                },
                {
                    text:"associare contenuto statico a elementi array",
                    done: false,
                },
                {
                    text:"Ciclare con v-for",
                    done: false,
                },
            ],
        };
    },
    methods: {
        
    }  
}).mount("#app");