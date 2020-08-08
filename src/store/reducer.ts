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
    rockets: [],
    selectedRocket: {}
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