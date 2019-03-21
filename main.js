
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
   // const domString = `<h2>${finalTemp} degrees ${unit}</h2>`
   // printToDom("tempOutput", domString);
    if (finalTemp > 90 && unit == "F" || finalTemp > 32 && unit == "C") {
        let domString = `<h2 class="red">${finalTemp} degrees ${unit}</h2>`
        printToDom("tempOutput", domString);
    } else if (finalTemp < 32 && unit == "F" || finalTemp < 0 && unit == "C") {
        let domString = `<h2 class="blue">${finalTemp} degrees ${unit}</h2>`
        printToDom("tempOutput", domString);
    } else if (32 < finalTemp < 90 && unit == "F" || 0 < finalTemp < 32 && unit == "C") {
        let domString = `<h2 class="green">${finalTemp} degrees ${unit}</h2>`
        printToDom("tempOutput", domString);
    }
}


const determineConverter = (e) => {
    let inputValue = document.getElementById("tempInput").value;
    if (inputValue.length === 0 || isNaN(Number(inputValue))) {
        clear()
    }
    else {
        if (e.key === "Enter") {
        
            if (document.getElementById("C").checked) {
                toCelcius (inputValue) 
            }else {
                toFahrenheit (inputValue)
            }
            }
        } 
    }
const determineConverterClick = (e) => {
        let inputValue = document.getElementById("tempInput").value;
        if (inputValue.length === 0 || isNaN(Number(inputValue))) {
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



//add keypress event
//keypress should run determineConverter function
  //in JavaScript, using the addEventListener() method:
//object.addEventListener("keypress", myScript);

const buttonEvents = () => {
    document.getElementById('convertBtn').addEventListener('click', determineConverterClick);
    document.getElementById('clearBtn').addEventListener('click', clear);
};

const keyPressEvent = () => {
    document.getElementById('tempInput').addEventListener('keypress', determineConverter);
};

const init = () => {
    buttonEvents();
    keyPressEvent();
};

init();