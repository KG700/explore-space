import * as actionTypes from './actions';

export interface IState {
    rockets: any[],
    selectedRocket: any
}

interface Action {
    type: string,
    id?: string,
    rockets?: any
}

const initialState: IState = {
    rockets: [{id: 0, rocket_name: 'falcon1'}, {id: 1, rocket_name: 'falcon2'}],
    selectedRocket: {id: 1, rocket_name: 'falcon2'}
}

const reducer = (state = initialState, action: Action) => {
    if (action.type === actionTypes.SELECT) {
        const selectedRocket = state.rockets.filter((rocket) => rocket.rocket_name === action.id)[0]
        return {
            ...state,
            selectedRocket: selectedRocket
        }
    }
    if (action.type === actionTypes.SHOW_ROCKETS) {
        return {
            ...state,
            rockets: action.rockets
        }
    }
    return state;
}

export default reducer;