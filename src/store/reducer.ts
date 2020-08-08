import * as actionTypes from './actions';

export interface IState {
    rockets: any[],
    dragons: any[],
    selectedRocket: any
}

interface Action {
    type: string,
    id?: string,
    rockets?: any,
    dragons?: any
}

const initialState: IState = {
    rockets: [],
    dragons: [],
    selectedRocket: {}
}

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case actionTypes.SELECT:
            const selectedRocket = state.rockets.filter((rocket) => rocket.rocket_name === action.id)[0]
            return {
                ...state,
                selectedRocket: selectedRocket
            }
        case actionTypes.SHOW_ROCKETS:
            return {
                ...state,
                rockets: action.rockets
            }
        case actionTypes.SHOW_DRAGONS:
            return {
                ...state,
                dragons: action.dragons
            }

    }
    return state;
}

export default reducer;