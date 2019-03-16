
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

const domStringBuilder = (finalTemp, unit) => {
    const domString = `<h2>${finalTemp} degrees ${unit}</h2>`
    printToDom("tempOutput", domString);
}

const determineConverter = (e) => {
    const inputValue = document.getElementById("tempInput").value;
    if (document.getElementById("C").checked) {
        toCelcius (inputValue) 
    }else {
        toFahrenheit (inputValue)
    }
  }


const buttonEvents = () => {
    document.getElementById('convertBtn').addEventListener('click', determineConverter);
};

const init = () => {
    buttonEvents();
};

init();