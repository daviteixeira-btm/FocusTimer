import * as actions from "./actions.js";
import { controls } from "./elements.js";

export function registerControls(){
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action;

        if(typeof actions[action] != "function"){
            return;
        }

        actions[action]()
    });
}