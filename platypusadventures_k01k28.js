function ourFunction() {
     function problem1() {
        let outputHEH;
        
        const cases = Math.floor((Math.random()*4) + 1);
        document.write("To get the 4-digit pin, you must solve the following riddle:");
        switch(cases) {
            case 1:
                let problem11 = prompt("I am a 4-digit number. My thousands digit is twice the ones digit and hundereds digit. The tens digit is thrice the thousands but 6 times the ones and hundereds. What number am I?", "0000");
                if (problem11 == null || problem11 == "") {
                    outputHEH = "Enter the fricking password!";
                }
                else {
                    if(problem11 == "2161") {
                        outputHEH = "Correct! >>proceeds to program";
                    }
                    else {
                        outputHEH = "Incorrect.Try again";
                    }
                }

            break;

            case 2:
                let problem12 = prompt("The tens and ones digit of this number is the square of 4. Then, the hundreds digit is the value of log2 (8). Lastly, the thousands digit is useless. What number am I?", "0000");
                if (problem12 == null || problem12 == "") {
                    outputHEH = "Enter the fricking password!";
                }
                else {
                    if(problem12 == "0316") {
                        outputHEH = "Correct! >>proceeds to program";
                    }
                    else {
                        outputHEH = "Incorrect.Try again";
                    }
                }
            break;

            case 3:
                let problem13 = prompt("What is the password?", "0000");
                if (problem13 == null || problem13 == "") {
                    outputHEH = "Enter the fricking password!";
                }
                else {
                    if(problem13 == "4671") {
                        outputHEH = "Correct! >>proceeds to program";
                    }
                    else {
                        outputHEH = "Incorrect.Try again";
                    }
                }
            break;
            
            case 4:
                let problem14 = prompt("What is the password?", "0000");
                if (problem14 == null || problem14 == "") {
                    outputHEH = "Enter the fricking password!";
                }
                else {
                    if(problem14 == "7777") {
                        outputHEH = "Correct! >>proceeds to program";
                    }
                    else {
                        outputHEH = "Incorrect.Try again";
                    }
                }
            break;

        }
        //answers:
        //6242
        //0316
        //4671
        //7777
        var textboxy;
        document.getElementById("button").innerHTML = outputHEH;


     }
     function problem2() {
        
     }
     function problem3() {

     }
}


/*rli = require('readline').createInterface({
    input : process.stdin,
}) 
rli.on('line', function (line) {
    line !=="END" ? inputs.push(line) : rli.close()
})

var inputs = []

rli.on('close', ourFunction)*/


  
