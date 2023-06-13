function convertTemp(){
    // Get Value of Input Degree
    let degreeVal = document.getElementById('input-temp').value;
    // Get Value of Selected Convert Type
    let convertTo = document.getElementById('input-type').value;
    
    // Check Value is Blank or Not of Degree and Convert Type
    if(!degreeVal){
        alert('Please Enter Value in degree');
        return;
    }
    if(!convertTo){
        alert('Please Select a Type to Convert');
        return;
    }

    let result = '';

    let outputField = document.getElementById('output-temp');

    // Convert Temperature according to Selected Convert Type
    if(convertTo == 'Fahrenheit'){
        result = (Number(degreeVal) + 273.15) +" "+ convertTo;
    }else if(convertTo == 'Kelvin'){
        result = (Number(degreeVal) * 9 / 5) + 32 +" "+ convertTo;
    }

    // Set Output Value in Result Field
    outputField.value = result;
}