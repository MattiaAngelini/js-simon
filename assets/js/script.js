
//Visualizzare in pagina 5 numeri casuali. 
//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono 


//e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().


//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
//Consigli del giorno:

//* Pensate prima in italiano.
//* Dividete in piccoli problemi la consegna.
//* Individuate gli elementi di cui avete bisogno per realizzare il programma.

///////START///////
//Selettore del tasto play
const buttonPlay = document.querySelector("#btn-play");
//Selettore paragrafo destinato ai numeri
const numbersDiv = document.querySelector("#numbers");//Selettore paragrafo destinato ai numeri
// numeri scelti dal giocatore.
const userNumbers = [];



// Click al tasto play che genera i 5 numeri della funzione per 30 secondi
buttonPlay.addEventListener("click", function(){
    let numbersArray = generateCasualNumbers();
    numbersDiv.innerHTML = numbersArray;
    setTimeout(() => numbersDiv.innerHTML = "", 3000); 

    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            // Utilizzo ciclo con prompt() per ottenere 5 input dall'utente
            const inputNumber = prompt("Inserisci un valore:");
            
            // Aggiungi il valore inserito dall'utente in un array
            userNumbers.push(parseInt(inputNumber)); 
            console.log(userNumbers)
        }
    }, 3100); 
});





//*********FUNCTION***********//

// funzione che genera 5 numeri casuali unici da 1 a 100.
function generateCasualNumbers() {
    let uniqueNumbers = [];

    while (uniqueNumbers.length < 5) {
        let casualNumbers = Math.floor(Math.random() * 100) + 1;
        if (!uniqueNumbers.includes(casualNumbers)) {
            uniqueNumbers.push(casualNumbers);
        }
    }
    return uniqueNumbers;
}



//funzione che farà comparire i numeri in un elemento <p>
