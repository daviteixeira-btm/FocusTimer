import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";
import { kitchenTimer } from "./sounds.js";

export function subtractFiveSeconds() {
    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);

    let totalSeconds = minutes * 60 + seconds;
    totalSeconds -= 5;

    if (totalSeconds < 0) {
        reset();
        kitchenTimer.play();
        return;
    }

    minutes = Math.floor(totalSeconds / 60);
    seconds = totalSeconds % 60;

    updateDisplay(minutes, seconds);
}

export function addFiveSeconds() {
    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);

    let totalSeconds = minutes * 60 + seconds;
    totalSeconds += 5;

    minutes = Math.floor(totalSeconds / 60);
    seconds = totalSeconds % 60;

    if (minutes >= 100) {
        // Limite máximo de 99:59
        return;
    }

    updateDisplay(minutes, seconds);
}

export function countdown(){

    clearTimeout(state.countdownId);

    if(!state.isRunning){
        return;
    }

    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);

    seconds--;

    if(seconds < 0){
        seconds = 59;
        minutes--;
    }

    if(minutes < 0){
        reset();
        kitchenTimer.play();
        return;
    }

    updateDisplay(minutes, seconds);

    state.countdownId = setTimeout(() => countdown(), 1000);
};

export function updateDisplay(minutes, seconds){
    // ?? = nullish coalesing operator
    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    el.minutes.textContent = String(minutes).padStart(2, "0");
    el.seconds.textContent = String(seconds).padStart(2, "0");
};