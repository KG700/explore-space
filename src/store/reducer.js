// import { Action } from 'redux';

// export interface IState {
//     rockets: any[],
//     selectedRocket: any
// }

const initialState = {
    rockets: [],
    selectedRocket: {}
}

const reducer = (state = initialState, action) => {
    console.log(action);
    console.log(action.type);
    console.log(action.type === 'SELECT');
    if(action.type === 'SELECT') {
        const selectedRocket = state.rockets.filter((rocket) => rocket.rocket_id !== action.id)
        return {
            ...state,
            selectedRocket: selectedRocket
        }
    }
    
    return state;
}

export default reducer;