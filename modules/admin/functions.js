


function validateInput(value){
    const isUserValid = String(value).match(/[\w]+/)
    var isFormValid = false;
    console.log(isUserValid)
    if(isUserValid.at(0) != isUserValid.input){
        console.log("Needs to be alphanumeric")
        isFormValid = false
    }
    else{
        console.log("Input Valid!")
        isFormValid = true;
    }

    var submitObj = {
        input: isUserValid.input,
        formValidated: isFormValid
    }
    console.log(submitObj)
    return submitObj;
}


export {validateInput}