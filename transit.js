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
    const boxes = document.getElementById('boxes');
    boxes.style.display = 'none';
});


/****** CANADALINE ***** */

const canStations = {
    'user-input-1': 'waterfront',
    'user-input-2': 'city cen', 
    'user-input-3': 'yaletown', 
    'user-input-4': 'olympic village', 
    'user-input-5': 'broadway',
    'user-input-6': 'king edward',
    'user-input-7': 'oakridge',
    'user-input-8': 'langara',
    'user-input-9': 'marine dr',
    'user-input-10': 'bridgeport',
    'user-input-11': 'templeton',
    'user-input-12': 'sea island',
    'user-input-13': 'yvr',
    'user-input-14': 'capstan',
    'user-input-15': 'aberdeen',
    'user-input-16': 'lansdowne',
    'user-input-17': 'brighouse',
};


const correctStatusCan = {};

function checkInputCorrectCan(event) {
    const inputElem = event.target; // The element that triggered the event
    const targetWord = canStations[inputElem.id]; // Get the target word based on the ID

    if (inputElem.value.toLowerCase().includes(targetWord)) {
        inputElem.style.border = '3.5px solid #0e90b4';
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
    canScore = "Canadaline ".concat(numCorrect.toString(), "/17");
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
    'user-input-18': 'burrard', 
    'user-input-19': 'granville', 
    'user-input-20': 'stadium', 
    'user-input-21': 'main st',
    'user-input-22': 'commercial',
    'user-input-23': 'nanaimo',
    'user-input-24': '29th',
    'user-input-25': 'joyce',
    'user-input-26': 'patterson',
    'user-input-27': 'metrotown',
    'user-input-28': 'royal oak',
    'user-input-29': 'edmonds',
    'user-input-30': '22nd',
    'user-input-31': 'new west',
    'user-input-32': 'columbia',
    'user-input-33': 'sapperton', 
    'user-input-34': 'braid',
    'user-input-35': 'scott',
    'user-input-36': 'gateway',
    'user-input-37': 'surrey cen',
    'user-input-38': 'king george',
};


const correctStatusExpo = {};

function checkInputCorrectExpo(event) {
    const inputElem = event.target; // The element that triggered the event
    const targetWord = expoStations[inputElem.id]; // Get the target word based on the ID

    if (inputElem.value.toLowerCase().includes(targetWord)) {
        inputElem.style.border = '3.5px solid #035492';
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
    'user-input-39': 'vcc clark', 
    'user-input-40': 'renfrew', 
    'user-input-41': 'rupert', 
    'user-input-42': 'gilmore',
    'user-input-43': 'brentwood',
    'user-input-44': 'holdom',
    'user-input-45': 'sperling',
    'user-input-46': 'lake city',
    'user-input-47': 'production',
    'user-input-48': 'lougheed',
    'user-input-49': 'burquitlam',
    'user-input-50': 'moody cen',
    'user-input-51': 'inlet cen',
    'user-input-52': 'coquitlam cen',
    'user-input-53': 'lincoln',
    'user-input-54': 'lafarge',
};

const correctStatusMill = {};

function checkInputCorrectMill(event) {
    const inputElem = event.target; // The element that triggered the event
    const targetWord = millStations[inputElem.id]; // Get the target word based on the ID

    if (inputElem.value.toLowerCase().includes(targetWord)) {
        inputElem.style.border = '3.5px solid #facd38';
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



