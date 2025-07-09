// Select elements
const video = document.getElementById('video');
const toggle = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const skipButtons = document.querySelectorAll('[data-skip]');
const volumeSlider = document.querySelector('input[name="volume"]');
const speedSlider = document.querySelector('input[name="playbackRate"]');

// Play/pause toggle
function togglePlay() {
    video.paused ? video.play() : video.pause();
}

function updateButton() {
    toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Skip buttons
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

// Update progress bar
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

// Volume & speed sliders
volumeSlider.addEventListener('input', () => {
    video.volume = volumeSlider.value;
});

speedSlider.addEventListener('input', () => {
    video.playbackRate = speedSlider.value;
});

// Event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click', skip));