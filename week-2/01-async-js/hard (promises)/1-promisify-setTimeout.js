/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


//here n is passed in seconds therefore i converted it into miliseconds by multiplying it be 1000
function wait(n) {

    return new Promise(function(resovle){
        setTimeout(() => {
           resovle(); 
        }, n*1000);
    })
}

module.exports = wait;
