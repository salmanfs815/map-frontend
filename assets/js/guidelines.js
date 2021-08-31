
function openTab(linkId, contentId) {
  // remove 'active' class from buttons
  var buttons = document.getElementsByClassName('tabLink');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }
  // add 'active' class to active button
  document.getElementById(linkId).classList.add('active')

  // hide tabbed content
  var content = document.getElementsByClassName('tabContent');
  for (var j = 0; j < content.length; j++) {
    content[j].style.display = 'none';
  }
  // show active tab
  document.getElementById(contentId).style.display = 'block';
}

document.getElementById('formatButton').addEventListener('click', () => {
  openTab('formatButton', 'submissionFormat');
});

document.getElementById('categoriesButton').addEventListener('click', () => {
  openTab('categoriesButton', 'submissionCategories');
});

document.getElementById('confessionsButton').addEventListener('click', () => {
  openTab('confessionsButton', 'anonymousConfessions');
});

document.getElementById('mediaButton').addEventListener('click', () => {
  openTab('mediaButton', 'mixedMedia');
});
