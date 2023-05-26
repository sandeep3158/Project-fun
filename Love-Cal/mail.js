const firebaseConfig = {
  apiKey: "AIzaSyC1g6BfgLomTCNPxfybIyyfWOroMI2gHA0",
  authDomain: "love-calculator-26d23.firebaseapp.com",
  databaseURL: "https://love-calculator-26d23-default-rtdb.firebaseio.com",
  projectId: "love-calculator-26d23",
  storageBucket: "love-calculator-26d23.appspot.com",
  messagingSenderId: "231930314980",
  appId: "1:231930314980:web:80c1890dbf5afbb1c16cf1"
};
//initilize firebase
firebase.initializeApp(firebaseConfig);
//reference for database
const contactFormDB = firebase.database().ref("contactForm");

document.getElementById('contactForm').addEventListener("submit", show);

function show(e) {
  e.preventDefault();
  let result = Math.floor(Math.random() * 101);
  const name1 = getElementval('name1');
  const name2 = getElementval('name2');
  saveMessages(name1, name2, result);
  let emote = '';
  if (result < 30)
    emote = '&#128542;'
  else if (result < 50)
    emote = '&#128516;'
  else if (result <= 80)
    emote = '&#128525'
  else if (result <= 100)
    emote = '&#128151'
  document.getElementById('result').innerHTML = result + "% " + emote;
  setTimeout(() => {
    document.getElementById('contactForm').reset();
    document.getElementById('result').innerHTML = "Love";
  }, 2000);
}

const saveMessages = (name1, name2, result) => {
  const newContactForm = contactFormDB.push();
  newContactForm.set({
    name1: name1,
    name2: name2,
    result: result
  });
};
const getElementval = (id) => {
  return document.getElementById(id).value;
};


