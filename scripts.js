var buttons = document.getElementsByClassName('button');
for (var i = 0; i < buttons.length; i++) {
  console.log(i);
  alert(buttons[i].innerText);
}