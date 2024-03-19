
///////START///////

//********VARIABILI*********//
const buttonPlay = document.querySelector("#btn-play");
//Selettore paragrafo destinato ai numeri
const numbersDiv = document.querySelector("#numbers");//Selettore paragrafo destinato ai numeri
//Selettore del paragrafo per il risultato
const result = document.querySelector("#result");
// numeri scelti dal giocatore.
const userNumbers = [];
// numeri indovinati dal giocatore.
let correctNumbers = [];

// Tasto PLAY
buttonPlay.addEventListener("click", function(){ 
    //reset del risultato ogni click
    result.innerHTML = ""; 
    //metto array con numeri casuali della funzione in una variabile 
    //e la mostro all'utente nel dom per 30 secondi:
    let numbersArray = generateCasualNumbers();
    numbersDiv.innerHTML = numbersArray;
    let correctNumbers = []; 
    setTimeout(() => numbersDiv.innerHTML = "", 30000); 
    
    //dopo comparsa numeri, 1 sec dopo compaiono i 5 prompt (tramite ciclo)
    //e i valori salvati in un array.
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            const inputNumber = parseInt(prompt("Inserisci un numero da 1 a 100:"));
            userNumbers.push(inputNumber);

            // Controllo se il numero inserito dall'utente è presente tra quelli generati casualmente
            if (numbersArray.includes(inputNumber)) {
                correctNumbers.push(inputNumber);
            }
        }
        //incollo risultato: lunghezza array e numeri corretti confrontati nel ciclo precedente.(pushati in array)
        result.innerHTML = `Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers}`;     
        
    }, 31000); 
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


