function ourFunction() {
     function problem1() {
        let outputHEH;
        
        const cases = Math.floor((Math.random()*4) + 1);
        document.write("To get the 4-digit pin, you must solve the following riddle:");
        switch(cases) {
            case 1:
                let problem1 = prompt("What is the password?", "0000");
                if (problem1 == null || problem1 == "") {
                    outputHEH = "Enter the fricking password!";
                }
                else {
                    if(problem1 == "6242") {
                        outputHEH = "Correct! >>proceeds to program";
                    }
                    else {
                        outputHEH = "Incorrect.Try again";
                    }
                }

            break;

            case 2:
                let problem2 = prompt("What is the password?", "0000");
                if (problem2 == null || problem2 == "") {
                    outputHEH = "Enter the fricking password!";
                }
                else {
                    if(problem2 == "0316") {
                        outputHEH = "Correct! >>proceeds to program";
                    }
                    else {
                        outputHEH = "Incorrect.Try again";
                    }
                }
            break;

            case 3:
                let problem3 = prompt("What is the password?", "0000");
                if (problem3 == null || problem3 == "") {
                    outputHEH = "Enter the fricking password!";
                }
                else {
                    if(problem3 == "4671") {
                        outputHEH = "Correct! >>proceeds to program";
                    }
                    else {
                        outputHEH = "Incorrect.Try again";
                    }
                }
            break;
            
            case 4:
                let problem4 = prompt("What is the password?", "0000");
                if (problem4 == null || problem4 == "") {
                    outputHEH = "Enter the fricking password!";
                }
                else {
                    if(problem4 == "7777") {
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


  
