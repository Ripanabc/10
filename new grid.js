document.querySelectorAll('.key').forEach(key => key.addEventListener('transitionend', e => e.target.classList.remove('playing')))
document.querySelectorAll("section").forEach(a => a.addEventListener("click", e => playAudioByCode(e.currentTarget.dataset.key)));
window.addEventListener('keydown', e => playAudioByCode(e.keyCode));

function playAudioByCode(code){
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    //here abort if you press for example "q" else an error is thrown
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    document.querySelector(`.key[data-key="${code}"]`).classList.add('playing'); 
}