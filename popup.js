// var ele = document.getElementsByClassName('chat-line__message-container tw-relative');

// for (var i = 0; i < ele.length; i++) {
    
//   }

function switcher(user, pass){
  window.open("https://www.geoguessr.com/signout?target=%2F");
  window.open("https://www.geoguessr.com/signin");
  document.getElementsByName(username).value = user;
  document.getElementsByName(password).value = pass;
  document.getElementsByClassName("button button--medium button--primary")[0].click();
  return 0;
}
