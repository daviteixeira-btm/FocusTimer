import * as actions from "./actions";
import { controls } from "./elements";

export function registerControls(){
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action;

        if(typeof actions[action] != "function"){
            return;
        }

        actions[action]()
    });
}