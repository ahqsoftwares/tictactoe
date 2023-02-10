let state: string[] = [
         "", "", "",
         "", "", "",
         "", "", ""
];
let hooks: Function[] = [];

export default function getState() {
         return state;
}

export function setState(reducer: (currentState: string[]) => string[] | string[]) {
         let newState: string[] = [];

         if (typeof(reducer) === "function") 
                  newState = reducer(state)
         else 
                  newState = state

         state = newState;

         hooks.forEach((callback) => callback(newState));
}

export function registerHook(callback: (state: string[]) => void) {
         hooks.push(callback);
}