const play = document.getElementById('play-button');
const startScreen = document.getElementById('title-screen');
const playScreen = document.getElementById('game-screen');

playScreen.style.display = 'none';

/** hide start-screen, show play-screen */
play.addEventListener('click', () => {
    startScreen.style.display = 'none';
    playScreen.style.display = 'block';
});


const giveUp = document.getElementById('end-button');

giveUp.addEventListener('click', () => {

    const containers = document.querySelectorAll('.input-boxes');
    const canInputs = containers[0].querySelectorAll('input, textarea');
    const expoInputs = containers[1].querySelectorAll('input, textarea');
    const millInputs = containers[2].querySelectorAll('input, textarea');

    for( let i=0; i<canInputs.length; i++) {
        canInputs[i].value = canStations[canInputs[i].id][0];
    }
    for( let i=0; i<expoInputs.length; i++) {
        expoInputs[i].value = expoStations[expoInputs[i].id][0];
    }
    for( let i=0; i<millInputs.length; i++) {
        millInputs[i].value = millStations[millInputs[i].id][0];
    }

});


/****** CANADALINE ***** */

const canStations = {
    'user-input-1': ['Waterfront', 'waterfront', 'null'],
    'user-input-2': ['Vancouver City Center', 'city cen'],
    'user-input-3': ['Yaletown-Roundhouse', 'yaletown', 'roundhouse'],
    'user-input-4': ['Olympic Village', 'olympic', 'null'],
    'user-input-5': ['Broadway-City Hall', 'broadway', 'city hall'],
    'user-input-6': ['King Edward', 'king ed', 'null'],
    'user-input-7': ['Oakridge-41st', 'oakridge', '41st'],
    'user-input-8': ['Langara-49th', 'langara', '49th'],
    'user-input-9': ['Marine Drive', 'marine', 'null'],
    'user-input-10': ['Bridgeport', 'bridgeport', 'null'],
    'user-input-11': ['Templeton', 'templeton', 'null'],
    'user-input-12': ['Sea Island', 'sea island', 'null'],
    'user-input-13': ['YVR-Airport', 'yvr', 'airport'],
    'user-input-14': ['Capstan', 'capstan', 'null'],
    'user-input-15': ['Aberdeen', 'aberdeen', 'null'],
    'user-input-16': ['Lansdowne', 'lansdowne', 'null'],
    'user-input-17': ['Richmond-Brighouse', 'brighouse', 'null'],
};


const correctStatusCan = {};

function checkInputCorrectCan(event) {
    const inputElem = event.target; // The element that triggered the event
    const targetWord1 = canStations[inputElem.id][1]; // Get the target word based on the ID
    const targetWord2 = canStations[inputElem.id][2];

    if (inputElem.value.toLowerCase().includes(targetWord1) || inputElem.value.toLowerCase().includes(targetWord2)) {
        inputElem.style.backgroundColor = 'rgba(14, 144, 180, 0.3)';
        inputElem.style.border = '3.5px solid rgb(14, 144, 180)';
        inputElem.value = canStations[inputElem.id][0];
        correctStatusCan[inputElem.id] = true;
    } else {
        inputElem.style.border = '2px solid red';
        correctStatusCan[inputElem.id] = false;
    }

    const numCorrect = Object.values(correctStatusCan).filter(item => item === true).length;
    console.log(numCorrect);
    canScore = "Canada Line ".concat(numCorrect.toString(), "/17");
    document.getElementById("can-score").innerHTML = canScore;

    if (Object.values(correctStatusCan).every(status => status)) {
        alert("You got the Canadaline!");
    }
}

Object.keys(canStations).forEach(inputId => {
    const inputElement = document.getElementById(inputId);
    correctStatusCan[inputId] = false;
    inputElement.addEventListener('input', checkInputCorrectCan);
    inputElement.addEventListener('textarea', checkInputCorrectCan);
});



/********* EXPO LINE ********/

