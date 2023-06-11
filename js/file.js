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
                    text:"Collegare testo a elementi della taskList js",
                    done: false,
                },
            ],
            newTask:[
                {
                    text: "",
                    done: false,
                },
            ],
        };
    },
    methods: {
        deleteTask (indexTaskDeleted){
            const confirmed = confirm("Vuoi confermare la cancellazione?");
            
            if(confirmed){
                this.taskList.splice(indexTaskDeleted, 1);
            }
        },
        addNewTask(){
            this.taskList.push({
                text: this.newTask.text,
            })
        },
    }  
}).mount("#app");