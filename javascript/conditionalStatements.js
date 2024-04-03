// Conditional statements - they allow the program to make decisions

// IF - ELSEIF - ELSE statement

// document.getElementById("getColor").addEventListener("click", ()=> {
//     let lightColor = document.getElementById("lights").value;

//     if (lightColor == 'Green') {
//         console.log('GO')
//     }
    
//     else if (lightColor == 'yellow') {
//         console.log('WAIT')
//     }
    
//     else if (lightColor == 'red') {
//         console.log('STOP')
//     }
    
//     else {
//         console.log('LIGHTS NOT WORKING')
//     }
// })


/* 

EXERCISE

- You are tasked with creating the program to perform the following:

*/

// QUESTION ONE 

// document.getElementById("getNumber").addEventListener("click", ()=> {
//     let numberP = document.getElementById("number").value;

//     if (numberP >= 0) {
//         if (numberP == 0) {
//             console.log("The number is zero");
//         } else {
//             console.log("The number is positive");
//         }
//     } else {
//         console.log("The number is negative");
//     }
// })


// QUESTION TWO 

// document.getElementById("getNumber").addEventListener("click", ()=> {
//     let numberP = document.getElementById("number").value;

//     if (numberP % 2 == 0) {
//         console.log("The number is even"); 
//     }
//     else {
//         console.log("The number is odd");
//     }
// })

// QUESTION THREE 

// document.getElementById("getNumber").addEventListener("click", ()=> {
//     let numberP = document.getElementById("numberP").value;
//     let numberQ = document.getElementById("numberQ").value;

//     if (numberP > numberQ) {
//         console.log("The numberP is greater than numberQ");
//     } 
//     else if (numberQ > numberP) {
//         console.log("The numberQ is greater than numberP");
//     }
//     else {
//         console.log("They are equal");
//     }
    
// })


// QUESTION FOUR 

document.getElementById("getNumber").addEventListener("click", ()=> {
    let numberP = document.getElementById("numberP").value;

    if (numberP >= 80) {
        console.log("The grade is A");
    } 
    else if (numberP >= 70) {
        console.log("The grade is B");
    }
    else if (numberP >= 60){
        console.log("The grade is C");
    }
    else if (numberP >= 50){
        console.log("The grade is D");
    }
    else if (numberP >= 40){
        console.log("The grade is E");
    }
    else if (numberP >= 30){
        console.log("The grade is F");
    }
    
})
