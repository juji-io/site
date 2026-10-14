document.addEventListener("DOMContentLoaded", function (event) {
  // array with texts to type in typewriter
    var dataText = ["Why should you hire one?", "What can it do for you?",
		   "How easy to set one up?"];

  var timeBetweenLetters = 100;
  var timeBetweenWords = 500;
  var timeToWaitBeforeDeleting = 2000;

  var element = document.getElementById("slide-text");
  if (!element) return;

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriterForward(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      element.innerHTML =
        text.substring(0, i + 1) +
        '<span class="type-writer" aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      return setTimeout(function () {
        typeWriterForward(text, i + 1, fnCallback);
      }, timeBetweenLetters);
    }
    // text finished, call callback if there is a callback function

    // call callback after timeout
    //starts the removal of characters
    setTimeout(function () {
      typeWriterBackward(text, i, fnCallback);
    }, timeToWaitBeforeDeleting);
  }

  // remove one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriterBackward(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i >= 0) {
      // remove next character from h1
      element.innerHTML =
        text.substring(0, i) +
        '<span class="type-writer" aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      return setTimeout(function () {
        typeWriterBackward(text, i - 1, fnCallback);
      }, timeBetweenLetters);
    }
    // text finished, call callback if there is a callback function

    // call callback after timeout
    setTimeout(fnCallback, timeBetweenWords);
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    typeWriterForward(dataText[i], 0, function () {
      // after callback (and whole text has been animated), start next text
      StartTextAnimation((i + 1) % dataText.length);
    });
  }

    StartTextAnimation(0);


    function openChatWindow() {

      // console.log("click");
      var chatWindow = document.getElementById("juji-chatbot");
      var jujiIcon   = document.getElementById("jujibot-icon");
      var bubble     = document.getElementById("jujibot-bubble");

      jujiIcon.classList.remove("show-icon");
      jujiIcon.classList.add("hide-icon");
      chatWindow.classList.remove("hide-content");
      chatWindow.classList.add("show-content");
      bubble.style.display = "none";

  }

  function addListener (el, e, h) {
    if (el.addEventListener) {
        el.addEventListener(e, h, false);
    }
    else if (el.attachEvent) {
        el.attachEvent('on' + e, h);
    }
    else {
        el['on' + e] = h;
    }
  };

  /*addListener(document.getElementById("home-start-chat-btn"), 'click', openChatWindow);*/


});
