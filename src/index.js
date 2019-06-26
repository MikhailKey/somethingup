import {createStore} from 'redux';
const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state +1;
        case 'DEC':
            return state -1;
        case 'RES':
            return state *0;
            default: 
            return state;
    }
}
const store = createStore(reducer);


document.getElementById('inc').addEventListener('click', () => {
    store.dispatch({type: 'INC'})
});
document.getElementById('dec').addEventListener('click', () => {
    store.dispatch({type: 'DEC'})
});
document.getElementById('res').addEventListener('click', () => {
    store.dispatch({type: 'RES'})
});


const update = () => {
    document.getElementById('counter').textContent = store.getState();
}
store.subscribe(update);