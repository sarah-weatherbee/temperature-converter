
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const toCelcius = (temp) => {
    const finalC =  (temp - 32) * 5/9;
    domStringBuilder(finalC, "C");
}

const toFahrenheit = (temp) => {
   const finalF = (temp * 9/5) + 32;
   domStringBuilder(finalF, "F");
 }

const clear = () => {
    let input = document.getElementById("tempInput");
    input.value = "";
    let output =document.getElementById("tempOutput");
    output.innerHTML = "";
}

const domStringBuilder = (finalTemp, unit) => {
    const domString = `<h2>${finalTemp} degrees ${unit}</h2>`
    printToDom("tempOutput", domString);
}

const determineConverter = (e) => {
    let inputValue = document.getElementById("tempInput").value;
    if (inputValue.length === 0 || isNaN(Number(inputValue))) {
        alert("type a number, please")
        clear()
    }
    else {
        if (document.getElementById("C").checked) {
            toCelcius (inputValue) 
        }else {
            toFahrenheit (inputValue)
        }
    }
    
  }

const buttonEvents = () => {
    document.getElementById('convertBtn').addEventListener('click', determineConverter);
    document.getElementById('clearBtn').addEventListener('click', clear);
};

const init = () => {
    buttonEvents();
};

init();