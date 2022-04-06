(function(window){
  let byeSpeaker = {};
  let speakWord = "GoodBye";
  byeSpeaker.speak = function(name){
    console.log(speakWord + " " + name);
  };
  window.byeSpeaker = byeSpeaker;
})(window);