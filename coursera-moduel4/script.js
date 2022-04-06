(function () {
let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (let j = 0; j < names.length; j++) {

  
     var firstLetter = names[j].charAt(0).toLowerCase();   
    if (firstLetter === 'J') {
       byeSpeaker.speak(names[j]);
    } else {
      helloSpeaker.speak(names[j]);
    }
  }
})();