const expoStations = {
    'user-input-18': ['Burrard', 'burrard', 'null'],
    'user-input-19': ['Granville' 'granville', 'null'],
    'user-input-20': ['Stadium-Chinatown', 'stadium', 'chinatown'],
    'user-input-21': ['Main Street-Science World', 'science world', 'main'],
    'user-input-22': ['Commercial-Broadway', 'commercial', 'null'],
    'user-input-23': ['Nanaimo', 'naniamo', 'null'],
    'user-input-24': ['29th', '29th', 'null'],
    'user-input-25': ['Joyce-Collingwood', 'joyce', 'collingwood'],
    'user-input-26': ['Patterson', 'patterson', 'null'],
    'user-input-27': ['Metrotown' 'metrotown', 'null'],
    'user-input-28': ['Royal Oak', 'royal', 'oak'],
    'user-input-29': ['Edmonds', 'edmonds', 'null'],
    'user-input-30': ['22nd', '22nd', 'null'],
    'user-input-31': ['New Westminster', 'new west', 'null'],
    'user-input-32': ['Columbia', 'columbia', 'null'],
    'user-input-33': ['Sapperton', 'sapperton', 'null'],
    'user-input-34': ['Braid', 'braid', 'null'],
    'user-input-35': ['Scott Road', 'scott', 'null'],
    'user-input-36': ['Gateway', 'gateway', 'null'],
    'user-input-37': ['Surrey Central', 'surrey', 'null'],
    'user-input-38': ['King George', 'king george', 'null'],
};


const correctStatusExpo = {};

function checkInputCorrectExpo(event) {
    const inputElem = event.target; // The element that triggered the event
    const targetWord = expoStations[inputElem.id][2]; // Get the target word based on the ID

    if (inputElem.value.toLowerCase().includes(targetWord)) {
        inputElem.style.backgroundColor = 'rgba(3, 84, 146, 0.3)';
        inputElem.style.border = '3.5px solid rgb(3, 84, 146)';
        inputElem.value = expoStations[inputElem.id][0]; // correct answer 
        correctStatusExpo[inputElem.id] = true;
    } else {
        inputElem.style.border = '2px solid red';
        correctStatusExpo[inputElem.id] = false;
    }

    const numCorrect = Object.values(correctStatusExpo).filter(item => item === true).length;
    console.log(numCorrect);
    expoScore = "Expo Line ".concat(numCorrect.toString(), "/21");
    document.getElementById("expo-score").innerHTML = expoScore;

    if (Object.values(correctStatusExpo).every(status => status)) {
        alert("You got the Expo Line!");
    }
}

Object.keys(expoStations).forEach(inputId => {
    const inputElement = document.getElementById(inputId);
    correctStatusExpo[inputId] = false;
    inputElement.addEventListener('input', checkInputCorrectExpo);
    inputElement.addEventListener('textarea', checkInputCorrectExpo);
});




/********* MILLEMIUM LINE ********/

const millStations = {
    'user-input-39': ['vcc', 'VCC-Clark'],
    'user-input-40': ['renfrew', 'Renfrew'],
    'user-input-41': ['rupert', 'Rupert'],
    'user-input-42': ['gilmore', 'Gilmore'],
    'user-input-43': ['brentwood', 'Brentwood Town Centre'],
    'user-input-44': ['holdom', 'Holdom'],
    'user-input-45': ['sperling', 'Sperling-Burnaby Lake'],
    'user-input-46': ['lake city', 'Lake City Way'],
    'user-input-47': ['production', 'Production Way-University'],
    'user-input-48': ['lougheed', 'Lougheed Town Centre'],
    'user-input-49': ['burquitlam', 'Burquitlam'],
    'user-input-50': ['moody', 'Moody Centre'],
    'user-input-51': ['inlet', 'Inlet Centre'],
    'user-input-52': ['coquitlam', 'Coquitlam Central'],
    'user-input-53': ['lincoln', 'Lincoln'],
    'user-input-54': ['lafarge', 'Lafarge Lake-Douglas'],
};

const correctStatusMill = {};

function checkInputCorrectMill(event) {
    const inputElem = event.target; // The element that triggered the event
    const targetWord = millStations[inputElem.id][0]; // Get the target word based on the ID

    if (inputElem.value.toLowerCase().includes(targetWord)) {
        inputElem.style.backgroundColor = 'rgba(250, 205, 56, 0.5)';
        inputElem.style.border = '3.5px solid rgb(250, 205, 56)';
        inputElem.value = millStations[inputElem.id][1];
        correctStatusMill[inputElem.id] = true;
    } else {
        inputElem.style.border = '2px solid red';
        correctStatusMill[inputElem.id] = false;
    }

    const numCorrect = Object.values(correctStatusMill).filter(item => item === true).length;
    console.log(numCorrect);
    millScore = "Millenium Line ".concat(numCorrect.toString(), "/16");
    document.getElementById("mill-score").innerHTML = millScore;

    if (Object.values(correctStatusMill).every(status => status)) {
        alert("You got the Millenium Line!");
    }
}

Object.keys(millStations).forEach(inputId => {
    const inputElement = document.getElementById(inputId);
    correctStatusMill[inputId] = false;
    inputElement.addEventListener('input', checkInputCorrectMill);
    inputElement.addEventListener('textarea', checkInputCorrectMill);
});


