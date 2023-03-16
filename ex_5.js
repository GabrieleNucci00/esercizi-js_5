/* - ES1: creare un oggetto persona con diverse proprietà e un metodo che permetta alla persona di salutare
           - Suggerimento: provate a descrivere voi stessi */

/* const persona = {
    nome: 'Gabriele' ,
    cognome: 'Nucci',
    età: '19',
    città: 'Roma',
    professione: 'Web Developer',
    hobby: 'uscire la sera con gli amici, imparare a programmare, giocare a r6, andare in bici( anche se non la possiedo qua a Roma ,ma ci vado sempre quando vado ad Alba Adriatica.',
    saluta() {
    console.log(`Ciao! Mi chiamo ${this.nome} ${this.cognome}. Ho ${this.età},vivo a ${this.città} e lavro come ${this.professione}. I miei hobby sono ${this.hobby} `);
}         
};   
persona.saluta() */



/*   - ES2: creare un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:*/
       
        /* - EXTRA: modificare un contatto esistente */
        /* - Suggerimento:
    let rubrica = {
      'contacts': [
          {'firstname': 'Nicola', 'number': '3331111111'},
          {'firstname': 'Lorenzo', 'number': '3332222222'},
          {'firstname': 'Paola', 'number': '3333333333'},
            {'firstname': 'Jenny', 'number': '3334444444'}
      ],
      ...
    }  */

   /* const agenda = {
        contacts: [
            { nomeContatto: "Federico", number: "3331111111" },
            { nomeContatto: "Lorenzo", number: "3332222222" },
            { nomeContatto: "Mauro", number: "3333333333" },
            { nomeContatto: "Gabriele", number: "3334444444" },
        ],
    }; */
    /* - mostrare tutti i contatti dell’agenda */ 
      /* console.log(agenda.contacts) */
    
      /* - mostrare un singolo contatto */
      /* console.log(agenda.oneContact('Gabriele')); */

   /* - eliminare un contatto dall’agenda */
    /* -come eliminare il primo */  
      /* console.log(agenda.contacts.shift()) */
    
    /* -come eliminare l'ultimo */  
      /* console.log(agenda.contacts.pop()) */ 
    
    /* -come eliminare in una posizione specifica. Posso anche eliminare i contatti e aggiungerne uno nuovo al loro posto,come si vede in seguito,ma al posto dello 0 il num.di posizioni da eliminare */  
      /* console.log(agenda.contacts.splice(0,2)) */
    
    /* -come eliminare specificandoo il numero di elementi da eliminare (parte dall'inizio) e restituisce gli elementi rimasti */
      /* console.log(agenda.contacts.slice(2)) */ 
    
    /* - aggiungere un nuovo contatto */
      /* -aggiungere nuovo contatto all'inizio */
        /* console.log(agenda.contacts.unshift({ nomeContatto: "Franco", number: "2229876792" })) */
        
      /* -aggiungere nuovo contatto alla fine */  
        /* console.log(agenda.contacts.push({ nomeContatto: "Nicola", number: "558749872" })) */

      /* -aggiungere nuovo contatto in un punto specifico */
        /* console.log(agenda.contacts.splice(1,0,{ nomeContatto: "Carla", number: "884692514" })) */
        
        

