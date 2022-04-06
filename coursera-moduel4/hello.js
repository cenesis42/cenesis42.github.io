(function(window){
  let helloSpeaker = {};
  let speakWord = "GoodBye";
  helloSpeaker.speak = function(name){
    console.log(speakWord + " " + name);
  };
  window.helloSpeaker = helloSpeaker;
})(window);