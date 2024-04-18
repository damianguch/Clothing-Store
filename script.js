/**
 * toggle between displaying an eye icon (indicating visibility of a
 * password) and an eye-slash icon (indicating hiding of a password)
 */
function eyeToggle() {
  let eyeHide = document.getElementById('eye-slash-icon');
  let eyeShow = document.getElementById('eye-icon');
  let keyDisplay = document.getElementById('key-display');

  let computedStyle = window.getComputedStyle(eyeHide);
  let displayProperty = computedStyle.getPropertyValue('display');

  console.log(displayProperty);

  //By default, eyeHide's display is block
  //toggling the visibility of the password text in an input field

  if (eyeHide.style.display == 'none') {
    eyeHide.style.display = 'flex';
    eyeShow.style.display = 'none';
    //toggle the type attribute of the password input field
    keyDisplay.type = 'password';
  } else {
    eyeHide.style.display = 'none';
    eyeShow.style.display = 'flex';
    //toggle the type attribute of the password input field
    keyDisplay.type = 'text';
  }
}

function loginProcess() {
  let inputName = document.getElementById('input-name');
  let linkBtn = document.getElementById('link-btn');
  let statusBtn = document.getElementById('status-btn');
  let formTitle = document.getElementById('form-header');

  if (inputName.style.display == 'none') {
    inputName.style.display = 'flex';
    formTitle.textContent = 'SIGN UP';
    linkBtn.textContent = 'Already a user?';
    statusBtn.textContent = 'to login in!';
  } else {
    inputName.style.display = 'none';
    formTitle.textContent = 'LOG IN';
    linkBtn.textContent = 'Not a user yet?';
    statusBtn.textContent = 'to sign up!';
  }
}
