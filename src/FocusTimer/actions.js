import state from './state.js';
import * as timer from './timer.js';
import * as el from './elements.js';
import * as sounds from './sounds.js';

el.minusFiveButton.addEventListener('click', () => {
    timer.subtractFiveSeconds();
});

el.moreFiveButton.addEventListener('click', () => {
    timer.addFiveSeconds();
});

function removeActiveButtons(){
    el.forest.classList.remove('active');
    el.rain.classList.remove('active');
    el.coffe.classList.remove('active');
    el.fireplace.classList.remove('active');
}

el.forest.addEventListener('click', function () {
    removeActiveButtons();
    if(state.currentSound === 'forest') {
        sounds.floresta.pause(); // Pausa o som se já estiver tocando
        state.currentSound = null;
    } else {
        sounds.floresta.play();
        state.currentSound = 'forest';
        el.forest.classList.add('active');
    }
});

el.rain.addEventListener('click', function(){
    removeActiveButtons();
    if(state.currentSound === 'rain') {
        sounds.chuva.pause();
        state.currentSound = null;
    } else {
        sounds.chuva.play();
        state.currentSound = 'rain';
        el.rain.classList.add('active');
    }
});

el.coffe.addEventListener('click', function(){
    removeActiveButtons();
    if(state.currentSound === 'coffe') {
        sounds.cafeteria.pause();
        state.currentSound = null;
    } else {
        sounds.cafeteria.play();
        state.currentSound = 'coffe';
        el.coffe.classList.add('active');
    }
});

el.fireplace.addEventListener('click', function(){
    removeActiveButtons();
    if(state.currentSound === 'fireplace') {
        sounds.lareira.pause();
        state.currentSound = null;
    } else {
        sounds.lareira.play();
        state.currentSound = 'fireplace';
        el.fireplace.classList.add('active');
    }
});

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running');
    timer.countdown();
    sounds.buttonPressAudio.play();
};

export function reset(){
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
    sounds.buttonPressAudio.play();
};

export function set(){
    el.minutes.setAttribute('contenteditable', true);
    el.minutes.focus();
};

export function toggleMusic(){
    state.isMute = document.documentElement.classList.toggle('music-on');

    if(state.isMute){
        sounds.bgAudio.play();
        return;
    }

    sounds.bgAudio.pause();
};