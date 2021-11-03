var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

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