// import { Action } from 'redux';

export interface IState {
    rockets: any[],
    selectedRocket: any
}

interface Action {
    type: string,
    id?: string
}

const initialState: IState = {
    rockets: [{id: 0, rocket_name: 'falcon1'}, {id: 1, rocket_name: 'falcon2'}],
    selectedRocket: {id: 1, rocket_name: 'falcon2'}
}

const reducer = (state = initialState, action: Action) => {
    console.log(action);
    console.log(action.type);
    console.log(action.type === 'SELECT');
    console.log(state);
    if(action.type === 'SELECT') {
        const selectedRocket = state.rockets.filter((rocket) => rocket.rocket_name === action.id)[0]
        return {
            ...state,
            selectedRocket: selectedRocket
        }
    }
    
    return state;
}

export default reducer;