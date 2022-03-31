var computer = 0;
var human = 0;

function askName() {
    var name = promt("enter your name")
    return name
}
// computer
function computer() {
    do{

        var r = Math.floor(Math.random() * 10) + 1
    
        computer = computer + r
    
        alert(`Computer new number is ${r}. Computer new total is ${computer}`)
        return r
    
    } while ( computer < 16)
}

//human
function human() {
    do{ 

        var r = Math.floor(Math.random() * 10) + 1
    
        human = human + r
    
        alert(`Computer new number is ${r}. Computer new total is ${human}`)
    
        if (human > 20) {
            break
        }
    
        var des = prompt("do you want to play again")
        return des
    
    } while (( human < 20) && (des == "y"))
}

function game(a) {
    human()
    computer()
}