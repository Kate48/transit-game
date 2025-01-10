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
        canInputs[i].value = canStations[canInputs[i].id][1];
    }
    for( let i=0; i<expoInputs.length; i++) {
        expoInputs[i].value = expoStations[expoInputs[i].id][1];
    }
    for( let i=0; i<millInputs.length; i++) {
        millInputs[i].value = millStations[millInputs[i].id][1];
    }

});


/****** CANADALINE ***** */

const canStations = {
    'user-input-1': ['waterfront', 'Waterfront'],
    'user-input-2': ['city cen', 'Vancouver City Center'],
    'user-input-3': ['yaletown', 'Yaletown-Roundhouse'],
    'user-input-4': ['olympic village', 'Olympic Village'],
    'user-input-5': ['broadway', 'Broadway-City Hall'],
    'user-input-6': ['king ed', 'King Edward'],
    'user-input-7': ['oakridge', 'Oakridge-41st'],
    'user-input-8': ['langara', 'Langara-49th'],
    'user-input-9': ['marine', 'Marine Drive'],
    'user-input-10': ['bridgeport', 'Bridgeport'],
    'user-input-11': ['templeton', 'Templeton'],
    'user-input-12': ['sea island', 'Sea Island'],
    'user-input-13': ['yvr', 'YVR-Airport'],
    'user-input-14': ['capstan', 'Capstan'],
    'user-input-15': ['aberdeen', 'Aberdeen'],
    'user-input-16': ['lansdowne', 'Lansdowne'],
    'user-input-17': ['brighouse', 'Richmond-Brighouse'],
};


const correctStatusCan = {};

function checkInputCorrectCan(event) {
    const inputElem = event.target; // The element that triggered the event
    const targetWord = canStations[inputElem.id][0]; // Get the target word based on the ID

    if (inputElem.value.toLowerCase().includes(targetWord)) {
        inputElem.style.backgroundColor = 'rgba(14, 144, 180, 0.3)';
        inputElem.style.border = '3.5px solid rgb(14, 144, 180)';
        inputElem.value = canStations[inputElem.id][1];
        correctStatusCan[inputElem.id] = true;
    } else {
        inputElem.style.border = '2px solid red';
        correctStatusCan[inputElem.id] = false;
    }

    if (Object.values(correctStatusCan).every(status => status)) {
        alert("You got the Canadaline!");
    }

    const numCorrect = Object.values(correctStatusCan).filter(item => item === true).length;
    console.log(numCorrect);
    canScore = "Canada Line ".concat(numCorrect.toString(), "/17");
    document.getElementById("can-score").innerHTML = canScore;
}

Object.keys(canStations).forEach(inputId => {
    const inputElement = document.getElementById(inputId);
    correctStatusCan[inputId] = false;
    inputElement.addEventListener('input', checkInputCorrectCan);
    inputElement.addEventListener('textarea', checkInputCorrectCan);
});



/********* EXPO LINE ********/

const expoStations = {
    'user-input-18': ['burrard', 'Burrard' ],
    'user-input-19': ['granville', 'Granville'],
    'user-input-20': ['stadium', 'Stadium-Chinatown'],
    'user-input-21': ['main', 'Main Street-Science World'],
    'user-input-22': ['commercial', 'Commercial-Broadway'],
    'user-input-23': ['nanaimo', 'Nanaimo'],
    'user-input-24': ['29th', '29th'],
    'user-input-25': ['joyce', 'Joyce-Collingwood'],
    'user-input-26': ['patterson', 'Patterson'],
    'user-input-27': ['metrotown', 'Metrotown'],
    'user-input-28': ['royal oak', 'Royal Oak'],
    'user-input-29': ['edmonds', 'Edmonds'],
    'user-input-30': ['22nd', '22nd'],
    'user-input-31': ['new west', 'New Westminster'],
    'user-input-32': ['columbia', 'Columbia'],
    'user-input-33': ['sapperton', 'Sapperton'],
    'user-input-34': ['braid', 'Braid'],
    'user-input-35': ['scott', 'Scott Road'],
    'user-input-36': ['gateway', 'Gateway'],
    'user-input-37': ['surrey cen', 'Surrey Central'],
    'user-input-38': ['king george', 'King George'],
};


const correctStatusExpo = {};

function checkInputCorrectExpo(event) {
    const inputElem = event.target; // The element that triggered the event
    const targetWord = expoStations[inputElem.id][0]; // Get the target word based on the ID

    if (inputElem.value.toLowerCase().includes(targetWord)) {
        inputElem.style.backgroundColor = 'rgba(3, 84, 146, 0.3)';
        inputElem.style.border = '3.5px solid rgb(3, 84, 146)';
        inputElem.value = expoStations[inputElem.id][1];
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
    'user-input-50': ['moody cen', 'Moody Centre'],
    'user-input-51': ['inlet cen', 'Inlet Centre'],
    'user-input-52': ['coquitlam cen', 'Coquitlam Central'],
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
        inputElem.style.border = '3.5px solid red';
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


