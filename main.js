
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const determineConverter = (e) => {
    const inputValue = document.getElementById("tempInput").value;
    console.log(inputValue);
    let unit = "";
    if (document.getElementById("C").checked) {
        unit = "C"
    }else {
        unit = "F"
    }
    console.log(unit);
    printToDom("tempOutput", inputValue);
  }


const buttonEvents = () => {
    document.getElementById('convertBtn').addEventListener('click', determineConverter);
};

const init = () => {
    buttonEvents();
};

init();