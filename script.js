
function playSound(e) {
    const keyCode = e.keyCode;
    const keyElement = document.querySelector(`div[data-key="${keyCode}"]`);
  
    if (!keyElement) return;
  
    const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
    audioElement.currentTime = 0;
    audioElement.play();

    const keyShortcut = document.getElementsByClassName(`${keyCode}`);

    console.log(keyShortcut);

    keyElement.style.backgroundColor = "#800000";

    setTimeout(() => {
        keyElement.style.backgroundColor = "";
    },100);
};

window.addEventListener('keydown', playSound);

