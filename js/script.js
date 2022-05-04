
/* 
    **Descrizione:**
    Rifare l’esercizio della to do list.
    Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
    - `text`, una stringa che indica il testo del todo
    - `done`, un booleano (true/false) che indica se il todo è stato fatto oppure no

    1. Creare una lista di oggetti all'interno di Vue;

    **MILESTONE 1**
    Stampare all’interno di una lista, un item per ogni todo.
    Se la proprietà `done` è uguale a `true`, visualizzare il testo del todo ~~sbarrato~~.

    2. Ciclare la lista di oggetti per far stampare ogni elemento della lista.
    3. Creare una funzione che mi controlla il valore di `done` e, se vera sbarra il testo.

    **MILESTONE 2**
    Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

    4. @click della Cross, eseguire lo splice dell'elemento dalla lista;


    **MILESTONE 3**
    Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
    
    5. Creare un v-model del campo di input e, @click del pulsante eseguire il push dell'elemento all'interno degli oggetti

    **Bonus:**
    1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
    2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se `done` era uguale a `false`, impostare `true` e viceversa) 

    BONUS 1:
    1. Aggiungere @keyup.enter che esegue la stessa funzione del push dell'elemento nell'array

    BONUS 2:
    1. Aggiungere @click del testo in modo che scateni la stessa funzione del testo sbarrato

*/

const app = new Vue({
    el: '#app',

    data: {

        todos : [
            {
                title: 'Studia i mercati',
                done: false
            },
            {
                title: 'Fai meditazione',
                done: false
            },
            {
                title: 'Brazilian Jiu-jitsu',
                done: false
            },
            {
                title: 'Lavare auto',
                done: true
            },
            {
                title: 'Pisciare il cane',
                done: true
            }
        ]
    },

    methods : {
        lineThroughText(done){
            done = true;
            console.log(done)
            
        }
    }

})