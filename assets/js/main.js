/*
1-Visualizzare in pagina 5 numeri casuali. 
    -funzione Math.random
    -array vuoto per inserire i 5 num
    -ciclo for per generare 5 num casuali nell'array
    -stampare in pagina i 5 num

2-Da lì parte un timer di 5 secondi. Dopo 5 secondi i numeri scompaiono
    -setTimeout
    -display-none dei 5 num in pagina: aggiungendo una classe

3-l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    -ciclo for per generare 5 prompt

4-Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    -ciclo
    -if(array[num].includes(num inseriti nel prompt)){
        stampare il num
    }
*/


//funzione per generare numeri randomici
function random(){
    return Math.floor(Math.random() * 100) + 1;
}


//ciclo per stampare 5 numeri casuali nell'array vuoto
let arrayNum = []

for(let i = 0; arrayNum.length < 5; i++){
    
    arrayNum.push(random());   
    document.querySelector('ul').innerHTML += `<li>${arrayNum[i]}</li>`
}


//funzione per far scomparire i 5 numeri dopo 3 secondi
let timer = setTimeout(function(){
    document.querySelector('ul').classList.add('d-none')
}, 3000)


//mostro i 5 prompt e poi confronto gli array
let timer2 = setTimeout(function(){

    let arrayPrompt = []

    for(let i = 0; arrayPrompt.length < 5; i++){
        let numeriUtente = parseInt(prompt('Inserisci il numero visualizzato'));
        arrayPrompt.push(numeriUtente)
    }

    let numeriGiusti = []

    for(let i = 0; i < arrayPrompt.length; i++){

        if(arrayNum.includes(arrayPrompt[i])){
            numeriGiusti.push(arrayPrompt[i])
        }
    } 

    document.querySelector('#risultato').innerHTML =`I numeri indovinati sono: ${numeriGiusti}`

}, 4000)









