var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// function validar() {
//     let letra = form.letras;

//     let string = letra.value;
//     let stringUp = string.toUpperCase();
//     let quebrado = stringUp.split(",");
    
//     for(x=abc.length-1; x>=0; x--) {
//         for(y=quebrado.length-1; y>=0; y--) {
//             if(quebrado[y] === abc[x]) {
//                 abc.splice(abc[x], 1);
//             }
//         }  
//     }

//     console.log(abc);

// }

function Sorteio() {
    let indexAbc = abc.length - 1;

    if(indexAbc > 0){
        let randomNumber = Math.floor(Math.random()*indexAbc);
        let randomAbc = abc[randomNumber];
        document.getElementById("box").innerHTML = randomAbc;
        abc.splice(randomNumber,1);
    } else{
        alert("\nClique em OK, para reiniciar.")
        location.reload();
    }   
}

