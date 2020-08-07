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
    rockets: [{id: 'falcon1'}, {id: 'falcon2'}],
    selectedRocket: {id: 'falcon2'}
}

const reducer = (state = initialState, action: Action) => {
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